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

// enums
import { CategoryStatusEnum } from './categoriesTableEnum';
import { RowContext } from '.';

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

export const categoriesTableColumns = (): ColumnsType<DataType> => [
  { key: 'sort', align: 'center', width: 80, render: () => <DragHandle /> },
  {
    title: 'Name & Description',
    dataIndex: 'categoryTitle',
    key: 'categoryTitle',
    render: (_, record) => {
      return (
        <Flex vertical>
          <Image src={record.imageUrl} height={72} width={72} alt={record.categoryTitle} />
          <Text strong>{record.categoryTitle}</Text>
          <Text>{record.categoryDescription}</Text>
        </Flex>
      );
    }
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (_, record) => {
      if (record.categoryStatus === CategoryStatusEnum.ACTIVE) {
        return <Tag color={'blue'}>{record.categoryStatus}</Tag>;
      }
      if (record.categoryStatus === CategoryStatusEnum.DEACTIVE) {
        return <Tag color={'red'}>{record.categoryStatus}</Tag>;
      }

      return '';
    }
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    render: (_, record) => (
      <Flex gap={12}>
        <RiEditFill size={20} style={{ cursor: 'pointer' }} />
        <RiDeleteBin2Fill size={20} style={{ cursor: 'pointer' }} />
      </Flex>
    )
  }
];
