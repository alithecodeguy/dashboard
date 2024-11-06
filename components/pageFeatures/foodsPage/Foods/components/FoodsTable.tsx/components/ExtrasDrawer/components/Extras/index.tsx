// types
import type { FC } from 'react';

// enums
import { NotificationEnum } from '@/enums/common';

// libraries
import Image from 'next/image';
import { IoCard } from 'react-icons/io5';
import { blue, green } from '@ant-design/colors';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Badge, Button, Card, Divider, Flex, Input, Tag, Typography } from 'antd';

// utils
import openNotification from '@/utils/notification';

// destructure
const { Text } = Typography;
const { TextArea } = Input;
const primaryBlue1 = blue[1];
const primaryBlue6 = blue[6];

const Extras: FC = () => {
  return (
    <>
      <Flex vertical gap={16}>
        Extras
      </Flex>
    </>
  );
};

export default Extras;
