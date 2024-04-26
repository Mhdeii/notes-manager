import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Login from './component/login/login';
import Notes from './component/notes/notes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="*" element={<Navigate to ="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
