// redux
import { useAppDispatch, useAppSelector } from '@/libs/redux/hooks';
import {
  clearEditableFoodId,
  closeEditFoodDrawer,
  selectEditFoodDrawerStatus
} from '@/libs/redux/slices/foodsSlice';

// libraries
import { Drawer } from 'antd';
import { useRef } from 'react';
import { Button, Form, Space } from 'antd';

// types
import { type FC } from 'react';
import { type FormInstance } from 'antd';

const EditFoodDrawer: FC = () => {
  // ref
  const formRef = useRef<FormInstance>(null);

  // hooks
  const dispatch = useAppDispatch();

  // selectors
  const addNewCategoryDrawerStatus = useAppSelector(selectEditFoodDrawerStatus);

  const onCloseDrawer = () => {
    // Handle the form submission logic here
    dispatch(closeEditFoodDrawer());
    dispatch(clearEditableFoodId());
  };

  const onFinish = (values: any) => {
    // Handle the form submission logic here
    console.log('Received values of form: ', values);
    onCloseDrawer();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Drawer
      title="Edit food"
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
      <Form ref={formRef} onFinish={onFinish} onFinishFailed={onFinishFailed} layout="vertical">
        ecit food form
      </Form>
    </Drawer>
  );
};

export default EditFoodDrawer;
