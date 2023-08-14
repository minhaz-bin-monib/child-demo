import { getAuth } from "firebase/auth";
import './App.css';
import app from './firebase/firebase.init'
import RegisterReactBootstrap from "./components/RegisterReactBootstrap";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layout/CoreMain/Main";
import LoginBootstrap from "./components/LoginBootstrap";
import OtherSections from "./components/LoginBootstrap";
import MainSections from "./components/HomePage/MainSections";
import AddNurse from "./components/Dashboard/AddNurse/AddNurse";
import ShowallNurses from "./components/Babysitters/ShowallNurses";
import Payment from "./components/Payment";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import MainProgram from "./components/Programs/MainProgram/MainProgram";
import Toddler from "./components/Programs/Toddler/Toddler";
import Infant from "./components/Programs/Infant/Infant";
import Preschool from "./components/Programs/PreSchool/Preschool";
import Services from "./components/Services/Services";
import Maindashboard from "./components/Dashboard/MainDashboard/Maindashboard";
import DeleteNurse from "./components/Dashboard/DeleteNurse/DeleteNurse";
import UpdateSingleNurse from "./components/Dashboard/UpdateNurse/UpdateSingleNurse/UpdateSingleNurse";
import UpdateAllNurse from "./components/Dashboard/UpdateNurse/UpdateAllNurse/UpdateAllNurse";
import Curriculum from "./components/Curriculum/Curriculum";
import Admission from "./components/Admission/Admission";
import Events from "./components/Events/Events";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main>0</Main>,
    children: [
      {
        path : '/',
        element : <MainSections></MainSections>
      },
      {
        path : '/main',
        element : <MainSections></MainSections>
      },
      {
        path : '/register',
        element : <RegisterReactBootstrap></RegisterReactBootstrap>
      },
      {
        path : '/services',
        element : <Services></Services>
      },
      {
        path : '/login',
        element : <LoginBootstrap></LoginBootstrap>
      },
      {
        path : '/addNurse',
        element : <AddNurse></AddNurse>
      },
      {
        path : '/deleteNurse',
        element : <DeleteNurse></DeleteNurse>,
        loader: () => fetch('http://localhost:5000/users')
      },
      {
        path : '/allnurses',
        element : <ShowallNurses></ShowallNurses>,
        loader: () => fetch('http://localhost:5000/users')
      },
      {
        path : '/updateAllNurses',
        element : <UpdateAllNurse></UpdateAllNurse>,
        loader: () => fetch('http://localhost:5000/users')
      },
      {
        path : '/dashboard',
        element : <PrivateRoute><Maindashboard></Maindashboard></PrivateRoute>
      },
      {
        path : '/payment',
        element : <Payment></Payment>
      },
      {
        path : '/programs',
        element : <MainProgram></MainProgram>
      },
      {
        path : '/toddler',
        element : <Toddler></Toddler>
      },
      {
        path : '/infant',
        element : <Infant></Infant>
      },
      {
        path : '/preschool',
        element : <Preschool></Preschool>
      },
      {
        path : '/updateSingleNurse/:id',
        element : <UpdateSingleNurse></UpdateSingleNurse>,
        loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
      },
      {
        path : '/curriculum',
        element : <PrivateRoute><Curriculum></Curriculum></PrivateRoute>
      },
      {
        path : '/admission',
        element : <PrivateRoute><Admission></Admission></PrivateRoute>
      },
      {
        path : '/events',
        element : <PrivateRoute><Events></Events></PrivateRoute>
      }
      


    ]
  }
])

function App() {
  return (
    <div className="Ap">

      <RouterProvider router={router}></RouterProvider>
      
      
    </div>
  );
}

export default App;
