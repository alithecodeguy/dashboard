// types
import type { ordersSliceInterface } from './ordersSliceTypes';

// enums
import { OrderDetailsDrawerTypeEnum } from './ordersSliceEnum';

export const ordersSliceInitialState: ordersSliceInterface = {
  orderDetailsDrawerStatus: false,
  orderDetailsDrawerType: OrderDetailsDrawerTypeEnum.DETAILS
};
