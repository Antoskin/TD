import {FC} from "react";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Router from "./components/Router";
import Layout from "./components/Layout";
import MainPage from "./pages/Main.page";
import BookPage from "./pages/Book.page";
import './assets/styles/index.scss'

const App: FC = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Router component={MainPage} layout={Layout} isMain />
    },
    {
      path: '/book/:id',
      element: <Router component={BookPage} layout={Layout} />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
