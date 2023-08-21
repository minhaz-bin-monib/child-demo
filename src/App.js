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
import SingleStaff from "./components/Babysitters/SingleStaff/SingleStaff";
import AdminMainPanel from "./components/Dashboard/AdminMainPanel/AdminMainPanel";
import BabySiterTable from "./components/Dashboard/Babysitter/BabySiterTable/BabySiterTable";
import BabySiterDetails from "./components/Dashboard/Babysitter/BabySiterDetails/BabySiterDetails";
import BabySiterUpdate from "./components/Dashboard/Babysitter/BabySiterCreate/BabySiterUpdate";
import BabySiterCreate from "./components/Dashboard/Babysitter/BabySiterCreate/BabySiterCreate";
import BabySiterDelete from "./components/Dashboard/Babysitter/BabySiterDelete/BabySiterDelete";
import AddService from "./components/Dashboard/ServiceControls/AddService/AddService";
import Enrollment from "./components/Enrollment/Enrollment";
import NewEnrollementContoll from "./components/Dashboard/EnrollmentControll/NewEnrollmentControll"
import EditEnrolementStatus from "./components/Dashboard/EnrollmentControll/EditEnrolementStatus";
import AcceptedEnrolment from "./components/Dashboard/EnrollmentControll/AcceptedEnrolment";
import HoldingEnrolment from "./components/Dashboard/EnrollmentControll/HoldingEnrolment";
import RejectedEnrolment from "./components/Dashboard/EnrollmentControll/RejectedEnrolment";
import Report from "./components/Dashboard/Report/Report";
import ReadEnquiry from "./components/Dashboard/Enquiry/ReadEnquiry/ReadEnquiry";
import UnreadEnquiry from "./components/Dashboard/Enquiry/UnreadEnquiry/UnreadEnquiry";
import UnreadEnquiryDetails from "./components/Dashboard/Enquiry/UnreadEnquiry/UnreadEnquiryDetails";
import SubscribeControll from "./components/Dashboard/SubscribeControll/SubscribeControll";
import AllEnrolment from "./components/Dashboard/EnrollmentControll/AllEnrolment";
import SearchReport from "./components/Dashboard/Report/SearchReport";
import ManageService from "./components/Dashboard/ServiceControls/ManageService/ManageService";
import AboutUsControll from "./components/Dashboard/AboutUsControll/AboutUsControll";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUsControll from "./components/Dashboard/ContactUsControll/ContactUsControll";

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
        element : <Services></Services>,
        loader: () => fetch('http://localhost:5000/services')

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
      // ************************* DashBoard ************************************
      {
        path : '/dashboard',
        element : <PrivateRoute><AdminMainPanel></AdminMainPanel></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/users'),

      },
      {
        path : '/dashboard/allSection',
        element : <AdminMainPanel></AdminMainPanel>,
        loader: () => fetch('http://localhost:5000/users'),

      },
        // ************************* Start BabySiter *******************
      {
        path : '/dashboard/babysiter',
        element : <BabySiterTable></BabySiterTable>,
        loader: () => fetch('http://localhost:5000/users'),
      },
      {
        path : '/dashboard/createbabysiter',
        element : <BabySiterCreate></BabySiterCreate>
       
      },
      {
        path : '/dashboard/detailsbabysiter/:id',
        element : <BabySiterDetails></BabySiterDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
      },
      {
        path : '/dashboard/updatebabysiter/:id',
        element : <BabySiterUpdate></BabySiterUpdate>,
        loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
      },
      {
        path : '/dashboard/deletebabysiter/:id',
        element : <BabySiterDelete></BabySiterDelete>,
        loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
      },
       // ************************* END BabySiter *******************

       // ********************* START Enrolment ***********************
       {
        path : '/dashboard/newEnrolment',
        element : <NewEnrollementContoll></NewEnrollementContoll>,
        loader: () => fetch('http://localhost:5000/enrollment')
      },
      {
        path : '/dashboard/allenrolment',
        element : <AllEnrolment></AllEnrolment>,
        loader: () => fetch('http://localhost:5000/enrollment')
      },
      {
        path : '/dashboard/acceptedenrolment',
        element : <AcceptedEnrolment></AcceptedEnrolment>,
        loader: () => fetch('http://localhost:5000/enrollment')
      },
      {
        path : '/dashboard/onboardenrolment',
        element : <HoldingEnrolment></HoldingEnrolment>,
        loader: () => fetch('http://localhost:5000/enrollment')
      },
      {
        path : '/dashboard/rejectedenrolment',
        element :<RejectedEnrolment></RejectedEnrolment>,
        loader: () => fetch('http://localhost:5000/enrollment'),
        
      },
       
       {
        path : '/dashboard/editenrolment/:id',
        element : <EditEnrolementStatus></EditEnrolementStatus>,
        loader: ({params}) => fetch(`http://localhost:5000/enrollment/${params.id}`)
      },
       
       // ********************* EDN Enrolment ***********************

       // *************************Report Start  ***********************
       {
        path : '/dashboard/report',
        element : <Report></Report>,
        loader: () => fetch('http://localhost:5000/enrollment')
      },

      {
        path : '/dashboard/reportSearch',
        element : <SearchReport></SearchReport>,
        loader: () => fetch('http://localhost:5000/enrollment')
      },





      
       // ************************* Report End***********************
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
        path : '/singleStaff/:id',
        element : <SingleStaff></SingleStaff>,
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
      },
             // ************************* Services Start***********************

      {
        path : '/dashboard/addService',
        element : <AddService></AddService>
      },
      {
        path : '/dashboard/manageService',
        element : <ManageService></ManageService>,
        loader: () => fetch('http://localhost:5000/services')

      },
             // ************************* Services End***********************

      {
        path : '/enroll',
        element : <Enrollment></Enrollment>
      },


        // ************************* Enquiry Start***********************

      {
        path : '/dashboard/readEnquiry',
        element : <ReadEnquiry></ReadEnquiry>,
        loader: () => fetch('http://localhost:5000/enquiry')
      },
      {
        path : '/dashboard/unreadEnquiry',
        element : <UnreadEnquiry></UnreadEnquiry>,
        loader: () => fetch('http://localhost:5000/enquiry')
      },
      {
        path : '/dashboard/unreadEnquiryDetails/:id',
        element : <UnreadEnquiryDetails></UnreadEnquiryDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/enquiry/${params.id}`)
      },
     
       // ************************* Enquiry End ***********************


      // ************************* Subscribe controll Start***********************

      {
        path : '/dashboard/subscribeControll',
        element : <SubscribeControll></SubscribeControll>,
        loader: () => fetch('http://localhost:5000/subscribers')
      },
      // ************************* Subscribe controll End***********************


       // ************************* AboutUs controll Start***********************

       {
        path : '/dashboard/aboutUsControll',
        element : <AboutUsControll></AboutUsControll>,
        loader: () => fetch('http://localhost:5000/aboutUs')
      },
      // ************************* AboutUs controll End***********************

       // ************************* contactUS controll Start***********************

       {
        path : '/dashboard/contactUsControll',
        element : <ContactUsControll></ContactUsControll>
      },
      // ************************* contactUS controll End***********************



      // ************************* AboutUs mainpage Start***********************

      {
        path : '/dashboard/aboutus',
        element : <AboutUs></AboutUs>,
        loader: () => fetch('http://localhost:5000/aboutUs')
      }
      // ************************* AboutUs mainpage End***********************


      
      


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
