// types
import type { FC, ReactNode } from 'react';

// themes
import { ConfigProvider } from 'antd';

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <ConfigProvider direction="ltr">{children}</ConfigProvider>;
};

export default ThemeProvider;
