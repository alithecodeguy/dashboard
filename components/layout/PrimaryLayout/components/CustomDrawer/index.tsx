// types
import type { FC } from 'react';

// libraries
import { Drawer, Flex, Input, Menu, Radio } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

// items
import { dashboardItems, logoutItems } from '../../items';

// redux
import { useAppDispatch, useAppSelector } from '@/libs/redux/hooks';
import {
  closeDrawer,
  selectCurrentPath,
  selectDrawerStatus
} from '@/libs/redux/slices/sharedSlice';

// styles
import styles from './customDrawer.module.css';

const CustomDrawer: FC<{
  logout: () => void;
}> = ({ logout }) => {
  // hooks
  const router = useRouter();
  const dispatch = useAppDispatch();

  // selectors
  const isDrawerClosed = useAppSelector(selectDrawerStatus);
  const currentPath = useAppSelector(selectCurrentPath);

  return (
    <Drawer
      width={300}
      title="Digimenu"
      placement="left"
      closable={true}
      onClose={() => dispatch(closeDrawer())}
      open={!isDrawerClosed}
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
    >
      <Flex vertical justify="space-between" flex="1 1 auto">
        <Input
          // onChange={onSearch}
          className={styles.search_input}
          size="large"
          placeholder="Search"
          allowClear
          prefix={<SearchOutlined className={styles.search_input_icon} />}
        />
        <Menu
          selectedKeys={currentPath}
          mode="inline"
          items={dashboardItems}
          onClick={({ key }: { key: string }) => {
            router.push(key);
            dispatch(closeDrawer());
          }}
          className={styles.top_menu}
        />

        <Menu
          mode="inline"
          items={logoutItems}
          onClick={logout}
          className={styles.logout_bottom_menu_item}
        />
      </Flex>
    </Drawer>
  );
};

export default CustomDrawer;
