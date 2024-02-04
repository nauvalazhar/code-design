import CategoriesSelectorClient from 'components/CategoriesSelectorClient';
import { getCategories } from 'services/category-service';

const CategoriesSelector = async () => {
  const categories = await getCategories();

  return <CategoriesSelectorClient categories={categories} />;
};

export default CategoriesSelector;
