// types
import PosSystem from '@/components/pageFeatures/PosSystemPage/PosSystem';
import type { NextPage } from 'next';

// components

const PosSystemPage: NextPage = () => {
  return <PosSystem />;
};

export default PosSystemPage;

export async function getStaticProps() {
  return {
    props: {
      hasLayout: true,
      pageTitle: 'POS System'
    }
  };
}
