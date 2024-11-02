// types
import Reservation from '@/components/pageFeatures/reservationPage/Reservation';
import type { NextPage } from 'next';

// components

const ReservationPage: NextPage = () => {
  return <Reservation />;
};

export default ReservationPage;

export async function getStaticProps() {
  return {
    props: {
      hasLayout: true,
      pageTitle: 'Reservation'
    }
  };
}
