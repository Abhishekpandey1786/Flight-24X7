import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import First from './assets/First';
import BookingForm from './assets/BookingForm';
import Support from './assets/Support';
import Footer from './assets/Footer';
import Notpage from './assets/Notpage';
import FlightLinks from './assets/FlightLinks';
import AirlineDetail from './assets/AirlineDetail';
import Fottercont from './assets/Fottercont';
import Back from './assets/Back'
function Layout() {
  const location = useLocation();

  if (location.pathname === "/no-flights") {
    return <Notpage />;
  }

  return (
    <>
      <First />
      <BookingForm />
      <Support />
      <Back/>

      <Routes>
        <Route path="/" element={<FlightLinks />} />
        <Route path="/airline/:name" element={<AirlineDetail />} />
        <Route path="/destination/:name" element={<AirlineDetail />} />
       <Route path="/:name" element={<Fottercont />} />


        
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
