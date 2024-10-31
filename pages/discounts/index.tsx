// types
import Discounts from '@/components/pageFeatures/discountsPage/Discounts';
import type { NextPage } from 'next';

// components

const DiscountsPage: NextPage = () => {
  return <Discounts />;
};

export default DiscountsPage;

export async function getStaticProps() {
  return {
    props: {
      hasLayout: true,
      pageTitle: 'Discounts'
    }
  };
}
