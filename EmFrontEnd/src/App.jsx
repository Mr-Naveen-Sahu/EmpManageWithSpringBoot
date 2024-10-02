import Navbar from "./component/Navbar";
import EmList from "./component/EmList";
import Addemp from "./component/Addemp";
import Update from "./component/Update"

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const divStyle = {
    backgroundImage: `url(./public/image/office-6831691_1280.webp)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh',
  };

  const rout = createBrowserRouter([
     {
        path: "/",
        element : <><Navbar /> <EmList /> </>
     },
     {
        path: "/Addemp",
        element: <> <Navbar /> <Addemp /> </>
     },
     {
      path: "/Update/:id",
      element: <><Update /></>
     }
     
    
   
  ])

  return (
    <div style={divStyle}>
          <RouterProvider router={rout} />
    </div>
  )
}

export default App
