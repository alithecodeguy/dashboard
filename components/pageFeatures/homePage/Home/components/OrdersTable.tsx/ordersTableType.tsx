// enum
import {
  OrdersPaymentStatusEnum,
  OrdersPaymentTypeEnum,
  OrdersStatusEnum,
  OrdersTypeEnum
} from './ordersTableEnum';

export interface DataType {
  key: string;
  order: number;
  status: OrdersStatusEnum;
  type: OrdersTypeEnum;
  payment: [OrdersPaymentTypeEnum, OrdersPaymentStatusEnum];
  waiter: string;
  cost: number;
  utcDate: string;
}
