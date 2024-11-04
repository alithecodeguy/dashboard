// libraries
import { Button, Flex, Tag, Typography } from 'antd';
import Image from 'next/image';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { RiEditFill } from 'react-icons/ri';
import { HolderOutlined } from '@ant-design/icons';
import { useContext } from 'react';

// types
import type { TableProps } from 'antd';
import type { DataType } from './categoriesTableType';
import type { FC } from 'react';

// enums
import { CategoryStatusEnum } from './categoriesTableEnum';
import { RowContext } from '.';
import { PageSizeEnum } from '@/libs/redux/slices/sharedSlice/sharedSliceEnum';

// destrcuture
const { Text } = Typography;

type ColumnsType<T extends object> = TableProps<T>['columns'];

const DragHandle: React.FC = () => {
  const { setActivatorNodeRef, listeners } = useContext(RowContext);
  return (
    <Button
      type="text"
      size="small"
      icon={<HolderOutlined />}
      style={{ cursor: 'move' }}
      ref={setActivatorNodeRef}
      {...listeners}
    />
  );
};

const StatusTag: FC<{ categoryStatus: CategoryStatusEnum }> = ({ categoryStatus }) => {
  if (categoryStatus === CategoryStatusEnum.ACTIVE) {
    return (
      <Tag style={{ maxWidth: 70 }} color={'blue'}>
        {categoryStatus}
      </Tag>
    );
  }
  if (categoryStatus === CategoryStatusEnum.DEACTIVE) {
    return (
      <Tag style={{ maxWidth: 70 }} color={'red'}>
        {categoryStatus}
      </Tag>
    );
  }

  return <></>;
};

const ActionButtons: FC = () => {
  return (
    <Flex gap={12}>
      <RiEditFill size={20} style={{ cursor: 'pointer' }} />
      <RiDeleteBin2Fill size={20} style={{ cursor: 'pointer' }} />
    </Flex>
  );
};

export const categoriesTableColumns = (pageSize: PageSizeEnum): ColumnsType<DataType> => [
  { key: 'sort', align: 'center', width: 80, render: () => <DragHandle /> },
  {
    title: 'Name & Description',
    dataIndex: 'categoryTitle',
    key: 'categoryTitle',
    render: (_, record) => {
      return (
        <Flex vertical gap={4}>
          <Image src={record.imageUrl} height={72} width={72} alt={record.categoryTitle} />
          <Text strong>{record.categoryTitle}</Text>
          <Text>{record.categoryDescription}</Text>
          {pageSize === PageSizeEnum.SM && (
            <Flex gap={8}>
              <StatusTag categoryStatus={record.categoryStatus} />
              <ActionButtons />
            </Flex>
          )}
        </Flex>
      );
    }
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    hidden: pageSize === PageSizeEnum.SM,
    render: (_, record) => <StatusTag categoryStatus={record.categoryStatus} />
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    hidden: pageSize === PageSizeEnum.SM,
    render: (_, record) => <ActionButtons />
  }
];
