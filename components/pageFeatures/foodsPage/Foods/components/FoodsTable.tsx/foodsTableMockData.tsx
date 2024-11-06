// types
import type { DataType } from './foodsTableType';

// enums
import { FoodsCategoryEnum, FoodsStatusEnum, FoodsTypeEnum } from './foodsTableEnum';

export const ordersTableMockData: DataType[] = [
  {
    key: '1',
    foodId: 1232,
    foodImage: 'string',
    type: FoodsTypeEnum.VEGETERIAN,
    title: 'string',
    description: 'string',
    category: FoodsCategoryEnum.PASTA,
    status: FoodsStatusEnum.ACTIVE,
    price: 1212
  }
];
