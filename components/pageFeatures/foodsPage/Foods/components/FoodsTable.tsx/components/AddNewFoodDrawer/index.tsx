// redux
import { useAppDispatch, useAppSelector } from '@/libs/redux/hooks';
import {
  closeAddNewFoodDrawer,
  selectAddNewFoodDrawerStatus
} from '@/libs/redux/slices/foodsSlice';

// libraries
import { Checkbox, Drawer, Flex, Typography, Upload } from 'antd';
import { useRef } from 'react';
import { Button, Col, Form, Input, Row, Select, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

// types
import { type FC } from 'react';
import { type FormInstance } from 'antd';

// destructure
const { Option } = Select;

const AddNewFoodDrawer: FC = () => {
  // ref
  const formRef = useRef<FormInstance>(null);

  // hooks
  const dispatch = useAppDispatch();

  // selectors
  const addNewFoodDrawerStatus = useAppSelector(selectAddNewFoodDrawerStatus);

  const onFinish = (values: any) => {
    // Handle the form submission logic here
    console.log('Received values of form: ', values);
    dispatch(closeAddNewFoodDrawer());
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Drawer
      title="Add new food"
      width={720}
      onClose={() => dispatch(closeAddNewFoodDrawer())}
      open={addNewFoodDrawerStatus}
      styles={{
        body: {
          paddingBottom: 80
        }
      }}
      extra={
        <Space>
          <Button onClick={() => dispatch(closeAddNewFoodDrawer())}>Cancel</Button>
          <Button
            onClick={() => {
              formRef.current?.validateFields().then(onFinish).catch(onFinishFailed);
            }}
            type="primary"
          >
            Add
          </Button>
        </Space>
      }
    >
      <Form ref={formRef} onFinish={onFinish} onFinishFailed={onFinishFailed} layout="vertical">
        <Row gutter={16} style={{ marginBottom: 16 }}>
          <Col span={24}>
            <Upload
              name="avatar"
              listType="picture-circle"
              className="avatar-uploader"
              showUploadList={false}
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              // beforeUpload={beforeUpload}
              // onChange={handleChange}
            >
              <UploadButton />
            </Upload>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="name"
              label="Food Name"
              rules={[{ required: true, message: 'Please enter food name' }]}
            >
              <Input placeholder="Enter a unique name for the food" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="description"
              label="Description"
              rules={[
                {
                  required: true,
                  message: 'please enter description'
                }
              ]}
            >
              <Input.TextArea
                rows={4}
                showCount
                maxLength={100}
                placeholder="Provide a brief description of the food"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="id"
              label="Food Id"
              rules={[{ required: true, message: 'Please enter food id' }]}
            >
              <Input placeholder="Enter a unique id for the food" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="category"
              label="Category"
              rules={[{ required: true, message: 'Please choose the category' }]}
            >
              <Select placeholder="Select which category this food belongs to">
                <Option value="active">Active</Option>
                <Option value="deactive">Deactive</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="status"
              label="Status"
              rules={[{ required: true, message: 'Please choose the status' }]}
            >
              <Select placeholder="Select food status">
                <Option value="active">Active</Option>
                <Option value="deactive">Deactive</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item name="price" label="Price" rules={[{ message: 'Please enter food price' }]}>
              <Input placeholder="Enter food price" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="discount"
              label="Discount"
              rules={[{ message: 'Please enter food discount' }]}
            >
              <Input placeholder="Enter food discount" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Flex align="center">
              <Form.Item
                label="Special dietary options"
                name="special_dietary_options"
                rules={[{ message: 'Please choose dietary options' }]}
              >
                <Checkbox.Group
                  options={[
                    { label: 'Vegan', value: 'vegan' },
                    { label: 'Vegetarian', value: 'vegetarian' }
                  ]}
                  defaultValue={['Apple']}
                  // onChange={onChange}
                />
              </Form.Item>
            </Flex>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Flex align="center">
              <Form.Item label="Extra" name="extra" rules={[{ message: 'Please choose' }]}>
                <Checkbox.Group
                  options={[
                    {
                      label:
                        'If this dish has any extras, please check the box below to enable this option',
                      value: 'Extra'
                    }
                  ]}
                  defaultValue={['Extra']}
                  // onChange={onChange}
                />
              </Form.Item>
            </Flex>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};

export default AddNewFoodDrawer;

const UploadButton = () => (
  <button style={{ border: 0, background: 'none' }} type="button">
    <PlusOutlined />
    <div style={{ marginTop: 8 }}>Upload</div>
  </button>
);
