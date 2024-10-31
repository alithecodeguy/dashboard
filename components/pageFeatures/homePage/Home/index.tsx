// libraries
import { Col, Flex, Row } from 'antd';

// types
import type { FC } from 'react';

const Home: FC = () => {
  return (
    <Row>
      <Col span={24}>
        <Flex vertical gap={24}>
          <Flex style={{ padding: '24px', background: 'red' }}>
            <div>1</div>
            <div>2</div>
          </Flex>
          <Flex style={{ padding: '24px', background: 'red' }}>
            <div>1</div>
            <div>2</div>
          </Flex>
        </Flex>
      </Col>
    </Row>
  );
};

export default Home;
