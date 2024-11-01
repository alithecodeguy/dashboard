// types
import type { FC, ReactNode } from 'react';

// libraries
import { useEffect } from 'react';
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

// redux
import { useAppDispatch } from '@/libs/redux/hooks';
import { setCurrentPath } from '@/libs/redux/slices/sharedSlice';

const PrimaryLayout: FC<{ children: ReactNode }> = ({ children }) => {
  // hooks
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  const logout = () => {
    // TODO: implement logout function
  };

  // side effects
  useEffect(() => {
    dispatch(setCurrentPath(pathname));
  }, [pathname]);

  return (
    <Layout className={styles.container}>
      <CustomSider logout={logout} />
      <CustomDrawer logout={logout} />
      <Layout className={styles.layout}>
        <LayoutHeader />
        <Content className={styles.content}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default withAuth(PrimaryLayout);
