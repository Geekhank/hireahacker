
import './App.css'
import AppRoutes from './AppRoutes'
import { useScrollToHash } from './hooks/useScrollToHash';

function App() {
  useScrollToHash();

  return (
    <>
     <AppRoutes/>
    </>
  )
}

export default App
