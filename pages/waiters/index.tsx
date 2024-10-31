// types
import Waiters from '@/components/pageFeatures/waitersPage/Waiters';
import type { NextPage } from 'next';

// components

const WaitersPage: NextPage = () => {
  return <Waiters />;
};

export default WaitersPage;

export async function getStaticProps() {
  return {
    props: {
      hasLayout: true,
      pageTitle: 'Waiters'
    }
  };
}
