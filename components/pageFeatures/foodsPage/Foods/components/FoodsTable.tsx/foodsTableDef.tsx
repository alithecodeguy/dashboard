// libraries
import { Button, Flex, Tag, Typography } from 'antd';

// types
import type { TableProps } from 'antd';
import type { DataType } from './foodsTableType';

// enums
import { PageSizeEnum } from '@/libs/redux/slices/sharedSlice/sharedSliceEnum';
import { IoPrintSharp, IoShareSocialOutline } from 'react-icons/io5';
import { FC } from 'react';
import { FoodsStatusEnum } from './foodsTableEnum';

// destrcuture
const { Text } = Typography;

type ColumnsType<T extends object> = TableProps<T>['columns'];

const StatusTag: FC<{ foodsStatus: FoodsStatusEnum }> = ({ foodsStatus }) => {
  if (foodsStatus === FoodsStatusEnum.ACTIVE) {
    return (
      <Tag style={{ maxWidth: 70 }} color={'blue'}>
        {foodsStatus}
      </Tag>
    );
  }
  if (foodsStatus === FoodsStatusEnum.DEACTIVE) {
    return (
      <Tag style={{ maxWidth: 70 }} color={'red'}>
        {foodsStatus}
      </Tag>
    );
  }

  return <></>;
};

export const ordersTableColumns = (
  pageSize: PageSizeEnum,
  openDetailsDrawer: () => void
): ColumnsType<DataType> => [
  {
    title: 'Food ID',
    dataIndex: 'foodId',
    key: 'foodId',
    render: (_, record) => {
      return (
        <Flex vertical>
          foodId
          {/* <Flex align="center" gap={8}>
            <Text strong style={{ color: record.newOrder ? 'blue' : 'initial' }}>
              #{record.orderId}
            </Text>
          </Flex>
          {pageSize !== PageSizeEnum.SM && <Text>{record.email}</Text>} */}
        </Flex>
      );
    }
  },
  {
    title: 'Food Image',
    dataIndex: 'foodImage',
    key: 'foodImage',
    render: (_, record) => {
      return (
        <Flex vertical>
          foodImage
          {/* <Flex align="center" gap={8}>
            <Text strong style={{ color: record.newOrder ? 'blue' : 'initial' }}>
              #{record.orderId}
            </Text>
          </Flex>
          {pageSize !== PageSizeEnum.SM && <Text>{record.email}</Text>} */}
        </Flex>
      );
    }
  },
  {
    title: 'Title & Description',
    dataIndex: 'foodInfo',
    key: 'foodInfo',
    render: (_, record) => {
      return (
        <Flex vertical>
          foodInfo
          {/* <Flex align="center" gap={8}>
            <Text strong style={{ color: record.newOrder ? 'blue' : 'initial' }}>
              #{record.orderId}
            </Text>
          </Flex>
          {pageSize !== PageSizeEnum.SM && <Text>{record.email}</Text>} */}
        </Flex>
      );
    }
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
    render: (_, record) => {
      return (
        <Flex vertical>
          category
          {/* <Flex align="center" gap={8}>
            <Text strong style={{ color: record.newOrder ? 'blue' : 'initial' }}>
              #{record.orderId}
            </Text>
          </Flex>
          {pageSize !== PageSizeEnum.SM && <Text>{record.email}</Text>} */}
        </Flex>
      );
    }
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (_, record) => {
      return <StatusTag foodsStatus={record.status} />;
    }
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (cost: number) => `€ ${cost.toLocaleString('en')}`
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    render: (_, record) => (
      <Flex gap={12}>
        <IoShareSocialOutline size={20} style={{ cursor: 'pointer' }} />
        <IoPrintSharp size={20} style={{ cursor: 'pointer' }} />
      </Flex>
    )
  },
  {
    title: 'Extras',
    dataIndex: 'extra',
    key: 'extra',
    hidden: pageSize === PageSizeEnum.MD || pageSize === PageSizeEnum.SM,
    render: () => (
      <Button onClick={() => openDetailsDrawer()} type="link" style={{ paddingLeft: 0 }}>
        See Extras
      </Button>
    )
  }
];
