// libraries
import { Flex, Tag, Typography } from 'antd';

// types
import type { TableProps } from 'antd';
import type { DataType } from './ordersTableType';

// enums
import { OrdersStatusEnum } from './ordersTableEnum';
import { PageSizeEnum } from '@/libs/redux/slices/sharedSlice/sharedSliceEnum';

// destrcuture
const { Text } = Typography;

type ColumnsType<T extends object> = TableProps<T>['columns'];

export const ordersTableColumns = (pageSize: PageSizeEnum): ColumnsType<DataType> => [
  {
    title: 'Order',
    dataIndex: 'orderId',
    key: 'orderId',
    render: (_, record) => {
      return (
        <Flex vertical>
          <Flex align="center" gap={8}>
            {record.newOrder && (
              <div style={{ height: 6, width: 6, borderRadius: '100%', background: 'red' }}></div>
            )}

            <Text strong>#{record.orderId}</Text>
          </Flex>
          <Text>{record.email}</Text>
        </Flex>
      );
    }
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (_, record) => {
      if (record.status === OrdersStatusEnum.CONFIRM) {
        return <Tag color={'green'}>{record.status}</Tag>;
      }
      if (record.status === OrdersStatusEnum.PENDING) {
        return <Tag color={'orange'}>{record.status}</Tag>;
      }
      if (record.status === OrdersStatusEnum.REJECT) {
        return <Tag color={'red'}>{record.status}</Tag>;
      }
      return '';
    }
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    hidden: pageSize === PageSizeEnum.SM
  },
  {
    title: 'Payment',
    dataIndex: 'payment',
    key: 'payment',
    render: (_, record) => `${record.paymentType} / ${record.paymentStatus}`,
    hidden: pageSize === PageSizeEnum.MD || pageSize === PageSizeEnum.SM
  },
  {
    title: 'Waiter',
    dataIndex: 'waiter',
    key: 'waiter',
    hidden: pageSize === PageSizeEnum.MD || pageSize === PageSizeEnum.SM
  },
  {
    title: 'Cost',
    dataIndex: 'cost',
    key: 'cost',
    render: (cost: number) => `€ ${cost.toLocaleString('en')}`,
    hidden: pageSize === PageSizeEnum.MD || pageSize === PageSizeEnum.SM
  },
  {
    title: 'Date & Time',
    dataIndex: 'utcDateString',
    key: 'utcDateString',
    render: (utcDateString: number) => `${new Date(utcDateString).toLocaleString('en')}`,
    hidden: pageSize === PageSizeEnum.MD || pageSize === PageSizeEnum.SM
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions'
  },
  {
    title: 'More',
    dataIndex: 'more',
    key: 'more'
  }
];
