// types
import type { FC, ReactNode } from 'react';

// libraries
import { useEffect, useState } from 'react';
import { Content } from 'antd/lib/layout/layout';
import { usePathname } from 'next/navigation';
import { Layout } from 'antd';

// styles
import styles from './primaryLayout.module.css';

// hooks
import withAuth from '@/hoc/withAuth.jsx';

// components
import LayoutHeader from '@/components/common/LayoutHeader/index.tsx';
import CustomDrawer from './components/CustomDrawer';
import CustomSider from './components/CustomSider';

const PrimaryLayout: FC<{ children: ReactNode }> = ({ children }) => {
  // local states
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [drawerStatus, setDrawerStatus] = useState<boolean>(false);

  // hooks
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
    <Layout className={styles.container}>
      <CustomSider
        collapsed={collapsed}
        toggleCollapsed={toggleCollapsed}
        selectedKeys={selectedKeys}
        closeDrawer={() => setDrawerStatus(false)}
        logout={logout}
      />
      <CustomDrawer
        drawerStatus={drawerStatus}
        selectedKeys={selectedKeys}
        closeDrawer={() => setDrawerStatus(false)}
        logout={logout}
      />
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
