import{ createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";  
import Instructors from "../pages/Instructors/Instructors";  // Import Instructors component
import Classes from "../pages/Classes/Classes";  // Import Classes component
import Gallery from "../pages/Home/Gallery/Gallery";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
            path: "/",  
            element: <Home/>,
        },
        {
          path: "/instructors", // Route for Instructors page
          element: <Instructors/>, // This will render the Instructors component
        },
        {
          path: "/classes", // Route for Classes page
          element: <Classes/>, // This will render the Classes component
        },
        {
          path: "/gallery",  // Path for the Gallery page
          element: <Gallery />,  // Add Gallery component here
        }
      ],
    },
  ]);
  
