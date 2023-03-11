import Button from '@mui/material/Button';
import { BreedList } from './App.types';

export function App({ breedList } : {breedList: BreedList}) {
  console.log({ breedList });
  return (
    <main>
      <h1>Dog App</h1>
      <Button variant="contained">Test button</Button>
    </main>
  );
}
