// types
import type { NotificationEnum } from '@/enums/common';
import type { NotificationArgsProps } from 'antd';
type NotificationPlacement = NotificationArgsProps['placement'];

// libraries
import { notification } from 'antd';

const openNotification = (
  type: NotificationEnum,
  message: string,
  description: string = '',
  placement: NotificationPlacement = 'topLeft'
) => {
  notification.open({
    placement,
    type,
    message,
    description
    // onClick: () => {
    //   console.log('Notification Clicked!');
    // }
  });
};

export default openNotification;
