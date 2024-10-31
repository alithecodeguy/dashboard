// types
import Tables from '@/components/pageFeatures/tablesPage/Tables';
import type { NextPage } from 'next';

// components

const TablesPage: NextPage = () => {
  return <Tables />;
};

export default TablesPage;

export async function getStaticProps() {
  return {
    props: {
      hasLayout: true,
      pageTitle: 'Tables'
    }
  };
}
