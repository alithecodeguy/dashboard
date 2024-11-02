// libraries
import { Table } from 'antd';

// types
import type { FC } from 'react';
import type { DataType } from './ordersTableType';

// table configs
import { ordersTableColumns } from './ordersTableDef';
import { ordersTableMockData } from './ordersTableMockData';

// redux
import { useAppSelector } from '@/libs/redux/hooks';
import { selectPageSize } from '@/libs/redux/slices/sharedSlice';

const OrdersTable: FC = () => {
  // selectors
  const pageSize = useAppSelector(selectPageSize);

  return (
    <Table<DataType>
      columns={ordersTableColumns(pageSize!)}
      pagination={{ position: ['none', 'bottomCenter'] }}
      dataSource={ordersTableMockData}
    />
  );
};

export default OrdersTable;
