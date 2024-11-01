// types
import type { NextPage } from 'next';

// components
import Home from '@/components/pageFeatures/homePage/Home';

const HomePage: NextPage = () => {
  return <Home />;
};

export default HomePage;

export async function getStaticProps() {
  return {
    props: {
      hasLayout: true,
      pageTitle: 'Orders'
    }
  };
}
