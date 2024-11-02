// libraries
import { Flex, Space, Tag, Typography } from 'antd';

// types
import type { TableProps } from 'antd';
import type { DataType } from './ordersTableType';
import { OrdersStatusEnum } from './ordersTableEnum';

// destrcuture
const { Text } = Typography;

type ColumnsType<T extends object> = TableProps<T>['columns'];

export const ordersTableColumns: ColumnsType<DataType> = [
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
    key: 'type'
  },
  {
    title: 'Payment',
    dataIndex: 'payment',
    key: 'payment',
    render: (_, record) => `${record.paymentType} / ${record.paymentStatus}`
  },
  {
    title: 'Waiter',
    dataIndex: 'waiter',
    key: 'waiter'
  },
  {
    title: 'Cost',
    dataIndex: 'cost',
    key: 'cost',
    render: (cost: number) => `€ ${cost.toLocaleString('en')}`
  },
  {
    title: 'Date & Time',
    dataIndex: 'utcDateString',
    key: 'utcDateString',
    render: (utcDateString: number) => `${new Date(utcDateString).toLocaleString('en')}`
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
  //   {
  //     title: 'Tags',
  //     key: 'tags',
  //     dataIndex: 'tags',
  //     render: (tags: string[]) => (
  //       <span>
  //         {tags.map((tag) => {
  //           let color = tag.length > 5 ? 'geekblue' : 'green';
  //           if (tag === 'loser') {
  //             color = 'volcano';
  //           }
  //           return (
  //             <Tag color={color} key={tag}>
  //               {tag.toUpperCase()}
  //             </Tag>
  //           );
  //         })}
  //       </span>
  //     )
  //   },
  //   {
  //     title: 'Action',
  //     key: 'action',
  //     render: (_, record) => (
  //       <Space size="middle">
  //         <a>Invite {record.name}</a>
  //         <a>Delete</a>
  //       </Space>
  //     )
  //   }
];
