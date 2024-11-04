// types
import type { NextPage } from 'next';

// components
import Orders from '@/components/pageFeatures/ordersPage/Orders';

const OrdersPage: NextPage = () => {
  return <Orders />;
};

export default OrdersPage;

export async function getStaticProps() {
  return {
    props: {
      hasLayout: true,
      pageTitle: 'Orders'
    }
  };
}
