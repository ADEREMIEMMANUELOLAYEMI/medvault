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
// import First from "./layout/first";
import DoctorsLayout from "../DoctorsLayout";
import DoctorsDashboard from "./pages/DoctorsDashboard";
import DoctorsDepartment from "./pages/DoctorsDepartment";
import DoctorsStaff from "./pages/DoctorsStaff";
import DoctorsPatient from "./pages/DoctorsPatient";
import DoctorsAppointments from "./pages/DoctorsAppointments";
import DoctorsPayments from "./pages/DoctorsPayments";
import DoctorsSupport from "./pages/DoctorsSupport";
import CreateDepartment from "../src/newdepartments/CreateDepartment";
import NewStaff from "./newdepartments/NewStaff";
import DepartmentManagement from "./pages/DoctorsDepartment";
import CardiologyDepartment from './newdepartments/CardiologyDepartment'
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route
          path='/'
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
        <Route path='/sign' element={<Sign />} />
        <Route path='/hospital-signup' element={<Hospital />} />
        <Route path='/specialist-signup' element={<HospitalSignUp />} />
        <Route path='/patient-signup' element={<ReviewingInfo />} />

        <Route element={<DoctorsLayout />}>
          <Route path=' ' element={<DoctorsDashboard />} />
          <Route path='/DoctorsDepartment' element={<DoctorsDepartment />} />
          <Route path='/doctorsstaff' element={<DoctorsStaff />} />
          <Route
            path='/DepartmentManagement' 
            element={<DepartmentManagement />}
          />
          <Route path="/DoctorsPatient" element={<DoctorsPatient/>}/>
          <Route path='/DoctorsAppointment' element={<DoctorsAppointments />} />
          <Route path='/DoctorsPayments' element={<DoctorsPayments />} />
          <Route path='/DoctorsSupport' element={<DoctorsSupport />} />
          <Route path='/CreateDepartment' element={<CreateDepartment />} />
          <Route path='/NewStaff' element={<NewStaff />} />
          <Route path="/CardiologyDepartment" element={<CardiologyDepartment/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
