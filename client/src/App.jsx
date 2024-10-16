import './App.css';
import EntryPage from "./core_pages/EntryPage"
import {Routes,Route} from "react-router-dom"
import Success from './core_pages/Success';
import ProtectedRoute from './Components/ProtectedRoute';
function App() {
  return (
    <div className="app">
            <Routes>
              <Route path="/" element={<ProtectedRoute><EntryPage/></ProtectedRoute>} />
              <Route path="/user" element={<Success/>}/>
           </Routes>
    </div>
  );
}

export default App;


