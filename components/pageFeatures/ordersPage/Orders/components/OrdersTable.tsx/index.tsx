// libraries
import { Button, Flex, Table, Typography } from 'antd';

// types
import type { FC } from 'react';
import type { DataType } from './ordersTableType';

// table configs
import { ordersTableColumns } from './ordersTableDef';
import { ordersTableMockData } from './ordersTableMockData';

// redux
import { useAppDispatch, useAppSelector } from '@/libs/redux/hooks';
import { selectPageSize } from '@/libs/redux/slices/sharedSlice';
import { openOrderDetailsDrawer } from '@/libs/redux/slices/ordersSlice';

// enums
import { PageSizeEnum } from '@/libs/redux/slices/sharedSlice/sharedSliceEnum';
import { OrdersFilterEnum, OrdersTypeEnum } from './ordersTableEnum';

// components
import OrderDetailsDrawer from './components/OrderDetailsDrawer';

// destructure
const { Text } = Typography;

const OrdersTable: FC<{ ordersFilter: OrdersFilterEnum }> = ({ ordersFilter }) => {
  // selectors
  const pageSize = useAppSelector(selectPageSize);
  const dispatch = useAppDispatch();

  const openDetailsDrawer = () => {
    dispatch(openOrderDetailsDrawer());
  };

  let filteredData = ordersTableMockData;

  if (ordersFilter === OrdersFilterEnum.ALL) {
    filteredData = ordersTableMockData;
  }

  if (ordersFilter === OrdersFilterEnum.NEW) {
    filteredData = ordersTableMockData.filter((order) => order.newOrder);
  }

  if (ordersFilter === OrdersFilterEnum.AT_RESTAURANT) {
    filteredData = ordersTableMockData.filter(
      (order) => order.type === OrdersTypeEnum.AT_RESTAURANT
    );
  }

  if (ordersFilter === OrdersFilterEnum.AT_HOME) {
    filteredData = ordersTableMockData.filter((order) => order.type === OrdersTypeEnum.AT_HOME);
  }

  if (ordersFilter === OrdersFilterEnum.ARCHIVED) {
    filteredData = ordersTableMockData.filter((order) => order.archived);
  }

  return (
    <>
      <Table<DataType>
        columns={ordersTableColumns(pageSize!, openDetailsDrawer)}
        pagination={{ position: ['none', 'bottomCenter'] }}
        dataSource={filteredData}
        expandable={{
          expandedRowRender: (record) => (
            <Flex vertical>
              {pageSize === PageSizeEnum.SM && (
                <>
                  <Flex gap={8}>
                    <Text strong>Email:</Text>
                    <Text>{record.email}</Text>
                  </Flex>
                  <Flex gap={8}>
                    <Text strong>Type:</Text>
                    <Text>{record.type}</Text>
                  </Flex>
                </>
              )}
              {(pageSize === PageSizeEnum.MD || pageSize === PageSizeEnum.SM) && (
                <>
                  <Flex gap={8}>
                    <Text strong>Payment Type:</Text>
                    <Text>{record.paymentType}</Text>
                  </Flex>
                  <Flex gap={8}>
                    <Text strong>Payment Status:</Text>
                    <Text>{record.paymentStatus}</Text>
                  </Flex>
                  <Flex gap={8}>
                    <Text strong>Waiter:</Text>
                    <Text>{record.waiter}</Text>
                  </Flex>
                  <Flex gap={8}>
                    <Text strong>Cost:</Text>
                    <Text>{`€ ${record.cost.toLocaleString('en')}`}</Text>
                  </Flex>
                  <Flex gap={8}>
                    <Text strong>Date:</Text>
                    <Text>{`${new Date(record.utcDateString).toLocaleString('en')}`}</Text>
                  </Flex>
                </>
              )}

              {(pageSize === PageSizeEnum.MD || pageSize === PageSizeEnum.SM) && (
                <Flex gap={8}>
                  <Button
                    onClick={() => openDetailsDrawer()}
                    type="link"
                    style={{ paddingLeft: 0 }}
                  >
                    See Details
                  </Button>
                </Flex>
              )}
            </Flex>
          ),
          rowExpandable: (record) => pageSize !== PageSizeEnum.LG
        }}
      />
      <OrderDetailsDrawer />
    </>
  );
};

export default OrdersTable;
