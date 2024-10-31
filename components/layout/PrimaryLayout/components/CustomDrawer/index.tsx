// types
import type { FC } from 'react';

// libraries
import { Drawer, Flex, Input, Menu, Radio } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

// items
import { dashboardItems, logoutItems } from '../../items';

const CustomDrawer: FC<{
  drawerStatus: boolean;
  closeDrawer: () => void;
  selectedKeys: string[];
  logout: () => void;
}> = ({ drawerStatus, closeDrawer, selectedKeys, logout }) => {
  // hooks
  const router = useRouter();

  return (
    <Drawer
      width={300}
      title="Digimenu"
      placement="left"
      closable={true}
      onClose={closeDrawer}
      open={drawerStatus}
      extra={
        <Radio.Group
          buttonStyle="solid"
          defaultValue="EN"
          // value={position} onChange={(e) => setPosition(e.target.value)}
        >
          <Radio.Button value="EN">EN</Radio.Button>
          <Radio.Button value="DE">DE</Radio.Button>
        </Radio.Group>
      }
      style={{ padding: 0 }}>
      <Flex vertical justify="space-between" flex="1 1 auto">
        <Input
          // onChange={onSearch}
          style={{ width: '100%', marginBottom: 40 }}
          size="large"
          placeholder="Search"
          allowClear
          prefix={<SearchOutlined style={{ color: 'rgba(0,0,0,0.45)' }} />}
        />
        <Menu
          selectedKeys={selectedKeys}
          mode="inline"
          items={dashboardItems}
          onClick={({ key }: { key: string }) => {
            router.push(key);
            closeDrawer();
          }}
          style={{ borderInlineEnd: '0px' }}
        />

        <Menu mode="inline" items={logoutItems} onClick={logout} style={{ color: '#FF4D4F' }} />
      </Flex>
    </Drawer>
  );
};

export default CustomDrawer;
