// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Alert from './Alert';
import PersonScore from './PersonScore';
import PersonScoreReducer from './PersonScoreReducer';
import { headingType } from './alert.interface';

export function App() {
  return (
    <>
      <Alert
        heading="Success"
        children="Everythings good! Nimesh"
        closable
        onClose={() => console.log('closed by nimesh')}
      />
      <PersonScore />
      <PersonScoreReducer />
    </>
  );
}

export default App;
