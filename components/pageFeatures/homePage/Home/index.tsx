// libraries
import { Button, Col, Flex, Input, Row, Tabs, TabsProps, Typography } from 'antd';
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';

// types
import type { FC } from 'react';

// styles
import styles from './home.module.css';

// redux
import { useAppSelector } from '@/libs/redux/hooks';
import { selectSiderStatus } from '@/libs/redux/slices/sharedSlice';

// hooks
import usePageTitle from '@/hooks/usePageTitle';

// destructure
const { Text } = Typography;

const Home: FC = () => {
  // hooks
  const pageTitle = usePageTitle();

  // selectors
  const isSiderCollapsed = useAppSelector(selectSiderStatus);

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'All Orders',
      children: 'Content of All Orders'
    },
    {
      key: '2',
      label: 'New Orders',
      children: 'Content of New Orders'
    },
    {
      key: '3',
      label: 'At Restaurant',
      children: 'Content of At Restaurant'
    },
    {
      key: '4',
      label: 'At Home',
      children: 'Content of At Home'
    },
    {
      key: '5',
      label: 'Archived',
      children: 'Content of Archived'
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

export default Home;
