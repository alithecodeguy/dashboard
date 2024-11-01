export interface sharedSliceInterface {
  // to detect if sider is close or not
  isSiderCollapsed: boolean;
  // to detect if drawer is close or not
  isDrawerClosed: boolean;
  // to detect current path
  currentPath: string[] | undefined;
}
