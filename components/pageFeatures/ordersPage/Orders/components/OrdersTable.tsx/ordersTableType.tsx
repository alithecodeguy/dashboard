// enum
import {
  OrdersPaymentStatusEnum,
  OrdersPaymentTypeEnum,
  OrdersStatusEnum,
  OrdersTypeEnum
} from './ordersTableEnum';

export interface DataType {
  key: string;
  orderId: number;
  email: string;
  newOrder: boolean;
  status: OrdersStatusEnum;
  type: OrdersTypeEnum;
  paymentType: OrdersPaymentTypeEnum;
  paymentStatus: OrdersPaymentStatusEnum;
  waiter: string;
  cost: number;
  utcDateString: string;
  archived: boolean;
}
