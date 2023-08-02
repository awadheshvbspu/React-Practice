import React from 'react'
import './App.css'
import FormikContainer from './formikControldemo/FormikContainer';
import LoginForm from './formikControldemo/LoginForm'
import RegistrationForm from './formikControldemo/RegistrationForm'
import EnrollmentForm from './formikControldemo/EnrollmentForm'
import { theme, ThemeProvider } from '@chakra-ui/react'
import BasicTable from './reactTable/BasicTable';
import SortingTable from './reactTable/SortingTable';
import FilteringTable from './reactTable/FilteringTable';
import PaginationTable from './reactTable/PaginationTable';
import { RowSelection } from './reactTable/RowSelection';
import ColumnOrder from './reactTable/ColumnOrder'
import { ColumnHiding } from './reactTable/ColumnHiding';
import ReactToastify from './prcatical-react/ReactToastify';
import HotToast from './prcatical-react/HotToast';
import Modaal from './prcatical-react/Modaal';
import ToolTip from './prcatical-react/ToolTip';
import Countup from './prcatical-react/Countup';
// import IdleTimer from './prcatical-react/IdleTimer'
import Login from './forms/Login';

function App () {
  return (
    // <ThemeProvider theme={theme}>
      <div className='App'>
        {/* <FormikContainer /> */}
        {/* <LoginForm /> */}
        {/* <RegistrationForm /> */}
      {/* <EnrollmentForm /> */}
      {/* <BasicTable/> */}
      {/* <SortingTable/> */}
      {/* <FilteringTable/> */}
      {/* <PaginationTable/> */}
      {/* <RowSelection/> */}
      {/* <ColumnOrder/>
       */}
       {/* <ColumnHiding/> */}
       {/* <ReactToastify/> */}
       {/* <HotToast/> */}
       {/* <ToolTip/> */}
       {/* <Modaal/> */}
       {/* <Countup/> */}
       {/* <IdleTimer/> */}
       <Login/>
      </div>
  //  </ThemeProvider>
  )
}

export default App

















// import Header from "./forgotpassword/Header";
// import Login from "./forgotpassword/Login";
// import Register from "./forgotpassword/Register";
// import Dashboard from "./forgotpassword/Dashboard";
// import Error from "./forgotpassword/Error";
// import PasswordReset from "./forgotpassword/PasswordReset";
// import ForgotPassword from "./forgotpassword/ForgotPassword";
// import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';
// import { Routes, Route, useNavigate } from "react-router-dom"
// import { useEffect, useContext, useState } from "react";
// import { LoginContext } from "./forgotpassword/Context";


// function App() {

//   const [data, setData] = useState(false);

//   const { logindata, setLoginData } = useContext(LoginContext);


//   const history = useNavigate();

//   const DashboardValid = async () => {
//     let token = localStorage.getItem("usersdatatoken");

//     const res = await fetch("/validuser", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": token
//       }
//     });

//     const data = await res.json();

//     if (data.status == 401 || !data) {
//       console.log("user not valid");
//     } else {
//       console.log("user verify");
//       setLoginData(data)
//       history("/dash");
//     }
//   }

//   useEffect(() => {
//     setTimeout(()=>{
//       DashboardValid();
//       setData(true)
//     },2000)

//   }, [])

//   return (
//     <>
//       {
//         data ? (
//           <>
//             <Header />

//             <Routes>
//               <Route path="/" element={<Login />} />
//               <Route path="/register" element={<Register />} />
//               <Route path="/dash" element={<Dashboard />} />
//               <Route path="/password-reset" element={<PasswordReset />} />
//               <Route path="/forgotpassword/:id/:token" element={<ForgotPassword />} />
//               <Route path="*" element={<Error />} />
//             </Routes>
//           </>

//         ) : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
//           Loading... &nbsp;
//           <CircularProgress />
//         </Box>
//       }


//     </>
//   );
// }

// export default App;



// import { useState } from "react";
// import { createContext } from "react";
// import Login from "./loginandforgotpass/Login";
// import OTPInput from "./loginandforgotpass/OTPInput";
// import Recovered from "./loginandforgotpass/Recovered";
// import Reset from "./loginandforgotpass/Reset";

// export const RecoveryContext = createContext();
// function App() {
//   const [page, setPage] = useState("login");
//   const [email, setEmail] = useState();
//   const [otp, setOTP] = useState();

//   function NavigateComponents() {
//     if (page === "login") return <Login />;
//     if (page === "otp") return <OTPInput />;
//     if (page === "reset") return <Reset />;

//     return <Recovered />;
//   }

//   return (
//     <RecoveryContext.Provider
//       value={{ page, setPage, otp, setOTP, setEmail, email }}
//     >
//       <div className="flex justify-center items-center">
//         <NavigateComponents />
//       </div>
//     </RecoveryContext.Provider>
//   );
// }

// export default App;
// import logo from './logo.svg';
// import './App.css';
// import ChangeState from './useState/ChangeState';
// import ChangeStateWithtoggle from './useState/ChangeStateWithtoggle';
// import RuleHooks from './useState/RuleHooks';
// import UsestateWithArray from './useState/UsestateWithArray';
// import ThreeDotsUseState from './useState/ThreeDotsUseState';
// import UseStateTodoList from './useState/UseStateTodoList';
// // import Login from './useState/Login';
// import UseEffectCount from './useEffect/UseEffectCount';
// import UseEffectCleanupFunction from './useEffect/UseEffectCleanupFunction';
// import FetchApi from './useEffect/FetchApi';
// import UserefHooks from './useref/UserefHooks';
// import UseReducers from './useReducer/UseReducers';
// import ContaxtApi from './contextapi/ContaxtApi';
// import CustomHooks from './customhook/CustomHooks';
// import UseLocationHook from './routerHooks/UseLocationHook';
// import Toastify from './Toastify/Toastify';
// import Todo from './ToDo/Todo';
// import CreateGallary from './creategallary/CreateGallary';
// import Login from './loginandforgotpass/Login';


// function App() {
//   return (
//     <>
//       {/* <ChangeState/> */}
//       {/* <ChangeStateWithtoggle/> */}
//       {/* <RuleHooks/> */}
//       {/* <UsestateWithArray/> */}
//    {/* <ThreeDotsUseState/> */}
//    {/* <UseStateTodoList/> */}
//    {/* <Login/> */}
//    {/* <UseEffectCount/> */}
//    {/* <UseEffectCleanupFunction/> */}
//     {/* <FetchApi/> */}
//     {/* <UserefHooks/> */}
//     {/* <UseReducers/> */}
//     {/* <ContaxtApi/> */}
//     {/* <CustomHooks/> */}
//     {/* <UseLocationHook/> */}
//     {/* <Toastify/> */}
//     {/* <Todo/> */}
//     {/* <CreateGallary/> */}
//     <Login/>
//     </>

//   );
// }

// export default App;
