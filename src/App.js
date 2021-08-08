
import './App.css';
import Header from './Components/Header';
import Preloader  from './Components/Preloader';
import Sidebar from './Components/Sidebar';
import Banner from './Components/Banner';
import Feature from './Components/Feature';
import About from './Components/About';
import Video from './Components/Video';
import Ourservices from './Components/Ourservices';
import Projectarea from './Components/Projectarea';
import Overviewarea from './Components/Overviewarea';
import Footer from './Components/Footer';



function App() {
  return (
    <>

   {/*  pre Loadeder */}

      <Preloader/>

      {/*  pre loader end here */}



     <Header/>
     {/* modal pop */}

      <Sidebar/>

      {/*  model end here */}

      {/*  banner section  */}

      <Banner/>

      {/*  service Title */}

      <Feature/>

      {/*  about us section  */}
       <About/>
     

      {/*  video section  */}

      <Video/>

      {/*  service area sec */}

      <Ourservices/>

      {/* support area */}

     

        


      {/* Project Area */}

      <Projectarea/>

      {/*  */}

     
         {/*  client view  */}

         
      {/* over view */}
      <Overviewarea/>

      

      {/*  patner */}

     



      {/* footer section */}

      

      <Footer/>



     

      





    </>
  );
}

export default App;
