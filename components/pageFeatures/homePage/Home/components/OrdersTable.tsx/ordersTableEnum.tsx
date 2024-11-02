export enum OrdersStatusEnum {
  PENDING = 'Pending',
  REJECT = 'Reject',
  CONFIRM = 'Confirm'
}

export enum OrdersTypeEnum {
  AT_RESTAURANT = 'At Restaurant',
  PICKUP = 'Pickup',
  AT_HOME = 'At Home'
}

export enum OrdersPaymentTypeEnum {
  ONLINE,
  IN_PLACE
}

export enum OrdersPaymentStatusEnum {
  PAID,
  UNPAID
}
