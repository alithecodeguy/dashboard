// types
import type { FC } from 'react';

// libraries
import { gray } from '@ant-design/colors';
import { Card, Divider, Flex, Tag, Typography } from 'antd';

// destructure
const { Text } = Typography;

const Delivery: FC = () => {
  return (
    <>
      <Flex vertical gap={16}>
        <Flex justify="space-between" align="center">
          <Text strong style={{ fontSize: 18 }}>
            Delivery details
          </Text>
          <Tag color={'green'}>Confirm</Tag>
        </Flex>
        <Card className="order" bodyStyle={{ padding: '8px' }}>
          <Flex justify="space-between" align="center">
            <Text>Order type: </Text>
            <Text>At home (Delivery)</Text>
          </Flex>
          <Divider variant="dashed" dashed style={{ margin: '8px 0px' }} />
          <Flex vertical gap={8}>
            <Text>Shopping address: </Text>
            <Text>232 Mount Street, Nicolasview 76235-2472</Text>
          </Flex>
        </Card>
        <Text style={{ color: gray.primary }}>
          Due to an issue, the submitted order was not processed.
        </Text>
      </Flex>
    </>
  );
};

export default Delivery;
