// libraries
import { Button, Flex, Tag, Typography } from 'antd';
import { MdDeliveryDining } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';
import { IoRestaurant } from 'react-icons/io5';
import { FaPersonArrowUpFromLine } from 'react-icons/fa6';
import { TfiWorld } from 'react-icons/tfi';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { FaRegCircleXmark } from 'react-icons/fa6';
import { FaStoreAlt } from 'react-icons/fa';
import { IoShareSocialOutline } from 'react-icons/io5';
import { IoPrintSharp } from 'react-icons/io5';
import { IoMdArchive } from 'react-icons/io';

// types
import type { TableProps } from 'antd';
import type { DataType } from './ordersTableType';

// enums
import {
  OrdersPaymentStatusEnum,
  OrdersPaymentTypeEnum,
  OrdersStatusEnum,
  OrdersTypeEnum
} from './ordersTableEnum';
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
          {pageSize !== PageSizeEnum.SM && <Text>{record.email}</Text>}
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
    hidden: pageSize === PageSizeEnum.SM,
    render: (_, record) => {
      if (record.type === OrdersTypeEnum.PICKUP) {
        return (
          <Flex gap={8} align="center">
            <MdDeliveryDining size={28} />
            <span>{record.type}</span>
          </Flex>
        );
      } else if (record.type === OrdersTypeEnum.AT_HOME) {
        return (
          <Flex gap={8} align="center">
            <FaHome size={20} />
            <span>{record.type}</span>
          </Flex>
        );
      } else if (record.type === OrdersTypeEnum.AT_RESTAURANT) {
        return (
          <Flex gap={8} align="center">
            <IoRestaurant size={18} />
            <span>{record.type}</span>
          </Flex>
        );
      } else if (record.type === OrdersTypeEnum.IN_STORE_PICKUP) {
        return (
          <Flex gap={8} align="center">
            <FaPersonArrowUpFromLine size={24} />
            <span>{record.type}</span>
          </Flex>
        );
      }
      return record.type;
    }
  },
  {
    title: 'Payment',
    dataIndex: 'payment',
    key: 'payment',
    hidden: pageSize === PageSizeEnum.MD || pageSize === PageSizeEnum.SM,
    render: (_, record) => (
      <Flex vertical align="start" justify="center">
        {record.paymentType === OrdersPaymentTypeEnum.ONLINE ? (
          <Flex gap={8} align="center">
            <TfiWorld size={16} />
            {record.paymentType}
          </Flex>
        ) : (
          <Flex gap={8} align="center">
            <FaStoreAlt size={16} />
            {record.paymentType}
          </Flex>
        )}
        {record.paymentStatus === OrdersPaymentStatusEnum.PAID ? (
          <Flex gap={8} align="center" style={{ color: 'green' }}>
            <FaRegCircleCheck size={16} />
            {record.paymentStatus}
          </Flex>
        ) : (
          <Flex gap={8} align="center" style={{ color: 'red' }}>
            <FaRegCircleXmark size={16} />
            {record.paymentStatus}
          </Flex>
        )}
      </Flex>
    )
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
    key: 'actions',
    render: (_, record) => (
      <Flex gap={12}>
        <IoShareSocialOutline size={20} />
        <IoPrintSharp size={20} />
        <IoMdArchive size={20} />
      </Flex>
    )
  },
  {
    title: 'More',
    dataIndex: 'more',
    key: 'more',
    render: () => (
      <Button type="link" style={{ paddingLeft: 0 }}>
        See Details
      </Button>
    )
  }
];
