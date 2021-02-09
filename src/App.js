import './App.css';
import AppRouter from './router/Router'
import { AppContextProvider } from './context/AppContext' 

function App() {
  return (
    <AppContextProvider>
      <AppRouter/>
    </AppContextProvider>
  );
}

export default App;
