// types
import TablesSetting from '@/components/pageFeatures/tablesPage/Tables';
import type { NextPage } from 'next';

// components

const TablesSettingPage: NextPage = () => {
  return <TablesSetting />;
};

export default TablesSettingPage;

export async function getStaticProps() {
  return {
    props: {
      hasLayout: true,
      pageTitle: 'Tables Setting'
    }
  };
}
