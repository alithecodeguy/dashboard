// libraries
import { Button, Col, Flex, Input, Row, Tabs, TabsProps, Typography } from 'antd';
import { SearchOutlined, PlusCircleFilled } from '@ant-design/icons';

// types
import type { FC } from 'react';

// styles
import styles from './categories.module.css';

// redux
import { useAppDispatch, useAppSelector } from '@/libs/redux/hooks';
import { selectSiderStatus } from '@/libs/redux/slices/sharedSlice';
import { openAddNewCategoryDrawerStatus } from '@/libs/redux/slices/categoriesSlice/index.ts';

// hooks
import usePageTitle from '@/hooks/usePageTitle';

// components
import CategoriesTable from './components/CategoriesTable.tsx/index.tsx';

// enums
import { CategoriesFilterEnum } from './components/CategoriesTable.tsx/categoriesTableEnum.tsx';

// destructure
const { Text } = Typography;

const Categories: FC = () => {
  // hooks
  const pageTitle = usePageTitle();
  const dispatch = useAppDispatch();

  // selectors
  const isSiderCollapsed = useAppSelector(selectSiderStatus);

  const items: TabsProps['items'] = [
    {
      key: CategoriesFilterEnum.ALL,
      label: CategoriesFilterEnum.ALL,
      children: <CategoriesTable categoriesFilter={CategoriesFilterEnum.ALL} />
    },
    {
      key: CategoriesFilterEnum.ACTIVE,
      label: CategoriesFilterEnum.ACTIVE,
      children: <CategoriesTable categoriesFilter={CategoriesFilterEnum.ACTIVE} />
    },
    {
      key: CategoriesFilterEnum.DEACTIVE,
      label: CategoriesFilterEnum.DEACTIVE,
      children: <CategoriesTable categoriesFilter={CategoriesFilterEnum.DEACTIVE} />
    }
  ];

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <Row>
      <Col span={24}>
        <Flex vertical gap={16}>
          <Flex gap={24} align="center" justify="space-between">
            <Flex align="center" gap={24} style={{ flex: 1 }}>
              {!isSiderCollapsed && (
                <Text style={{ fontSize: '24px', lineHeight: '36px', fontWeight: 400 }}>
                  {pageTitle}
                </Text>
              )}
              <Input
                // onChange={onSearch}
                style={{ maxWidth: 300 }}
                size="large"
                placeholder="Search"
                allowClear
                prefix={<SearchOutlined className={styles.search_input_icon} />}
              />
            </Flex>
            <Button
              onClick={() => dispatch(openAddNewCategoryDrawerStatus())}
              type="primary"
              size={'large'}
              icon={<PlusCircleFilled />}
            >
              Add Category
            </Button>
          </Flex>
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </Flex>
      </Col>
    </Row>
  );
};

export default Categories;
