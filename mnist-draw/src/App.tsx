import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Mnist from './pages/mnist';
import Home from './pages/home';
import Layout from './components/Layout';
import PurchasePage from './pages/purchasePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/mnist",
    element: <Mnist />
  },
  {
    path: "/purchase",
    element: <PurchasePage />
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
