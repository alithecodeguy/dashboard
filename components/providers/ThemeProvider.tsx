// types
import type { FC, ReactNode } from 'react';

// libraries
import locale from 'antd/lib/locale/fa_IR';

// themes
import { ConfigProvider } from 'antd';

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ConfigProvider direction="ltr" locale={locale}>
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
