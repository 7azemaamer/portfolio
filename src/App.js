import { RouterProvider, createHashRouter } from "react-router-dom"
import Layout from "./Components/Layout/Layout"
import Contact from "./Components/Contact/Contact"
import Projects from "./Components/Projects/Projects"
import Home from "./Components/Home/Home"
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage"
import Services from "./Components/Services/Services"
import { Toaster } from "react-hot-toast"
import Embedded from "./Components/Embdded/Embdded"

export default function App() {
  const routes = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "contact", element: <Contact /> },
        { path: "projects", element: <Projects /> },
        { path: "services", element: <Services /> },
        { path: "form/:id", element: <Embedded /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ])
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster />
    </>
  )
}
