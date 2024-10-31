// types
import Finances from '@/components/pageFeatures/financesPage/Finances';
import type { NextPage } from 'next';

// components

const FinancesPage: NextPage = () => {
  return <Finances />;
};

export default FinancesPage;

export async function getStaticProps() {
  return {
    props: {
      hasLayout: true,
      pageTitle: 'Finances'
    }
  };
}
