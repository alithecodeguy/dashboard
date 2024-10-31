// types
import type { FC, ReactNode } from 'react';
import type { Key } from 'react';
import type { MenuItem } from './primaryLayoutTypes';

// libraries
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Content } from 'antd/lib/layout/layout';
import { usePathname, useRouter } from 'next/navigation';
import { Drawer, Flex, Input, Layout, Menu } from 'antd';
import {
  CalendarFilled,
  LogoutOutlined,
  ShoppingFilled,
  ReadFilled,
  SettingFilled,
  ContactsFilled,
  LayoutFilled,
  CreditCardFilled,
  QuestionCircleFilled,
  SearchOutlined
} from '@ant-design/icons';

// configs
import { routes } from '@/configs/routes.ts';

// styles
import { primaryLayoutReactStyles } from './primaryLayoutReactStyles.ts';

// hooks
import withAuth from '@/hoc/withAuth.jsx';

// components
import LayoutHeader from '@/components/common/LayoutHeader/index.tsx';

// destructure
const { Sider } = Layout;

// utils
function getItem(label: ReactNode, key: Key, icon?: ReactNode, children?: MenuItem[]): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem;
}

const PrimaryLayout: FC<{ children: ReactNode }> = ({ children }) => {
  // local states
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [drawerStatus, setDrawerStatus] = useState<boolean>(false);

  // menu items
  const dashboardItems: MenuItem[] = [
    getItem('Orders', routes.HOME, <ShoppingFilled className="custom-menu-item-icon-size" />),
    getItem(
      'Reservation',
      '/reservation',
      <CalendarFilled className="custom-menu-item-icon-size" />,
      [getItem('Reservation Setting', routes.RESERVATION_SETTING), getItem('Tables', routes.TABLES)]
    ),
    getItem('Food Menu', '/food-menu', <ReadFilled className="custom-menu-item-icon-size" />, [
      getItem('Categories', routes.CATEGORIES),
      getItem('Foods', routes.FOODS)
    ]),
    getItem('Setting', '/setting', <SettingFilled className="custom-menu-item-icon-size" />, [
      getItem('Hours Setting', routes.HOURS_SETTING),
      getItem('Discounts', routes.DISCOUNTS)
    ]),
    getItem('Waiters', routes.WAITERS, <ContactsFilled className="custom-menu-item-icon-size" />),
    getItem(
      'POS System',
      routes.POS_SYSTEM,
      <LayoutFilled className="custom-menu-item-icon-size" />
    ),
    getItem(
      'Finances',
      routes.FINANCES,
      <CreditCardFilled className="custom-menu-item-icon-size" />
    ),
    getItem(
      'Support',
      routes.SUPPORT,
      <QuestionCircleFilled className="custom-menu-item-icon-size" />
    )
  ];

  const logoutItems: MenuItem[] = [getItem('Log Out', 'menu_item_3', <LogoutOutlined />)];

  // hooks
  const router = useRouter();
  const pathname = usePathname();

  // local states
  const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname]);

  const logout = () => {
    // TODO: implement logout function
  };

  // handlers
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const toggleDrawer = () => {
    setDrawerStatus(!drawerStatus);
  };

  // side effects
  useEffect(() => {
    setSelectedKeys([pathname]);
  }, [pathname]);

  return (
    <Layout style={primaryLayoutReactStyles.container()}>
      <Sider
        theme="light"
        width={236}
        breakpoint="lg"
        collapsedWidth="0"
        collapsible
        collapsed={collapsed}
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          toggleCollapsed();
          setDrawerStatus(false);
        }}
        trigger={null}
        style={{ background: '#FBFBFB', borderRight: '2px solid rgba(0,0,0,0.06)' }}
      >
        <Flex vertical style={primaryLayoutReactStyles.siderContent()}>
          <Flex
            justify="center"
            style={primaryLayoutReactStyles.siderHeader()}
            onClick={() => router.push(routes.HOME)}
          >
            <Image src={'/assets/images/png/logo.png'} width={136} height={33} alt={'logo'} />
          </Flex>
          <Flex vertical justify="space-between" flex="1 1 auto">
            <Menu
              selectedKeys={selectedKeys}
              mode="inline"
              items={dashboardItems}
              onClick={({ key }: { key: string }) => router.push(key)}
            />

            <Menu mode="inline" items={logoutItems} onClick={logout} style={{ color: '#FF4D4F' }} />
          </Flex>
        </Flex>
      </Sider>
      <Drawer
        width={280}
        title="Digimenu"
        placement="left"
        closable={true}
        onClose={() => setDrawerStatus(false)}
        visible={drawerStatus}
        style={{ padding: 0 }}
      >
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
            onClick={({ key }: { key: string }) => router.push(key)}
            style={{ borderInlineEnd: '0px' }}
          />

          <Menu mode="inline" items={logoutItems} onClick={logout} style={{ color: '#FF4D4F' }} />
        </Flex>
      </Drawer>
      <Layout
        style={{
          height: '100%',
          maxHeight: '100%',
          overflow: 'auto',
          position: 'relative'
        }}
      >
        <LayoutHeader collapsed={collapsed} toggleDrawer={toggleDrawer} />
        <Content style={{ padding: 20, background: 'white' }}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default withAuth(PrimaryLayout);
