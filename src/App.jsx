// import 'styles/App.scss';
import {Outlet} from 'react-router-dom';
import Modals from 'components/Modals';
import {ModalsContextProvider} from 'context/ModalsContext';

function App() {
  return (
    <ModalsContextProvider>
      <Modals />
      <Outlet />
    </ModalsContextProvider>
  );
}

export default App;
