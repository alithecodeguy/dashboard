// types
import type { FC } from 'react';

// libraries
import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { Flex, Layout, Menu } from 'antd';

// configs
import { routes } from '@/configs/routes.ts';

// styles
import styles from './customSider.module.css';

// components
import { dashboardItems, logoutItems } from '../../items';
import { useAppDispatch, useAppSelector } from '@/libs/redux/hooks';
import {
  closeDrawer,
  selectCurrentPath,
  selectSiderStatus,
  toggleSiderStatus
} from '@/libs/redux/slices/sharedSlice';

// destructure
const { Sider } = Layout;

const CustomSider: FC<{
  logout: () => void;
}> = ({ logout }) => {
  // hooks
  const router = useRouter();
  const dispatch = useAppDispatch();

  // selectors
  const isSiderCollapsed = useAppSelector(selectSiderStatus);
  const currentPath = useAppSelector(selectCurrentPath);

  return (
    <Sider
      theme="light"
      width={236}
      breakpoint="lg"
      collapsedWidth="0"
      collapsible
      collapsed={isSiderCollapsed}
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={() => {
        dispatch(toggleSiderStatus());
        dispatch(closeDrawer());
      }}
      trigger={null}
      style={{ background: '#FBFBFB', borderRight: '2px solid rgba(0,0,0,0.06)' }}
    >
      <Flex vertical className={styles.siderContent}>
        <Flex
          justify="center"
          className={styles.siderHeader}
          onClick={() => router.push(routes.HOME)}
        >
          <Image src={'/assets/images/png/logo.png'} width={136} height={33} alt={'logo'} />
        </Flex>
        <Flex vertical justify="space-between" flex="1 1 auto">
          <Menu
            selectedKeys={currentPath}
            mode="inline"
            items={dashboardItems}
            onClick={({ key }: { key: string }) => {
              router.push(key);
              closeDrawer();
            }}
          />

          <Menu mode="inline" items={logoutItems} onClick={logout} style={{ color: '#FF4D4F' }} />
        </Flex>
      </Flex>
    </Sider>
  );
};

export default CustomSider;
