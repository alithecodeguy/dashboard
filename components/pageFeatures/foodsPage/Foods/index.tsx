// libraries
import { Button, Col, Flex, Input, Row, Tabs, TabsProps, Typography } from 'antd';
import { SearchOutlined, PlusCircleFilled } from '@ant-design/icons';

// types
import type { FC } from 'react';

// styles
import styles from './foods.module.css';

// redux
import { useAppDispatch, useAppSelector } from '@/libs/redux/hooks';
import { selectSiderStatus } from '@/libs/redux/slices/sharedSlice';
import { openAddNewFoodDrawer } from '@/libs/redux/slices/foodsSlice/index.ts';

// hooks
import usePageTitle from '@/hooks/usePageTitle';

// components
import OrdersTable from './components/FoodsTable.tsx/index.tsx';

// enums
import { OrdersFilterEnum } from './components/FoodsTable.tsx/foodsTableEnum.tsx';

// destructure
const { Text } = Typography;

const Orders: FC = () => {
  // hooks
  const pageTitle = usePageTitle();
  const dispatch = useAppDispatch();

  // selectors
  const isSiderCollapsed = useAppSelector(selectSiderStatus);

  const items: TabsProps['items'] = [
    {
      key: OrdersFilterEnum.ALL,
      label: OrdersFilterEnum.ALL,
      children: <OrdersTable ordersFilter={OrdersFilterEnum.ALL} />
    }
  ];

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <Row>
      <Col span={24}>
        <Flex vertical gap={16}>
          <Flex gap={24} align="center" justify="space-between">
            <Flex align="center" gap={24} style={{ flex: 1 }}>
              {!isSiderCollapsed && (
                <Text style={{ fontSize: '24px', lineHeight: '36px', fontWeight: 400 }}>
                  {pageTitle}
                </Text>
              )}
              <Input
                // onChange={onSearch}
                style={{ maxWidth: 300 }}
                size="large"
                placeholder="Search food, category, food id"
                allowClear
                prefix={<SearchOutlined className={styles.search_input_icon} />}
              />
            </Flex>
            <Button
              onClick={() => dispatch(openAddNewFoodDrawer())}
              type="primary"
              size={'large'}
              icon={<PlusCircleFilled />}
            >
              Add Food
            </Button>
          </Flex>
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </Flex>
      </Col>
    </Row>
  );
};

export default Orders;
