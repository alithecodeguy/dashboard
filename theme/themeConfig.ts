import type { ThemeConfig } from 'antd';

const antdCustomTheme: ThemeConfig = {
  components: {
    Menu: {
      subMenuItemBg: 'transparent'
    },
    Layout: {
      // bodyBg: '#fff'
    }
  },
  token: {
    fontSize: 16,
    fontFamily: 'IRANSansXFaNum'
  }
};

export default antdCustomTheme;
