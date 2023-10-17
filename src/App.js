import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
import Home from './Components/Home/Home';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import Services from './Components/Services/Services';
import{ Toaster } from 'react-hot-toast';

export default function App() {
  const routes = createBrowserRouter([
    {path:'' , element:<Layout/>, children:[
      {path:'' , element:<Home/>},
      {path:'contact' , element:<Contact/>},
      {path:'projects' , element:<Projects/>},
      {path:'services' , element:<Services/>},
      {path:'*' , element:<NotFoundPage/>}
    ]}
  ])
  return <>
    <RouterProvider router={routes}>
    </RouterProvider>
     <Toaster/>
  </>
}
