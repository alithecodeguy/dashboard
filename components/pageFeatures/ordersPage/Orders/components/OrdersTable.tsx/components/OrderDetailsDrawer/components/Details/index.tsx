// types
import type { FC } from 'react';

// libraries
import Image from 'next/image';
import { IoCard } from 'react-icons/io5';
import { blue, green } from '@ant-design/colors';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Badge, Button, Card, Divider, Flex, Input, Tag, Typography } from 'antd';

// destructure
const { Text } = Typography;
const { TextArea } = Input;
const primaryBlue1 = blue[1];
const primaryBlue6 = blue[6];

const Details: FC = () => {
  return (
    <>
      <Flex vertical gap={16}>
        <Flex justify="space-between" align="center">
          <Text strong style={{ fontSize: 18 }}>
            Order details
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
          <Badge count={1} style={{ background: primaryBlue1, color: primaryBlue6 }} />
        </Flex>
        <Card className="order" bodyStyle={{ padding: '8px' }}>
          <Flex vertical gap={12}>
            <Flex gap={8} align="center" style={{ position: 'relative' }}>
              <Image
                src={'/assets/images/png/orders_table_order_item_image.png'}
                width={96}
                height={96}
                alt={'food_item'}
              />
              <Image
                src={'/assets/images/png/vegeterian_label.png'}
                width={55}
                height={22}
                alt={'food_label'}
                style={{ position: 'absolute', top: 0, left: 0 }}
              />
              <Flex vertical>
                <Text strong>Kleine Yogurtlu </Text>
                <Flex vertical>
                  <Flex gap={8} align="center">
                    <Text strong>Extra:</Text>
                    <Text>Mustard</Text>
                  </Flex>
                  <Flex gap={8} align="center">
                    <Text strong>Food Id:</Text>
                    <Text>#323456</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex justify="space-between" align="center">
              <Flex align="center" gap={8}>
                <Button size="small" shape="circle" type="primary" icon={<MinusOutlined />} />
                <Text style={{ fontSize: 16 }}>2</Text>
                <Button size="small" shape="circle" type="primary" icon={<PlusOutlined />} />
              </Flex>
              <Text style={{ fontSize: 16 }}>$ 244</Text>
            </Flex>
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
    </>
  );
};

export default Details;
