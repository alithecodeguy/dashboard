// enum
import { CategoryStatusEnum } from './categoriesTableEnum';

export interface DataType {
  key: string;
  categoryId: number;
  imageUrl: string;
  categoryTitle: string;
  categoryDescription: string;
  categoryStatus: CategoryStatusEnum;
}
