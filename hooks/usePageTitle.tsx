// confgis
import { routes } from '@/configs/routes';

// redux
import { useAppSelector } from '@/libs/redux/hooks';
import { selectCurrentPath } from '@/libs/redux/slices/sharedSlice';

function usePageTitle() {
  // selectors
  const currentPath = useAppSelector(selectCurrentPath);

  const pageTitle = Object.entries(routes)
    .find((item) => item[1] == `/${currentPath?.[0].split('/')?.[1]}`)?.[0]
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.toLowerCase().slice(1))
    .join(' ');

  return pageTitle;
}

export default usePageTitle;
