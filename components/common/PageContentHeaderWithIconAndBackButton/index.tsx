// types
import type { FC } from 'react';

// strings
import { Header } from 'antd/lib/layout/layout';
import { Flex } from 'antd';

const PageContentHeaderWithIconAndBackButton: FC<{ title: string }> = ({ title }) => {
  return (
    <Header
      style={{
        width: '100%',
        height: '96px',
        background: 'white',
        padding: '25px 16px',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '2px solid rgba(0,0,0,0.06)'
      }}
    >
      <Flex justify="space-between" align="center" style={{ width: '100%' }}>
        <div>1</div>
        <div>2</div>
      </Flex>
    </Header>
  );
};

export default PageContentHeaderWithIconAndBackButton;
