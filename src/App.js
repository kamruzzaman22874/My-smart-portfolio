import './App.css';
import Routes from './Routes/Routes';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Routes></Routes>
      <Toaster/>
      
    </div>
  );
}

export default App;
