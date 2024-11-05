// types
import type { FC } from 'react';

// libraries
import { Badge, Button, Card, Divider, Drawer, Flex, Input, Radio, Tag, Typography } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { IoShareSocialOutline } from 'react-icons/io5';
import { IoCard } from 'react-icons/io5';
import Image from 'next/image';
import { FaRegCircleCheck } from 'react-icons/fa6';

import { blue, green } from '@ant-design/colors';

// redux
import { useAppDispatch, useAppSelector } from '@/libs/redux/hooks';
import {
  closeOrderDetailsDrawer,
  selectOrderDetailsDrawerStatus
} from '@/libs/redux/slices/ordersSlice';

// destructure
const { Text } = Typography;
const { TextArea } = Input;
const primaryBlue1 = blue[1];
const primaryBlue6 = blue[6];

const OrderDetailsDrawer: FC = () => {
  // hooks
  const dispatch = useAppDispatch();

  // selectors
  const orderDetailsDrawerStatus = useAppSelector(selectOrderDetailsDrawerStatus);

  const onClose = () => {
    dispatch(closeOrderDetailsDrawer());
  };

  return (
    <Drawer
      title="Order details"
      onClose={onClose}
      open={orderDetailsDrawerStatus}
      extra={
        <Flex gap={8}>
          <Button
            style={{ color: blue.primary }}
            type="text"
            onClick={onClose}
            size="large"
            icon={<IoShareSocialOutline />}
          />
          <Button
            style={{ color: blue.primary }}
            type="text"
            onClick={onClose}
            size="large"
            icon={<DownloadOutlined />}
          />
        </Flex>
      }
    >
      <Flex vertical gap={32}>
        <Radio.Group
          buttonStyle="solid"
          defaultValue="ORDER_DETAILS"
          block // value={position} onChange={(e) => setPosition(e.target.value)}
        >
          <Radio.Button value="ORDER_DETAILS">Order Details</Radio.Button>
          <Radio.Button value="Delivery">Delivery</Radio.Button>
        </Radio.Group>
        <Flex vertical gap={16}>
          <Flex justify="space-between" align="center">
            <Text strong style={{ fontSize: 18 }}>
              Order details table
            </Text>
            <Tag color={'green'}>Confirm</Tag>
          </Flex>
          <Card className="order" bodyStyle={{ padding: '8px' }}>
            <Flex justify="space-between" align="center">
              <Text>Order id</Text>
              <Text>#834733</Text>
            </Flex>
            <Divider variant="dashed" dashed style={{ margin: '8px 0px' }} />
            <Flex justify="space-between" align="center">
              <Text>Customer name</Text>
              <Text>Jac</Text>
            </Flex>
            <Divider variant="dashed" dashed style={{ margin: '8px 0px' }} />
            <Flex justify="space-between" align="center">
              <Text>Date</Text>
              <Text>April 28, 2024 (12:34)</Text>
            </Flex>
            <Divider variant="dashed" dashed style={{ margin: '8px 0px' }} />
            <Flex justify="space-between" align="center">
              <Text>Preparation Time</Text>
              <Text>20 minutes</Text>
            </Flex>
          </Card>
          <Text style={{ color: green.primary }}>
            This order was successfully confirmed on October 15, 2024, at 3:45 PM.
          </Text>
        </Flex>
        <Flex vertical gap={16}>
          <Flex gap={8} align="center">
            <Text strong style={{ fontSize: 18 }}>
              Items
            </Text>
            <Badge count={2} style={{ background: primaryBlue1, color: primaryBlue6 }} />
          </Flex>
          <Card className="order" bodyStyle={{ padding: '8px' }}>
            <Flex vertical gap={12}>
              <Flex gap={8} align="center">
                <Image
                  src={'/assets/images/png/orders_table_order_item_image.png'}
                  width={96}
                  height={96}
                  alt={'food_item'}
                />
              </Flex>
              <span>count and price</span>
            </Flex>
          </Card>
        </Flex>
        <Flex vertical gap={16}>
          <Flex justify="space-between" align="center">
            <Text strong style={{ fontSize: 18 }}>
              Note
            </Text>
          </Flex>
          <TextArea autoSize style={{ resize: 'none' }} readOnly={true} value={'No Cheese'} />
        </Flex>
        <Flex vertical gap={16}>
          <Flex justify="space-between" align="center">
            <Text strong style={{ fontSize: 18 }}>
              Payment
            </Text>
          </Flex>
          <Card className="order" bodyStyle={{ padding: '8px' }}>
            <Flex justify="space-between" align="center">
              <Text>Payment method</Text>
              <Flex align="center" justify="space-between" gap={12}>
                <Flex align="center" justify="space-between" gap={4}>
                  <IoCard size={16} />
                  <Text>By Card</Text>
                </Flex>
                <Flex align="center" justify="space-between" gap={4}>
                  <FaRegCircleCheck size={16} style={{ color: 'green' }} />
                  <Text>Paid</Text>
                </Flex>
              </Flex>
            </Flex>
            <Divider variant="dashed" dashed style={{ margin: '8px 0px' }} />
            <Flex justify="space-between" align="center">
              <Text>Date</Text>
              <Text>April 28, 2024 (12:34)</Text>
            </Flex>
            <Divider variant="dashed" dashed style={{ margin: '8px 0px' }} />
            <Flex justify="space-between" align="center">
              <Text>Section id</Text>
              <Flex gap={8} align="center">
                <Text>8349983</Text>
                <Button type="primary" size="small">
                  copy
                </Button>
              </Flex>
            </Flex>
            <Divider variant="dashed" dashed style={{ margin: '8px 0px' }} />
            <Flex justify="space-between" align="center">
              <Text>Tips</Text>
              <Text>No Tips</Text>
            </Flex>
            <Divider variant="dashed" dashed style={{ margin: '8px 0px' }} />
            <Flex justify="space-between" align="center">
              <Text>Total</Text>
              <Text>$ 120</Text>
            </Flex>
          </Card>
        </Flex>
        <Button type="primary" block>
          Print Details
        </Button>
      </Flex>
    </Drawer>
  );
};

export default OrderDetailsDrawer;
