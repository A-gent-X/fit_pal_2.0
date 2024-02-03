import Home from './pages/Home.jsx'
import DashBoard from './pages/DashBoard.jsx'
import AddMeal from './pages/AddMeal.jsx'
import AddExercise from './pages/AddExercise.jsx'
import DietProgram from './pages/DietProgram.jsx'
import TrainingProgram from './pages/TrainingProgram.jsx'
import './index.css'
import Root from './pages/Root.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/dashboard',
        element: <DashBoard/>
      },
      {
        path: '/addmeal',
        element: <AddMeal/>
      },
      {
        path: '/dietprogram',
        element: <DietProgram/>
      },
      {
        path: '/addexercise',
        element: <AddExercise/>
      },
      {
        path: '/trainingprogram',
        element: <TrainingProgram/>
      },
    ]
  }
])

import React from 'react'

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App