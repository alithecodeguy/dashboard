// types
import type { FC } from 'react';

// libraries
import { Drawer, Flex, Row } from 'antd';

// redux
import { useAppDispatch, useAppSelector } from '@/libs/redux/hooks';
import {
  closeOrderDetailsDrawer,
  selectOrderDetailsDrawerStatus
} from '@/libs/redux/slices/ordersSlice';

const OrderDetailsDrawer: FC = () => {
  // hooks
  const dispatch = useAppDispatch();

  // selectors
  const orderDetailsDrawerStatus = useAppSelector(selectOrderDetailsDrawerStatus);

  const onClose = () => {
    dispatch(closeOrderDetailsDrawer());
  };

  return (
    <Drawer title="Order details" onClose={onClose} open={orderDetailsDrawerStatus}>
      <Flex vertical gap={32}>
        <Flex>Toggle Buttons</Flex>
        <Flex>Order details</Flex>
        <Flex>items</Flex>
        <Flex>note</Flex>
        <Flex>payment details</Flex>
      </Flex>
    </Drawer>
  );
};

export default OrderDetailsDrawer;
