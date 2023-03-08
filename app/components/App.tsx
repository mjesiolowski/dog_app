import Button from '@mui/material/Button';
import { DogItems } from './App.types';

export function App({ dogsList } : DogItems) {
  console.log({ dogsList });

  return (
    <main>
      <h1>Dog App</h1>
      <Button variant="contained">Test button</Button>
    </main>
  );
}
