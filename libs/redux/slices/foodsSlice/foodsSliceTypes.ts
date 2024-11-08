export interface foodsSliceInterface {
  // to detect if "extras drawer" is open or not
  foodExtrasDrawerStatus: boolean;
  // to detect if "edit food drawer" is open or not
  editFoodDrawerStatus: boolean;
  // to detect which category will edit
  editableFoodId: number | undefined;
  // to detect if "add new food drawer" is open or not
  addNewFoodDrawerStatus: boolean;
}
