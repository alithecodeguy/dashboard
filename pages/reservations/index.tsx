// types
import Reservations from '@/components/pageFeatures/reservationsPage/Reservations';
import type { NextPage } from 'next';

// components

const ReservationsPage: NextPage = () => {
  return <Reservations />;
};

export default ReservationsPage;

export async function getStaticProps() {
  return {
    props: {
      hasLayout: true,
      pageTitle: 'Reservations'
    }
  };
}
