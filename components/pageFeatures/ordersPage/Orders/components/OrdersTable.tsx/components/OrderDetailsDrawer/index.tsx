// types
import type { FC } from 'react';

// libraries
import { Button, Drawer, Flex, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { IoShareSocialOutline } from 'react-icons/io5';
import { blue } from '@ant-design/colors';

// redux
import { useAppDispatch, useAppSelector } from '@/libs/redux/hooks';
import {
  closeOrderDetailsDrawer,
  selectOrderDetailsDrawerStatus,
  selectToggleOrderDetailsDrawerType,
  toggleOrderDetailsDrawerType
} from '@/libs/redux/slices/ordersSlice';

// enums
import { NotificationEnum } from '@/enums/common';
import { OrderDetailsDrawerTypeEnum } from '@/libs/redux/slices/ordersSlice/ordersSliceEnum';

// components
import Details from './components/Details';
import Delivery from './components/Delivery';

// utils
import openNotification from '@/utils/notification';

const OrderDetailsDrawer: FC = () => {
  // hooks
  const dispatch = useAppDispatch();

  // selectors
  const orderDetailsDrawerStatus = useAppSelector(selectOrderDetailsDrawerStatus);
  const orderDetailsDrawerType = useAppSelector(selectToggleOrderDetailsDrawerType);

  // handlers
  const onClose = () => {
    dispatch(closeOrderDetailsDrawer());
  };

  return (
    <Drawer
      title="Order details"
      onClose={onClose}
      open={orderDetailsDrawerStatus}
      extra={
        <Flex gap={8}>
          <Button
            style={{ color: blue.primary }}
            type="text"
            onClick={() => openNotification(NotificationEnum.SUCCESS, 'Successful', 'Copied!')}
            size="large"
            icon={<IoShareSocialOutline />}
          />
          <Button
            style={{ color: blue.primary }}
            type="text"
            onClick={() => openNotification(NotificationEnum.INFO, 'Info', 'Download started.')}
            size="large"
            icon={<DownloadOutlined />}
          />
        </Flex>
      }
    >
      <Flex vertical gap={32}>
        <Radio.Group
          buttonStyle="solid"
          defaultValue={OrderDetailsDrawerTypeEnum.DETAILS}
          block
          value={orderDetailsDrawerType}
          onChange={() => dispatch(toggleOrderDetailsDrawerType())}
        >
          <Radio.Button value={OrderDetailsDrawerTypeEnum.DETAILS}>Order Details</Radio.Button>
          <Radio.Button value={OrderDetailsDrawerTypeEnum.DELIVERY}>Delivery</Radio.Button>
        </Radio.Group>
        {orderDetailsDrawerType === OrderDetailsDrawerTypeEnum.DETAILS && <Details />}
        {orderDetailsDrawerType === OrderDetailsDrawerTypeEnum.DELIVERY && <Delivery />}

        {orderDetailsDrawerType === OrderDetailsDrawerTypeEnum.DETAILS && (
          <Button
            onClick={() => openNotification(NotificationEnum.INFO, 'Info', 'Printing....')}
            type="primary"
            block
          >
            Print Details
          </Button>
        )}
      </Flex>
    </Drawer>
  );
};

export default OrderDetailsDrawer;
