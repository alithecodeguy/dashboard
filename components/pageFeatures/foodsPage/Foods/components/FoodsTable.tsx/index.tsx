// libraries
import { Button, Flex, Modal, Table, Typography } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';

// types
import type { FC } from 'react';
import type { DataType } from './foodsTableType';

// table configs
import { ordersTableColumns } from './foodsTableDef';
import { ordersTableMockData } from './foodsTableMockData';

// redux
import { useAppDispatch, useAppSelector } from '@/libs/redux/hooks';
import { selectPageSize } from '@/libs/redux/slices/sharedSlice';
import { openFoodExtrasDrawer } from '@/libs/redux/slices/foodsSlice';

// enums
import { PageSizeEnum } from '@/libs/redux/slices/sharedSlice/sharedSliceEnum';
import { OrdersFilterEnum } from './foodsTableEnum';

// components
import ExtrasDrawer from './components/ExtrasDrawer';
import EditFoodDrawer from './components/EditFoodDrawer';
import AddNewFoodDrawer from './components/AddNewFoodDrawer';

// destructure
const { confirm } = Modal;
const { Text } = Typography;

const FoodsTable: FC<{ ordersFilter: OrdersFilterEnum }> = ({ ordersFilter }) => {
  // selectors
  const pageSize = useAppSelector(selectPageSize);
  const dispatch = useAppDispatch();

  const openExtrasDrawer = () => {
    dispatch(openFoodExtrasDrawer());
  };

  let filteredData = ordersTableMockData;

  if (ordersFilter === OrdersFilterEnum.ALL) {
    filteredData = ordersTableMockData;
  }

  // if (ordersFilter === OrdersFilterEnum.NEW) {
  //   filteredData = ordersTableMockData.filter((order) => order.newOrder);
  // }

  // if (ordersFilter === OrdersFilterEnum.AT_RESTAURANT) {
  //   filteredData = ordersTableMockData.filter(
  //     (order) => order.type === OrdersTypeEnum.AT_RESTAURANT
  //   );
  // }

  const showDeleteConfirm = () => {
    confirm({
      title: 'Are you sure delete this food?',
      icon: <ExclamationCircleFilled />,
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      }
    });
  };

  return (
    <>
      <Table<DataType>
        columns={ordersTableColumns(pageSize!, openExtrasDrawer, showDeleteConfirm)}
        pagination={{ position: ['none', 'bottomCenter'] }}
        dataSource={filteredData}
        expandable={{
          expandedRowRender: (record) => (
            <Flex vertical>
              {(pageSize === PageSizeEnum.SM || pageSize === PageSizeEnum.MD) && (
                <>
                  <Flex gap={8}>
                    <Text strong>Price:</Text>
                    <Text>{record.foodPrice}</Text>
                  </Flex>
                  <Flex gap={8}>
                    <Text strong>Category:</Text>
                    <Text>{record.foodCategory}</Text>
                  </Flex>
                  <Flex>
                    <Button onClick={openExtrasDrawer} type="link" style={{ paddingLeft: 0 }}>
                      See Extras
                    </Button>
                  </Flex>
                </>
              )}
            </Flex>
          ),
          rowExpandable: (record) => pageSize !== PageSizeEnum.LG
        }}
      />
      <ExtrasDrawer />
      <EditFoodDrawer />
      <AddNewFoodDrawer />
    </>
  );
};

export default FoodsTable;
