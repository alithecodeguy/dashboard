// types
import Support from '@/components/pageFeatures/supportPage/Support';
import type { NextPage } from 'next';

// components

const SupportPage: NextPage = () => {
  return <Support />;
};

export default SupportPage;

export async function getStaticProps() {
  return {
    props: {
      hasLayout: true,
      pageTitle: 'Support'
    }
  };
}
