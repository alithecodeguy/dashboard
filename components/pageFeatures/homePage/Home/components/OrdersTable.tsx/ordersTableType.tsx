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
  paymentType: OrdersPaymentTypeEnum;
  paymentStatus: OrdersPaymentStatusEnum;
  waiter: string;
  cost: number;
  utcDateString: string;
}
