// types
import type { FC } from 'react';

// strings
import { Header } from 'antd/lib/layout/layout';
import { Avatar, Badge, Button, Flex, Radio } from 'antd';
import { Input } from 'antd';
import { Typography } from 'antd';
import { BellFilled, SearchOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

// redux
import { useAppDispatch, useAppSelector } from '@/libs/redux/hooks';
import { openDrawer, selectCurrentPath, selectSiderStatus } from '@/libs/redux/slices/sharedSlice';

// styles
import styles from './layoutHeader.module.css';
import usePageTitle from '@/hooks/usePageTitle';

// destructure
const { Text } = Typography;

const LayoutHeader: FC = () => {
  // hooks
  const dispatch = useAppDispatch();
  const pageTitle = usePageTitle();

  // selectors
  const isSiderCollapsed = useAppSelector(selectSiderStatus);

  return (
    <Header className={styles.header}>
      <Flex justify="space-between" align="center" className={styles.header_inner_container}>
        <Flex align="center" gap={16}>
          {isSiderCollapsed && (
            <Button className="custom-button" onClick={() => dispatch(openDrawer())}>
              <MenuUnfoldOutlined className={styles.sider_collapse_button_icon} />
            </Button>
          )}
          {isSiderCollapsed && <Text style={{ fontSize: '20px', paddingTop: 4 }}>{pageTitle}</Text>}
          {!isSiderCollapsed && (
            <Input
              // onChange={onSearch}
              style={{ width: 300 }}
              size="large"
              placeholder="Search"
              allowClear
              prefix={<SearchOutlined className={styles.search_input_icon} />}
            />
          )}
        </Flex>

        <Flex align="center" gap={24}>
          {!isSiderCollapsed && (
            <Radio.Group
              buttonStyle="solid"
              defaultValue="EN"
              // value={position} onChange={(e) => setPosition(e.target.value)}
            >
              <Radio.Button value="EN">EN</Radio.Button>
              <Radio.Button value="DE">DE</Radio.Button>
            </Radio.Group>
          )}
          <Badge count={0} showZero>
            <Avatar className={styles.avatar} shape="square" size="large" icon={<BellFilled />} />
          </Badge>
          {!isSiderCollapsed && (
            <Flex>
              <Text>Hello,</Text>
              <Text strong>samantha</Text>
            </Flex>
          )}
          <Avatar size={44} src="/assets/images/png/sample_avatar.png" />
        </Flex>
      </Flex>
    </Header>
  );
};

export default LayoutHeader;
