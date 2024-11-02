// types
import DiscountsSetting from '@/components/pageFeatures/discountsPage/Discounts';
import type { NextPage } from 'next';

// components

const DiscountsSettingPage: NextPage = () => {
  return <DiscountsSetting />;
};

export default DiscountsSettingPage;

export async function getStaticProps() {
  return {
    props: {
      hasLayout: true,
      pageTitle: 'Discounts Setting'
    }
  };
}
