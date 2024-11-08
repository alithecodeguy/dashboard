// libraries
import { Button, Flex, Tag, Typography } from 'antd';

// types
import type { TableProps } from 'antd';
import type { DataType } from './foodsTableType';
import type { FC } from 'react';

// enums
import { FoodsStatusEnum } from './foodsTableEnum';

// redux
import { useAppDispatch } from '@/libs/redux/hooks';
import { PageSizeEnum } from '@/libs/redux/slices/sharedSlice/sharedSliceEnum';
import { changeEditableFoodId, openEditFoodDrawer } from '@/libs/redux/slices/foodsSlice';

// libraries
import Image from 'next/image';
import { RiDeleteBin2Fill, RiEditFill } from 'react-icons/ri';

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

const ActionButtons: FC<{ showDeleteConfirm: () => void; foodId: number }> = ({
  showDeleteConfirm,
  foodId
}) => {
  const dispatch = useAppDispatch();
  return (
    <Flex gap={12}>
      <RiEditFill
        onClick={() => {
          dispatch(openEditFoodDrawer());
          dispatch(changeEditableFoodId(foodId));
        }}
        size={20}
        style={{ cursor: 'pointer' }}
      />
      <RiDeleteBin2Fill
        onClick={() => showDeleteConfirm()}
        size={20}
        style={{ cursor: 'pointer' }}
      />
    </Flex>
  );
};

export const ordersTableColumns = (
  pageSize: PageSizeEnum,
  openDetailsDrawer: () => void,
  showDeleteConfirm: () => void
): ColumnsType<DataType> => [
  {
    title: 'Name & Description',
    dataIndex: 'nameAndDescription',
    key: 'nameAndDescription',
    render: (_, record) => {
      return (
        <Flex vertical gap={4}>
          <Image src={record.foodImageUrl} height={72} width={72} alt={record.foodCategory} />
          <Text strong>#{record.foodId}</Text>
          <Text strong>{record.foodTitle}</Text>
          <Text>{record.foodDescription}</Text>
          {pageSize === PageSizeEnum.SM && (
            <Flex gap={12} align="center">
              <StatusTag foodsStatus={record.foodStatus} />
              <ActionButtons showDeleteConfirm={showDeleteConfirm} foodId={record.foodId} />
              <Button onClick={() => openDetailsDrawer()} type="link" style={{ paddingLeft: 0 }}>
                See Extras
              </Button>
            </Flex>
          )}
        </Flex>
      );
    }
  },
  {
    title: 'Category',
    dataIndex: 'foodCategory',
    key: 'foodCategory',
    hidden: pageSize === PageSizeEnum.SM || pageSize === PageSizeEnum.MD
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    hidden: pageSize === PageSizeEnum.SM,
    render: (_, record) => {
      return <StatusTag foodsStatus={record.foodStatus} />;
    }
  },
  {
    title: 'Price',
    dataIndex: 'foodPrice',
    key: 'foodPrice',
    hidden: pageSize === PageSizeEnum.SM || pageSize === PageSizeEnum.MD,
    render: (price: number) => `€ ${price.toLocaleString('en')}`
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    hidden: pageSize === PageSizeEnum.SM,
    render: (_, record) => (
      <ActionButtons showDeleteConfirm={showDeleteConfirm} foodId={record.foodId} />
    )
  },
  {
    title: 'Extras',
    dataIndex: 'extra',
    key: 'extra',
    hidden: pageSize === PageSizeEnum.SM,
    render: () => (
      <Button onClick={() => openDetailsDrawer()} type="link" style={{ paddingLeft: 0 }}>
        See Extras
      </Button>
    )
  }
];
