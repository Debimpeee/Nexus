import React from 'react'
import { useRoutes } from 'react-router-dom'
import Homepage from "../src/pages/Homepage/Homepage"
import About from '../src/pages/About/About'
import Works from "../src/pages/Works/Works"
import Contact from "../src/pages/Contact/Contact"


const ProjectRoutes = () => {
 
    let element = useRoutes([
        {path: "/",
            element: <Homepage/>
        },
        {path: "about",
            element: <About/>
        },
        {path: "works",
            element: <Works/>
        },
        {path: "contact",
            element: <Contact/>
        }
    ])
  return element
};

export default ProjectRoutes
