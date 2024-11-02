// types
import type { FC, ReactNode } from 'react';

// libraries
import React, { useEffect } from 'react';
import { Content } from 'antd/lib/layout/layout';
import { usePathname } from 'next/navigation';
import { Layout } from 'antd';

// styles
import styles from './primaryLayout.module.css';

// hooks
import withAuth from '@/hoc/withAuth.jsx';

// components
import LayoutHeader from '@/components/layout/PrimaryLayout/components/LayoutHeader';
import CustomDrawer from './components/CustomDrawer';
import CustomSider from './components/CustomSider';

// redux
import { useAppDispatch, useAppSelector } from '@/libs/redux/hooks';
import { selectSiderStatus, setCurrentPath, setPageSize } from '@/libs/redux/slices/sharedSlice';

// enums
import { PageSizeEnum } from '@/libs/redux/slices/sharedSlice/sharedSliceEnum';

const PrimaryLayout: FC<{ children: ReactNode }> = ({ children }) => {
  if (typeof document === 'undefined') {
    React.useLayoutEffect = React.useEffect;
  }

  // hooks
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  // selectors
  const isSiderCollapsed = useAppSelector(selectSiderStatus);

  const logout = () => {
    // TODO: implement logout function
  };

  // side effects
  useEffect(() => {
    dispatch(setCurrentPath(pathname));

    const handleResize = () => {
      if (window.innerWidth) {
        if (window.innerWidth >= 1280) {
          dispatch(setPageSize(PageSizeEnum.LG));
        } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
          dispatch(setPageSize(PageSizeEnum.MD));
        } else {
          dispatch(setPageSize(PageSizeEnum.SM));
        }
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [pathname, dispatch]);

  return (
    <Layout hasSider>
      <CustomSider logout={logout} />
      <CustomDrawer logout={logout} />
      <Layout style={{ marginInlineStart: isSiderCollapsed ? 0 : 236 }}>
        <LayoutHeader />
        <Content className={styles.content}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default withAuth(PrimaryLayout);
