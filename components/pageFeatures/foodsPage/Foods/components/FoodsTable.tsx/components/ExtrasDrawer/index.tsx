// types
import type { FC } from 'react';

// libraries
import { Drawer, Flex } from 'antd';

// redux
import { useAppDispatch, useAppSelector } from '@/libs/redux/hooks';
import {
  closeFoodExtrasDrawer,
  selectFoodExtrasDrawerStatus
} from '@/libs/redux/slices/foodsSlice';

// components
import Extras from './components/Extras';

const ExtrasDrawer: FC = () => {
  // hooks
  const dispatch = useAppDispatch();

  // selectors
  const foodExtrasDrawerStatus = useAppSelector(selectFoodExtrasDrawerStatus);

  // handlers
  const onClose = () => {
    dispatch(closeFoodExtrasDrawer());
  };

  return (
    <Drawer title="Extras" onClose={onClose} open={foodExtrasDrawerStatus}>
      <Flex vertical gap={32}>
        <Extras />
      </Flex>
    </Drawer>
  );
};

export default ExtrasDrawer;
