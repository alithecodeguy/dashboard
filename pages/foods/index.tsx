// types
import Foods from '@/components/pageFeatures/foodsPage/Foods';
import type { NextPage } from 'next';

// components

const FoodsPage: NextPage = () => {
  return <Foods />;
};

export default FoodsPage;

export async function getStaticProps() {
  return {
    props: {
      hasLayout: true,
      pageTitle: 'Foods'
    }
  };
}
