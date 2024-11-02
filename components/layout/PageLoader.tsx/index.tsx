// libraries
import { Spin } from 'antd';

const PageLoader = () => {
  return (
    <div style={{ width: '100dvw', height: '100dvh', display: 'grid', placeContent: 'center' }}>
      <Spin size="large" />
    </div>
  );
};

export default PageLoader;
