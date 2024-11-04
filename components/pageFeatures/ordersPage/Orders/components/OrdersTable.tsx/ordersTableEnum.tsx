export enum OrdersFilterEnum {
  ALL = 'All',
  NEW = 'New',
  AT_RESTAURANT = 'At_Restaurant',
  AT_HOME = 'At_Home',
  ARCHIVED = 'Archived'
}

export enum OrdersStatusEnum {
  PENDING = 'Pending',
  REJECT = 'Reject',
  CONFIRM = 'Confirm'
}

export enum OrdersTypeEnum {
  AT_RESTAURANT = 'At Restaurant',
  PICKUP = 'Pickup',
  AT_HOME = 'At Home',
  IN_STORE_PICKUP = 'In-Store Pickup'
}

export enum OrdersPaymentTypeEnum {
  ONLINE = 'Online',
  IN_PLACE = 'In Place'
}

export enum OrdersPaymentStatusEnum {
  PAID = 'Paid',
  UNPAID = 'Unpaid'
}
