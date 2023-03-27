
import { useState } from 'react';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import './App.css';
// import Header from './components/headers/Header';
import AccountType from './pages/businessOwner/accountType/AccountType';
import Login from './pages/businessOwner/login/Login';

// import Header from './components/headers/Header';


function App() {
  const [user,setUser] = useState(true)
  return (
    <div className="app">
     {/* <Header /> */}
     <BrowserRouter>
     <Routes>
      {/* <Route exact path="/" element={} */}
      <Route path="/" element={<Login />} />
      {user ?
        <Route path="/select-account" element={<AccountType />} />
        : 'not found'
      }
  
     </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
