// types
import type { FC } from 'react';

// strings
import { Header } from 'antd/lib/layout/layout';
import { Avatar, Badge, Button, Flex, Radio } from 'antd';
import { Input } from 'antd';
import { Typography } from 'antd';
import { BellFilled, SearchOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@/libs/redux/hooks';
import { openDrawer, selectSiderStatus } from '@/libs/redux/slices/sharedSlice';

// destructure
const { Text } = Typography;

const LayoutHeader: FC = () => {
  // hooks
  const dispatch = useAppDispatch();

  // selectors
  const isSiderCollapsed = useAppSelector(selectSiderStatus);
  return (
    <Header
      style={{
        width: '100%',
        height: '96px',
        background: 'white',
        padding: '25px 16px',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '2px solid rgba(0,0,0,0.06)'
      }}
    >
      <Flex justify="space-between" align="center" style={{ width: '100%' }}>
        <Flex align="center" gap={24}>
          {isSiderCollapsed && (
            <Button className="custom-button" onClick={() => dispatch(openDrawer())}>
              <MenuUnfoldOutlined style={{ fontSize: '20px' }} />
            </Button>
          )}
          {!isSiderCollapsed && (
            <Input
              // onChange={onSearch}
              style={{ width: 300 }}
              size="large"
              placeholder="Search"
              allowClear
              prefix={<SearchOutlined style={{ color: 'rgba(0,0,0,0.45)' }} />}
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
            <Avatar
              style={{ background: '#E6F7FF', color: '#1890FF' }}
              shape="square"
              size="large"
              icon={<BellFilled />}
            />
          </Badge>
          <Flex>
            <Text>Hello,</Text>
            <Text strong>samantha</Text>
          </Flex>
          <Avatar size={44} src="/assets/images/png/sample_avatar.png" />
        </Flex>
      </Flex>
    </Header>
  );
};

export default LayoutHeader;
