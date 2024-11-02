// libraries
import { Button, Col, Flex, Input, Row, Typography } from 'antd';
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';

// types
import type { FC } from 'react';

// styles
import styles from './reservation.module.css';

// redux
import { useAppSelector } from '@/libs/redux/hooks';
import { selectSiderStatus } from '@/libs/redux/slices/sharedSlice';

// hooks
import usePageTitle from '@/hooks/usePageTitle';

// destructure
const { Text } = Typography;

const Reservations: FC = () => {
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
            </Flex>
          </Flex>
          <Flex vertical gap={24} style={{ background: 'red' }}>
            Reservations
          </Flex>
        </Flex>
      </Col>
    </Row>
  );
};

export default Reservations;
