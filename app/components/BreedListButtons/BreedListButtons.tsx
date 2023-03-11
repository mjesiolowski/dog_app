import { BreedList } from '../App/App.types';
import { ButtonGroup } from '../ButtonGroup';

export function BreedListButtons({ breedList } : {breedList: BreedList}) {
  console.log({ breedList });

  return (
    <ButtonGroup
      items={breedList}
      handleItemClick={() => {}}
      variant="contained"
      orientation="vertical"
    />
  );
}
