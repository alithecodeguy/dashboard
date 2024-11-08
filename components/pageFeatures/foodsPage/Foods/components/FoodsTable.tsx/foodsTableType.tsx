// enum
import { FoodsCategoryEnum, FoodsStatusEnum, FoodsTypeEnum } from './foodsTableEnum';

export interface DataType {
  key: string;
  foodId: number;
  foodImageUrl: string;
  foodType: FoodsTypeEnum;
  foodTitle: string;
  foodDescription: string;
  foodCategory: FoodsCategoryEnum.PASTA;
  foodStatus: FoodsStatusEnum.ACTIVE;
  foodPrice: number;
}
