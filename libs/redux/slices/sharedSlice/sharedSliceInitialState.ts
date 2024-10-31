// types
import type { sharedSliceInterface } from './sharedSliceTypes';

// enums
import { ThemeEnum } from './sharedSliceEnum';

export const sharedSliceInitialState: sharedSliceInterface = {
  theme: ThemeEnum.LIGHT
};
