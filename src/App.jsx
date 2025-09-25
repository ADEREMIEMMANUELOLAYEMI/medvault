
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Nav from "./components/Nav";
// import About from "./components/About";
// import How from "./components/How";
// import Healthcare from "./components/Healthcare";
// import Footer from "./components/Footer";
// import Sign from "./pages/Sign";
// import Hospital from "./pages/Hospital";
// import HospitalSignUp from "./pages/HospitalSignup";
// import ReviewingInfo from "./pages/ReviewingInfo";
// // import First from "./layout/first";
// import DoctorsLayout from "../DoctorsLayout";
// import DoctorsDashboard from "./pages/DoctorsDashboard";
// import DoctorsDepartment from "./pages/DoctorsDepartment";
// import DoctorsStaff from "./pages/DoctorsStaff";
// import DoctorsPatient from "./pages/DoctorsPatient";
// import DoctorsAppointments from "./pages/DoctorsAppointments";  
// import DoctorsPayments from "./pages/DoctorsPayments";
// import DoctorsSupport from "./pages/DoctorsSupport";
// import CreateDepartment from "../src/newdepartments/CreateDepartment";
// import NewStaff from "./newdepartments/NewStaff";
// import DepartmentManagement from "./pages/DoctorsDepartment";
// import CardiologyDepartment from './newdepartments/CardiologyDepartment';
// import DoctorsOverview from './doctors/DoctorsOverview';
// import DoctorsMainLayout from "./doctors/DoctorsMainLayout";
// import DocAppointments from './doctors/DocAppointments'
// import PatientProfile from "./doctors/PatientProfile";
// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Landing Page */}
//         <Route
//           path='/'
//           element={
//             <div>
//               <Nav />
//               <About />
//               <How />
//               <Healthcare />
//               <Footer />
//             </div>
//           }
//         />

//         {/* Login + Signup Routes */}
//         <Route path='/sign' element={<Sign />} />
//         <Route path='/hospital-signup' element={<Hospital />} />
//         <Route path='/specialist-signup' element={<HospitalSignUp />} />
//         <Route path='/patient-signup' element={<ReviewingInfo />} />

//         {/* Doctors Dashboard */}
//         <Route element={<DoctorsLayout />}>
//           <Route path='/DoctorsDashboard' element={<DoctorsDashboard />} />
//           <Route path='/DoctorsDepartment' element={<DoctorsDepartment />} />
//           <Route path='/DoctorsStaff' element={<DoctorsStaff />} />
//           <Route path='/DepartmentManagement' element={<DepartmentManagement />} />
//           <Route path='/DoctorsPatient' element={<DoctorsPatient />} />
//           <Route path='/DoctorsAppointment' element={<DoctorsAppointments />} />
//           <Route path='/DoctorsPayments' element={<DoctorsPayments />} />
//           <Route path='/DoctorsSupport' element={<DoctorsSupport />} />
//           <Route path='/CreateDepartment' element={<CreateDepartment />} />
//           <Route path='/NewStaff' element={<NewStaff />} />
//           <Route path='/CardiologyDepartment' element={<CardiologyDepartment />} />
          
//         </Route>

       
//         <Route element={<DoctorsMainLayout/>}>
//            <Route path='/DoctorsOverview' element={<DoctorsOverview/>} />
//             <Route path='/' element={<DocAppointments/>} />
//             {/* <Route path='/PatientProfile from' element={<atientProfile/>} /> */}
       
//         <Route path="/PatientProfile" element={<PatientProfile/>} />
//         </Route>

//       </Routes>
       
      
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import About from "./components/About";
import How from "./components/How";
import Healthcare from "./components/Healthcare";
import Footer from "./components/Footer";
import Sign from "./pages/Sign";
import Hospital from "./pages/Hospital";
import HospitalSignUp from "./pages/HospitalSignup";
import ReviewingInfo from "./pages/ReviewingInfo";
import HealthSpecialist from "./pages/HealthSpecialist";
import HealthSpecialistSignin from  './pages/HealthSpeacialistSignin'

import DoctorsLayout from "../DoctorsLayout"; // ✅ fixed path
import DoctorsDashboard from "./pages/DoctorsDashboard";
import DoctorsDepartment from "./pages/DoctorsDepartment";
import DoctorsStaff from "./pages/DoctorsStaff";
import DoctorsPatient from "./pages/DoctorsPatient";
import DoctorsAppointments from "./pages/DoctorsAppointments";
import DoctorsPayments from "./pages/DoctorsPayments";
import DoctorsSupport from "./pages/DoctorsSupport";
import CreateDepartment from "./newdepartments/CreateDepartment";
import NewStaff from "./newdepartments/NewStaff";
import DepartmentManagement from "./pages/DoctorsDepartment";
import CardiologyDepartment from "./newdepartments/CardiologyDepartment";
import DoctorsOverview from "./doctors/DoctorsOverview";
import DoctorsMainLayout from "./doctors/DoctorsMainLayout";
import DocAppointments from "./doctors/DocAppointments";
import PatienceProfile from "./doctors/PatienceProfile";
import AddNotes from './doctors/AddNotes'
import Prescriptions from "./doctors/Prescriptions";
import Addlabs from "./doctors/Addlabs";
import RequestSpecialist from "./doctors/RequestSpecialist";
import PatientSignup from "./patientsignup/PatientSignup";
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <div>
              <Nav />
              <About />
              <How />
              <Healthcare />
              <Footer />
            </div>
          }
        />

        {/* Login + Signup Routes */}
        <Route path="/sign" element={<Sign />} />
        <Route path="/hospital-signup" element={<Hospital />} />
        <Route path="/specialist-signup" element={<HospitalSignUp />} />
        <Route path="/patient-signup" element={<ReviewingInfo />} />
        <Route path="/ReviewingInfo" element={<ReviewingInfo />} />
        <Route path="/HealthSpecialist" element={<HealthSpecialist/>} />
         <Route path="HealthSpecialistSignin" element={<HealthSpecialistSignin/>} />
           <Route path="/PatientSignup" element={<PatientSignup/>} />
        {/* Doctors Dashboard */}
        <Route element={<DoctorsLayout />}>
          <Route path="DoctorsDashboard" element={<DoctorsDashboard />} />
          <Route path="DoctorsDepartment" element={<DoctorsDepartment />} />
          <Route path="DoctorsStaff" element={<DoctorsStaff />} />
          <Route path="DepartmentManagement" element={<DepartmentManagement />} />
          <Route path="DoctorsPatient" element={<DoctorsPatient />} />
          <Route path="DoctorsAppointment" element={<DoctorsAppointments />} />
          <Route path="DoctorsPayments" element={<DoctorsPayments />} />
          <Route path="DoctorsSupport" element={<DoctorsSupport />} />
          <Route path="CreateDepartment" element={<CreateDepartment />} />
          <Route path="NewStaff" element={<NewStaff />} />
          <Route path="CardiologyDepartment" element={<CardiologyDepartment />} />
        </Route>

        {/* Doctors Main Layout */}
        <Route element={<DoctorsMainLayout />}>
          <Route path="DoctorsOverview" element={<DoctorsOverview />} />
          <Route path="DocAppointments" element={<DocAppointments />} />
          <Route path="patient-profile/:id" element={<PatienceProfile />} /> 
          <Route path="AddNotes" element={<AddNotes/>} /> 
          <Route path='Prescriptions' element={<Prescriptions/>}>
          <Route path='Addlabs' element={<Addlabs/>}></Route>
          <Route path='RequestSpecialist' element={<RequestSpecialist/>}></Route>
          </Route>
          {/* ✅ now it will match exactly */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
