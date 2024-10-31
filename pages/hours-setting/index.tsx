// types
import HoursSetting from '@/components/pageFeatures/hoursSettingPage/HoursSetting';
import type { NextPage } from 'next';

// components

const HoursSettingPage: NextPage = () => {
  return <HoursSetting />;
};

export default HoursSettingPage;

export async function getStaticProps() {
  return {
    props: {
      hasLayout: true,
      pageTitle: 'Tables'
    }
  };
}
