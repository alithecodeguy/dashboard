// redux
import { useAppDispatch, useAppSelector } from '@/libs/redux/hooks';
import {
  clearEditableCategoryId,
  closeEditCategoryDrawerStatus,
  selectEditCategoryDrawerStatus,
  selectEditableCategoryId
} from '@/libs/redux/slices/categoriesSlice';

// libraries
import { Drawer } from 'antd';
import { useEffect, useMemo, useRef } from 'react';
import { Button, Col, Form, Input, Row, Select, Space } from 'antd';

// types
import { type FC } from 'react';
import { type FormInstance } from 'antd';

// configs
import { categoriesTableMockData } from '../../categoriesTableMockData';

// enums
import { CategoryStatusEnum } from '../../categoriesTableEnum';

const { Option } = Select;

const EditCategoryDrawer: FC = () => {
  // ref
  const formRef = useRef<FormInstance>(null);

  // hooks
  const dispatch = useAppDispatch();

  // selectors
  const addNewCategoryDrawerStatus = useAppSelector(selectEditCategoryDrawerStatus);
  const editableCategoryId = useAppSelector(selectEditableCategoryId);

  const onCloseDrawer = () => {
    // Handle the form submission logic here
    dispatch(closeEditCategoryDrawerStatus());
    dispatch(clearEditableCategoryId());
  };

  const onFinish = (values: any) => {
    // Handle the form submission logic here
    console.log('Received values of form: ', values);
    onCloseDrawer();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const categoryInfo = categoriesTableMockData.find(
    (category) => category.categoryId === editableCategoryId
  );

  const initialValues = useMemo(() => {
    return {
      name: categoryInfo?.categoryTitle,
      description: categoryInfo?.categoryDescription,
      status: categoryInfo?.categoryStatus
    };
  }, [categoryInfo]);

  // this should be done to update data in form
  useEffect(() => {
    if (formRef.current) {
      formRef.current.resetFields();
    }
  }, [initialValues]);

  return (
    <Drawer
      title="Edit food category"
      width={720}
      onClose={() => onCloseDrawer()}
      open={addNewCategoryDrawerStatus}
      styles={{
        body: {
          paddingBottom: 80
        }
      }}
      extra={
        <Space>
          <Button onClick={() => onCloseDrawer()}>Cancel</Button>
          <Button
            onClick={() => {
              formRef.current?.validateFields().then(onFinish).catch(onFinishFailed);
            }}
            type="primary"
          >
            Update
          </Button>
        </Space>
      }
    >
      <Form
        ref={formRef}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        initialValues={initialValues}
      >
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
                <Option value={CategoryStatusEnum.ACTIVE}>Active</Option>
                <Option value={CategoryStatusEnum.DEACTIVE}>Deactive</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};

export default EditCategoryDrawer;
