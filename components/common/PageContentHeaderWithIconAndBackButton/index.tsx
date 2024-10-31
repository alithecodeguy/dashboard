// types
import type { FC } from 'react';

// strings
import { Header } from 'antd/lib/layout/layout';
import { Avatar, Badge, Flex, Radio } from 'antd';
import { Input } from 'antd';
import { Typography } from 'antd';
import { BellFilled, SearchOutlined } from '@ant-design/icons';

const { Text } = Typography;

import type { GetProps } from 'antd';

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const PageContentHeaderWithIconAndBackButton: FC<{ title: string }> = ({ title }) => {
  const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

  return (
    <Header
      style={{
        width: '100%',
        height: '96px',
        background: 'white',
        padding: '25px 16px',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '2px solid rgba(0,0,0,0.06)'
      }}
    >
      <Flex justify="space-between" align="center" style={{ width: '100%' }}>
        <Input
          // onChange={onSearch}
          style={{ width: 300 }}
          size="large"
          placeholder="Search"
          allowClear
          prefix={<SearchOutlined style={{ color: 'rgba(0,0,0,0.45)' }} />}
        />

        <Flex align="center" gap={24}>
          <Radio.Group
            buttonStyle="solid"
            defaultValue="EN"
            // value={position} onChange={(e) => setPosition(e.target.value)}
          >
            <Radio.Button value="EN">EN</Radio.Button>
            <Radio.Button value="DE">DE</Radio.Button>
          </Radio.Group>
          <Badge count={0} showZero>
            <Avatar
              style={{ background: '#E6F7FF', color: '#1890FF' }}
              shape="square"
              size="large"
              icon={<BellFilled />}
            />
          </Badge>
          <Flex>
            <Text>Hello,</Text>
            <Text strong>samantha</Text>
          </Flex>
          <Avatar size={44} src="/assets/images/png/sample_avatar.png" />
        </Flex>
      </Flex>
    </Header>
  );
};

export default PageContentHeaderWithIconAndBackButton;
