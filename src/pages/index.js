import * as React from "react";
import Bestspecialist from "./bestspecialist";
import Clinic from "./clinic_with_Innovative";
import Contact from "./Contact/contact";
import Customer from "./CustomersReview/customer";
import Doctorcart from "./DoctorCart/doctorcart";
import Footer from "./footer";
import "./global.css";
import Navbar from "./Navbar";
import OurServices from "./OurServices";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Bestspecialist />
        <OurServices />
        <Clinic />
        <Doctorcart />
        <Customer />
        <Contact />
        <Footer/>
      </div>
    </>
  );
}
