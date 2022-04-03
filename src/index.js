import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import './index.scss';

import Navigation from './containers/navigation'
import Footer from './containers/footer';

const Home = lazy(() => import('./components/home'));
const About = lazy(() => import('./components/about'));
const Slots = lazy(() => import('./components/slots'));
const Pinball = lazy(() => import('./components/pinball'));
const TradeStimulators = lazy(() => import('./components/tradestimulators'));
const Vendors = lazy(() => import('./components/vendors'))
const ArcadeGames = lazy(() => import('./components/arcade'))
const MachinesForSale = lazy(() => import('./components/machinesforsale'));
const Poinsettia = lazy(() => import('./components/forSale/poinsettia'));
const GrandStand = lazy(() => import('./components/forSale/grandstand'));
const PartsForSale = lazy(() => import('./components/partsforsale'));
const Contact = lazy(() => import('./components/contact'));
const NotFound404 = lazy(() => import('./containers/404'));

class App extends React.Component {
  render(){
    return(
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation/>
          <Routes>
            <Route path="*" element={<NotFound404 />} />
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<About />} />
            
            <Route path="/SlotMachines" element={<Slots />} />
            <Route path="/PinballMachines" element={<Pinball />} />
            <Route path="/TradeStimulators" element={<TradeStimulators />} />
            <Route path="/VendorsAndDispensers" element={<Vendors />} />
            <Route path="/ArcadeGames" element={<ArcadeGames />} />

            <Route path="/MachinesForSale" element={<MachinesForSale />} />
            <Route path="/MachinesForSale/poinsettia" element={<Poinsettia />} />
            <Route path="/MachinesForSale/grandstand" element={<GrandStand />} />
            <Route path="/PartsForSale" element={<PartsForSale />} />

            <Route path="/Contact" element={<Contact />} />
          </Routes>
        <Footer/>
      </Suspense>
    </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
