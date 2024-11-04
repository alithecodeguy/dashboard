// redux
import { useAppDispatch, useAppSelector } from '@/libs/redux/hooks';
import {
  closeEditCategoryModalStatus,
  selectEditCategoryModalStatus
} from '@/libs/redux/slices/categoriesSlice';

// libraries
import { Modal } from 'antd';

// types
import { FC } from 'react';

const EditCategoryModal: FC = () => {
  // hooks
  const dispatch = useAppDispatch();

  // selectors
  const editCategoryModalStatus = useAppSelector(selectEditCategoryModalStatus);
  return (
    <Modal
      title="EditCategoryModal"
      open={editCategoryModalStatus}
      onOk={() => dispatch(closeEditCategoryModalStatus())}
      onCancel={() => dispatch(closeEditCategoryModalStatus())}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default EditCategoryModal;
