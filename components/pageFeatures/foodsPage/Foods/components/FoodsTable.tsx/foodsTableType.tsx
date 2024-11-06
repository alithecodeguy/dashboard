// enum
import { FoodsCategoryEnum, FoodsStatusEnum, FoodsTypeEnum } from './foodsTableEnum';

export interface DataType {
  key: string;
  foodId: number;
  foodImage: string;
  type: FoodsTypeEnum;
  title: string;
  description: string;
  category: FoodsCategoryEnum.PASTA;
  status: FoodsStatusEnum.ACTIVE;
  price: number;
}
