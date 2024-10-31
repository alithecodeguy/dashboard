// types and enums
import type { CSSProperties } from 'react';

function container(): CSSProperties {
  return {
    height: '100%',
    width: '100%',
    position: 'relative'
  };
}

function sider(): CSSProperties {
  return {
    borderLeft: '2px solid #eee',
    position: 'relative'
  };
}

function siderTogglerButton(): CSSProperties {
  return {
    background: 'transparent',
    position: 'absolute',
    left: -27,
    zIndex: 100,
    top: '45%',
    cursor: 'pointer',
    border: 0
  };
}

function siderDivider(): CSSProperties {
  return {
    margin: 0
  };
}

function siderFooter(collapsed: boolean = false): CSSProperties {
  return {
    width: '100%',
    padding: !collapsed ? '9px 15px' : 0,
    height: 40
  };
}

function siderContent(): CSSProperties {
  return {
    height: '100%'
  };
}

function siderHeader(): CSSProperties {
  return {
    padding: '33px 0px',
    cursor: 'pointer'
  };
}

function menuItem(): CSSProperties {
  return {
    fontSize: 16
  };
}

function siderInnerContainer(): CSSProperties {
  return {
    padding: 33,
    display: 'flex',
    flexDirection: 'column'
  };
}

export const primaryLayoutReactStyles: Record<string, (s?: boolean) => CSSProperties> = {
  sider,
  menuItem,
  container,
  siderFooter,
  siderHeader,
  siderDivider,
  siderContent,
  siderTogglerButton,
  siderInnerContainer
};
