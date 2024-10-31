// types
import Categories from '@/components/pageFeatures/categoriesPage/Categories';
import type { NextPage } from 'next';

// components

const CategoriesPage: NextPage = () => {
  return <Categories />;
};

export default CategoriesPage;

export async function getStaticProps() {
  return {
    props: {
      hasLayout: true,
      pageTitle: 'Categories'
    }
  };
}
