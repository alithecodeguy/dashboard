// libraries
import { Table } from 'antd';

// types
import type { FC } from 'react';
import type { DataType } from './ordersTableType';

// table configs
import { ordersTableColumns } from './ordersTableDef';
import { ordersTableMockData } from './ordersTableMockData';

const OrdersTable: FC = () => {
  return (
    <Table<DataType>
      columns={ordersTableColumns}
      pagination={{ position: ['none', 'bottomCenter'] }}
      dataSource={ordersTableMockData}
    />
  );
};

export default OrdersTable;
