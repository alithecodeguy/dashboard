// libraries
import { Button, Col, Flex, Input, Row, Tabs, TabsProps, Typography } from 'antd';
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';

// types
import type { FC } from 'react';

// styles
import styles from './orders.module.css';

// redux
import { useAppSelector } from '@/libs/redux/hooks';
import { selectSiderStatus } from '@/libs/redux/slices/sharedSlice';

// hooks
import usePageTitle from '@/hooks/usePageTitle';

// components
import OrdersTable from './components/OrdersTable.tsx/index.tsx';

// enums
import { OrdersFilterEnum } from './components/OrdersTable.tsx/ordersTableEnum.tsx';

// destructure
const { Text } = Typography;

const Orders: FC = () => {
  // hooks
  const pageTitle = usePageTitle();

  // selectors
  const isSiderCollapsed = useAppSelector(selectSiderStatus);

  const items: TabsProps['items'] = [
    {
      key: OrdersFilterEnum.ALL,
      label: OrdersFilterEnum.ALL,
      children: <OrdersTable ordersFilter={OrdersFilterEnum.ALL} />
    },
    {
      key: OrdersFilterEnum.NEW,
      label: OrdersFilterEnum.NEW,
      children: <OrdersTable ordersFilter={OrdersFilterEnum.NEW} />
    },
    {
      key: OrdersFilterEnum.AT_RESTAURANT,
      label: OrdersFilterEnum.AT_RESTAURANT.replace('_', ' '),
      children: <OrdersTable ordersFilter={OrdersFilterEnum.AT_RESTAURANT} />
    },
    {
      key: OrdersFilterEnum.AT_HOME,
      label: OrdersFilterEnum.AT_HOME.replace('_', ' '),
      children: <OrdersTable ordersFilter={OrdersFilterEnum.AT_HOME} />
    },
    {
      key: OrdersFilterEnum.ARCHIVED,
      label: OrdersFilterEnum.ARCHIVED,
      children: <OrdersTable ordersFilter={OrdersFilterEnum.ARCHIVED} />
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
                placeholder="Search"
                allowClear
                prefix={<SearchOutlined className={styles.search_input_icon} />}
              />
            </Flex>
            <Button type="primary" size={'large'} icon={<DownloadOutlined />}>
              Export Excel
            </Button>
          </Flex>
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </Flex>
      </Col>
    </Row>
  );
};

export default Orders;
