import { useEffect } from 'react';
import { getPerson } from './getPerson';

export default function PersonScore() {
  useEffect(() => {
    async function getThePerson() {
      const person = await getPerson();
      console.log(person);
    }
    getThePerson();
  }, []);
  return null;
}
