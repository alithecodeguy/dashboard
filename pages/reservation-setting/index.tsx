// types
import ReservationSetting from '@/components/pageFeatures/reservationSettingPage/ReservationSetting';
import type { NextPage } from 'next';

// components

const ReservationSettingPage: NextPage = () => {
  return <ReservationSetting />;
};

export default ReservationSettingPage;

export async function getStaticProps() {
  return {
    props: {
      hasLayout: true,
      pageTitle: 'Reservation Setting'
    }
  };
}
