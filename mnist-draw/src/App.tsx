import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Mnist from './pages/mnist';
import Home from './pages/home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/mnist",
    element: <Mnist />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
