import { createBrowserRouter, RouterProvider } from "react-router";
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import Nowplay from './pages/Nowplay';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/signup',
    Component: SignUp,
  },
  {
    path: '/main',
    Component: Main,
    children: [
      {
        path: 'nowplay',
        Component: Nowplay,
      },
      {
        path: 'rank',
      },
      {
        path: 'stored',
      },
      {
        path: 'profile',
      }
    ]
  }
]
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
