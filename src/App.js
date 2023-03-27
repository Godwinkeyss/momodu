
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import './App.css';
// import Header from './components/headers/Header';
import AccountType from './pages/businessOwner/accountType/AccountType';
import Login from './pages/businessOwner/login/Login';

// import Header from './components/headers/Header';


function App() {
  
  return (
    <div className="app">
     {/* <Header /> */}
     <BrowserRouter>
     <Routes>
      {/* <Route exact path="/" element={} */}
      <Route path="/" element={<Login />} />
      
        <Route path="/select-account" element={<AccountType />} />
        
      
  
     </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
