// redux
import { useAppDispatch, useAppSelector } from '@/libs/redux/hooks';
import {
  closeAddNewCategoryModalStatus,
  openAddNewCategoryModalStatus,
  selectAddNewCategoryModalStatus
} from '@/libs/redux/slices/categoriesSlice';

// libraries
import { Modal } from 'antd';

// types
import { FC } from 'react';

const AddNewCategoryModal: FC = () => {
  // hooks
  const dispatch = useAppDispatch();

  // selectors
  const addNewCategoryModalStatus = useAppSelector(selectAddNewCategoryModalStatus);
  return (
    <Modal
      title="AddNewCategoryModal"
      open={addNewCategoryModalStatus}
      onOk={() => dispatch(closeAddNewCategoryModalStatus())}
      onCancel={() => dispatch(closeAddNewCategoryModalStatus())}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default AddNewCategoryModal;
