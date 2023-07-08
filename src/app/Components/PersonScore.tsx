import { useEffect, useState } from 'react';
import { getPerson } from '../getPerson';

export default function PersonScore() {
  const [name, setName] = useState<string | undefined>();
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getThePerson() {
      const person = await getPerson();
      setLoading(false);
      setName(person.name);
      //   console.log('State values', loading, name);
    }
    getThePerson();
  }, []);

  if (loading) {
    return <div className="text-white">Loading ...</div>;
  }

  return (
    <div className="text-black m-4 bg-gray-300 p-6 rounded-xl">
      <h3>
        {name},{score}
      </h3>
      <button
        className="bg-slate-400 p-2 rounded-md m-2 hover:bg-slate-500"
        onClick={() => setScore((previousScore) => previousScore + 1)}
      >
        Add
      </button>
      <button
        className="bg-slate-400 p-2 rounded-md m-2 hover:bg-slate-500"
        onClick={() => setScore(score - 1)}
      >
        Subtract
      </button>
      <button
        className="bg-slate-400 p-2 rounded-md m-2 hover:bg-slate-500"
        onClick={() => setScore(0)}
      >
        Reset
      </button>
    </div>
  );
}
