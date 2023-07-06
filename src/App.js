import { getAuth } from "firebase/auth";
import './App.css';
import app from './firebase/firebase.init'
import RegisterReactBootstrap from "./components/RegisterReactBootstrap";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import LoginBootstrap from "./components/LoginBootstrap";
import OtherSections from "./components/LoginBootstrap";
import MainSections from "./components/MainSections";

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
