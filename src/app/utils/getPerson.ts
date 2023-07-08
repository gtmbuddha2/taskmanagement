import { Person } from '../interfaces/person.interface';

export function getPerson(): Promise<Person> {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ name: 'Bob' }), 1000)
  );
}
