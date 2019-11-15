import React from 'react';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './components/carosel'
import Navbar from './components/navbar'
import SlideModal from './components/slideModal'
import HowitWorks from './components/howitWorkSection';
import DownloadApkSection from './components/downloadApkSection';
import WorkWithUsSection from './components/WorkwithUsSection'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <SlideModal />
      <HowitWorks />
      <DownloadApkSection />
      <WorkWithUsSection/>
     
    
    </div>
  );
}

export default App;
