import { useEffect, useReducer, useRef } from 'react';
import { getPerson } from '../utils/getPerson';

type State = {
  name: string | undefined;
  score: number;
  loading: boolean;
};

type Action =
  | {
      type: 'initialize';
      name: string;
    }
  | {
      type: 'increment';
    }
  | {
      type: 'decrement';
    }
  | {
      type: 'reset';
    };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'initialize':
      return { name: action.name, score: 0, loading: false };
    case 'increment':
      return { ...state, score: state.score + 1 };
    case 'decrement':
      return { ...state, score: state.score - 1 };
    case 'reset':
      return { ...state, score: 0 };
    default:
      return state;
  }
};

export default function PersonScoreReducer() {
  const [{ name, score, loading }, dispatch] = useReducer(reducer, {
    name: undefined,
    score: 0,
    loading: true,
  });

  const addButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    async function getThePerson() {
      const person = await getPerson();
      dispatch({ type: 'initialize', name: person.name });
    }
    getThePerson();
  }, []);

  useEffect(() => {
    if (!loading) {
      addButtonRef.current?.focus();
    }
  }, [loading]);

  if (loading) {
    return <div className="text-white">Loading ...</div>;
  }

  return (
    <div className="text-black m-4 bg-gray-300 p-6 rounded-xl">
      <h3>
        {name},{score}
      </h3>
      <button
        ref={addButtonRef}
        className="bg-slate-400 p-2 rounded-md m-2 hover:bg-slate-500"
        onClick={() => dispatch({ type: 'increment' })}
      >
        Add
      </button>
      <button
        className="bg-slate-400 p-2 rounded-md m-2 hover:bg-slate-500"
        onClick={() => dispatch({ type: 'decrement' })}
      >
        Subtract
      </button>
      <button
        className="bg-slate-400 p-2 rounded-md m-2 hover:bg-slate-500"
        onClick={() => dispatch({ type: 'reset' })}
      >
        Reset
      </button>
    </div>
  );
}
