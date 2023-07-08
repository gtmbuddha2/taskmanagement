// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Alert from './Components/Alert';
import PersonScore from './Components/PersonScore';
import PersonScoreReducer from './Components/PersonScoreReducer';

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
