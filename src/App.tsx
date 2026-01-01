import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import Home from './pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Home />}></Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
