export interface categoriesSliceInterface {
  // to detect if "add new category modal" is open or not
  addNewCategoryDrawerStatus: boolean;
  // to detect if "edit category modal" is open or not
  editCategoryDrawerStatus: boolean;
  // to detect which category will edit
  categoryIdToEdit: number | undefined;
}
