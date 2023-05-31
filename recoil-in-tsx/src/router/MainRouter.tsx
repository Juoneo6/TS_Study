import { Routes, Route } from 'react-router-dom';
import TodoList from '../components/TodoList';


function MainRouter() {
  return (
    <Routes>
      <Route path='/' element={<TodoList />} />
    </Routes>
  )
}

export default MainRouter;