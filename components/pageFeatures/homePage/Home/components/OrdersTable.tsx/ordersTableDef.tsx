// libraries
import { Space, Tag } from 'antd';

// types
import type { TableProps } from 'antd';
import type { DataType } from './ordersTableType';

type ColumnsType<T extends object> = TableProps<T>['columns'];

export const ordersTableColumns: ColumnsType<DataType> = [
  {
    title: 'Order',
    dataIndex: 'order',
    key: 'order'
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status'
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type'
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
