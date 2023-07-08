// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { Outlet } from 'react-router-dom';
import { Header } from 'src/Header';

export function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
