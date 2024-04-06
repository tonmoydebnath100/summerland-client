import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Componant/Layout/Main';
import Home from './Componant/Pages/Home';
import MainMenu from './Componant/Pages/MainMenu';
import ChefSpecial from './Componant/Pages/ChefSpecial';
import Drinks from './Componant/Pages/Drinks';
import MakeReservation from './Componant/Pages/MakeReservation';

function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        children:[
          {
            path:'/',
            element:<MainMenu></MainMenu>
          },
          {
            path:'/cs',
            element:<ChefSpecial></ChefSpecial>
          },
          
          {
            path:'/d',
            element:<Drinks></Drinks>
          },
        ]
      },
      {
      path:'/makereservation',
      element:<MakeReservation></MakeReservation>,
      }
     
      

    ],
  }])
  return (
    <div className='	mx-auto'>
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
