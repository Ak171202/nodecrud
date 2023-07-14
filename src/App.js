import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from './UserList';
import Update from './Update';
import Create from './Create';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<UserList />}/>
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
