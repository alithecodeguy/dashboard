// types
import {
  OrdersPaymentStatusEnum,
  OrdersPaymentTypeEnum,
  OrdersStatusEnum,
  OrdersTypeEnum
} from './ordersTableEnum';
import type { DataType } from './ordersTableType';

export const ordersTableMockData: DataType[] = [
  {
    key: '1',
    order: 12345,
    status: OrdersStatusEnum.CONFIRM,
    type: OrdersTypeEnum.AT_HOME,
    payment: [OrdersPaymentTypeEnum.IN_PLACE, OrdersPaymentStatusEnum.PAID],
    waiter: 'David',
    cost: 2000,
    utcDate: 'Sat, 02 Nov 2024 07:00:42 GMT'
  }

  //   order: number;
  //   status: OrdersStatusEnum;
  //   type: OrdersTypeEnum;
  //   payment: [OrdersPaymentTypeEnum, OrdersPaymentStatusEnum];
  //   waiter: string;
  //   cost: number;
  //   date: string;
];
