// libraries
import { Button, Col, Flex, Input, Row, Typography } from 'antd';
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

  return (
    <Row>
      <Col span={24}>
        <Flex vertical gap={24}>
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
          <Flex vertical gap={24} style={{ background: 'red' }}>
            <Flex>tabs</Flex>
            <Flex>table</Flex>
          </Flex>
        </Flex>
      </Col>
    </Row>
  );
};

export default Home;
