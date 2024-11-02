// libraries
import { Key, ReactNode } from 'react';
import {
  CalendarFilled,
  LogoutOutlined,
  ShoppingFilled,
  ReadFilled,
  SettingFilled,
  ContactsFilled,
  LayoutFilled,
  CreditCardFilled,
  QuestionCircleFilled
} from '@ant-design/icons';

// types
import type { MenuItem } from './primaryLayoutTypes';

// configs
import { routes } from '@/configs/routes';

// utils
function getItem(label: ReactNode, key: Key, icon?: ReactNode, children?: MenuItem[]): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem;
}

// menu items
export const dashboardItems: MenuItem[] = [
  getItem('Orders', routes.ORDERS, <ShoppingFilled className="custom-menu-item-icon-size" />),
  getItem(
    'Reservations',
    routes.RESERVATIONS,
    <CalendarFilled className="custom-menu-item-icon-size" />
  ),
  getItem('Food Menu', '/food-menu', <ReadFilled className="custom-menu-item-icon-size" />, [
    getItem('Categories', routes.CATEGORIES),
    getItem('Foods', routes.FOODS)
  ]),
  getItem('Settings', '/settings', <SettingFilled className="custom-menu-item-icon-size" />, [
    getItem('Hours', routes.HOURS_SETTING),
    getItem('Discounts', routes.DISCOUNTS_SETTING),
    getItem('Tables', routes.TABLES_SETTING),
    getItem('Reservation', routes.RESERVATION_SETTING)
  ]),
  getItem('Waiters', routes.WAITERS, <ContactsFilled className="custom-menu-item-icon-size" />),
  getItem('POS System', routes.POS_SYSTEM, <LayoutFilled className="custom-menu-item-icon-size" />),
  getItem('Finances', routes.FINANCES, <CreditCardFilled className="custom-menu-item-icon-size" />),
  getItem(
    'Support',
    routes.SUPPORT,
    <QuestionCircleFilled className="custom-menu-item-icon-size" />
  )
];

export const logoutItems: MenuItem[] = [getItem('Log Out', 'menu_item_3', <LogoutOutlined />)];
