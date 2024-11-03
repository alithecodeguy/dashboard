// libraries
import { useAppSelector } from '@/libs/redux/hooks';
import { selectPageSize } from '@/libs/redux/slices/sharedSlice';
import { PageSizeEnum } from '@/libs/redux/slices/sharedSlice/sharedSliceEnum';
import { Spin } from 'antd';

const PageLoader = () => {
  // hooks
  const pageSize = useAppSelector(selectPageSize);

  return (
    <div
      style={{
        width: '100%',
        height: `calc(100dvh - ${pageSize === PageSizeEnum.LG ? '120px' : '96px'})`,
        display: 'grid',
        placeContent: 'center'
      }}
    >
      <Spin size="large" />
    </div>
  );
};

export default PageLoader;
