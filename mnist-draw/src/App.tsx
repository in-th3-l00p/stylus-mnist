import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Mnist from './pages/mnist';
import Home from './pages/home';
import Layout from './components/Layout';

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
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  )
}

export default App
