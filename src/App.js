import { getAuth } from "firebase/auth";
import './App.css';
import app from './firebase/firebase.init'
import RegisterReactBootstrap from "./components/RegisterReactBootstrap";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import LoginBootstrap from "./components/LoginBootstrap";
import OtherSections from "./components/LoginBootstrap";
import MainSections from "./components/MainSections";
import AddNurse from "./components/AddNurse";
import AllNurses from "./components/AllNurses";
import Dashboard from "./components/Dashboard";
import NurseDetails from "./components/NurseDetails";
import ShowallNurses from "./components/ShowallNurses";
import Services from "./components/Services";
import GuardianLogin from "./components/GuardianLogin";
import Payment from "./components/Payment";

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
        path : '/login',
        element : <LoginBootstrap></LoginBootstrap>
      },
      {
        path : '/addNurse',
        element : <AddNurse></AddNurse>
      },
      {
        path : '/nurses',
        element : <AllNurses></AllNurses>,
        loader: () => fetch('http://localhost:5000/users')
      },
      {
        path : '/allnurses',
        element : <ShowallNurses></ShowallNurses>,
        loader: () => fetch('http://localhost:5000/users')
      },
      {
        path : '/dashboard',
        element : <Dashboard></Dashboard>
      },
      {
        path : '/showNurses',
        element : <NurseDetails></NurseDetails>
      },
      {
        path : '/services',
        element : <Services></Services>
      },
      {
        path : '/glogin',
        element : <GuardianLogin></GuardianLogin>
      },
      {
        path : '/payment',
        element : <Payment></Payment>
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
