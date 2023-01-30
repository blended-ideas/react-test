import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import ContextTest from './components/ContextTest/ContextTest';
import FormTest from './components/FormTest/FormTest';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>Hello world!</div>,
    },
    {
      path: '/form',
      element: <FormTest prop1="test" />,
    },
    {
      path: '/context',
      element: <ContextTest />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
