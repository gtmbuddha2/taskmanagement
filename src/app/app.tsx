// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Alert from './Alert';
import PersonScore from './PersonScore';

export function App() {
  return (
    <>
      <Alert
        heading="Success"
        children="Well done! Nimesh"
        closable
        onClose={() => console.log('closed by nimesh')}
      />
      <PersonScore />
    </>
  );
}

export default App;
