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
import Details from './components/Extras';

// utils
import openNotification from '@/utils/notification';

const ExtrasDrawer: FC = () => {
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
    <Drawer title="Extras" onClose={onClose} open={orderDetailsDrawerStatus}>
      <Flex vertical gap={32}>
        {orderDetailsDrawerType === OrderDetailsDrawerTypeEnum.DETAILS && <Details />}
      </Flex>
    </Drawer>
  );
};

export default ExtrasDrawer;
