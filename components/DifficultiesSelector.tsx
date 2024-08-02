import DifficultiesSelectorClient from 'components/DifficultiesSelectorClient';
import { getDifficulties } from 'services/difficulty-service';

const DifficultiesSelector = async () => {
  const difficulties = await getDifficulties();

  return <DifficultiesSelectorClient difficulties={difficulties} />;
};

export default DifficultiesSelector;
