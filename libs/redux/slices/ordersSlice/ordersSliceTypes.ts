// enums
import { OrderDetailsDrawerTypeEnum } from './ordersSliceEnum';

export interface ordersSliceInterface {
  // to detect if "add new category modal" is open or not
  orderDetailsDrawerStatus: boolean;
  // to detect if the orders detail drawer is in "Order detail mode" or is in "Delivery mode"
  orderDetailsDrawerType: OrderDetailsDrawerTypeEnum;
}
