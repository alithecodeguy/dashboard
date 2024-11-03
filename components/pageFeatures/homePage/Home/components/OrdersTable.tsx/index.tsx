// libraries
import { Button, Flex, Table, Typography } from 'antd';

// types
import type { FC } from 'react';
import type { DataType } from './ordersTableType';

// table configs
import { ordersTableColumns } from './ordersTableDef';
import { ordersTableMockData } from './ordersTableMockData';

// redux
import { useAppSelector } from '@/libs/redux/hooks';
import { selectPageSize } from '@/libs/redux/slices/sharedSlice';
import { PageSizeEnum } from '@/libs/redux/slices/sharedSlice/sharedSliceEnum';

// destructure
const { Text } = Typography;

const OrdersTable: FC = () => {
  // selectors
  const pageSize = useAppSelector(selectPageSize);

  return (
    <Table<DataType>
      columns={ordersTableColumns(pageSize!)}
      pagination={{ position: ['none', 'bottomCenter'] }}
      dataSource={ordersTableMockData}
      expandable={{
        expandedRowRender: (record) => (
          <Flex vertical>
            {pageSize === PageSizeEnum.SM && (
              <Flex gap={8}>
                <Text strong>Type:</Text>
                <Text>{record.type}</Text>
              </Flex>
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
                <Button type="link" style={{ paddingLeft: 0 }}>
                  See Details
                </Button>
              </Flex>
            )}
          </Flex>
        ),
        rowExpandable: (record) => pageSize !== PageSizeEnum.LG
      }}
    />
  );
};

export default OrdersTable;
