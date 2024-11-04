// redux
import { useAppDispatch, useAppSelector } from '@/libs/redux/hooks';
import {
  closeAddNewCategoryDrawerStatus,
  selectAddNewCategoryDrawerStatus
} from '@/libs/redux/slices/categoriesSlice';

// libraries
import { Drawer } from 'antd';
import { useRef } from 'react';
import { Button, Col, Form, Input, Row, Select, Space } from 'antd';

// types
import { type FC } from 'react';
import { type FormInstance } from 'antd';

const { Option } = Select;

const AddNewCategoryDrawer: FC = () => {
  // ref
  const formRef = useRef<FormInstance>(null);

  // hooks
  const dispatch = useAppDispatch();

  // selectors
  const addNewCategoryDrawerStatus = useAppSelector(selectAddNewCategoryDrawerStatus);

  const onFinish = (values: any) => {
    // Handle the form submission logic here
    console.log('Received values of form: ', values);
    dispatch(closeAddNewCategoryDrawerStatus());
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Drawer
      title="Add new food category"
      width={720}
      onClose={() => dispatch(closeAddNewCategoryDrawerStatus())}
      open={addNewCategoryDrawerStatus}
      styles={{
        body: {
          paddingBottom: 80
        }
      }}
      extra={
        <Space>
          <Button onClick={() => dispatch(closeAddNewCategoryDrawerStatus())}>Cancel</Button>
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
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="name"
              label="Category Name"
              rules={[{ required: true, message: 'Please enter category name' }]}
            >
              <Input placeholder="Enter a unique name for the category" />
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
                placeholder="Provide a brief description of the category"
              />
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
              <Select placeholder="Select whether this category is active and should be shown in the menu">
                <Option value="active">Active</Option>
                <Option value="deactive">Deactive</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};

export default AddNewCategoryDrawer;
