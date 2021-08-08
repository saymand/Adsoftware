import React from 'react'

function Header() {
    return (
        <>
 {/*  header section start here */}
 <header className="main-header-area">
         <div className="header-information">Header Information</div>
         <div className="top-header-area">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-7 col-md-6">
                     <ul className="top-header-content">
                        <li>
                           <i className="ri-customer-service-line"></i>
                           <a href="tel:9716530569"> 9716530569</a>
                        </li>
                        <li>
                           <i className="ri-earth-line"></i>
                           <a href="#"><span className="__cf_email__" > info@adsftwaresolutions.com</span></a>
                        </li>
                     </ul>
                  </div>
                  <div className="col-lg-5 col-md-6">
                     <ul className="top-header-optional">
                        <li>
                           <a href="#" target="_blank">
                           <i className="ri-facebook-fill"></i>
                           </a>
                           <a href="#" target="_blank">
                           <i className="ri-twitter-fill"></i>
                           </a>
                           <a href="#" target="_blank">
                           <i className="ri-linkedin-fill"></i>
                           </a>
                           <a href="#" target="_blank">
                           <i className="ri-messenger-fill"></i>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         <div className="navbar-area navbar-box-style">
            <div className="main-responsive-nav">
               <div className="container">
                  <div className="main-responsive-menu">
                     <div className="logo">
                        <a href="index.html">
                        <img src="assets/images/logo1.png" />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="main-navbar">
               <div className="container">
                  <nav className="navbar navbar-expand-md navbar-light">
                     <a className="navbar-brand" href="index.html">
                     <img src="assets/images/logo1.png" />
                     </a>
                     <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto">
                           <li className="nav-item">
                              <a href="#" className=" active">Home</a>
                           </li>
                           <li className="nav-item">
                              <a href="#" className="nav-link">About</a>
                           </li>
                           <li className="nav-item">
                              <a href="#" className="nav-link">
                              Web Services
                              <i className="ri-add-line"></i>
                              </a>
                              <ul className="dropdown-menu">
                                 <li className="nav-item">
                                    <a href="#" className="nav-link">Web Designing</a>
                                 </li>
                                 <li className="nav-item">
                                    <a href="#" className="nav-link">Logo Designing</a>
                                 </li>
                                 <li className="nav-item">
                                    <a href="#" className="nav-link">Web Development</a>
                                 </li>
                                 <li className="nav-item">
                                    <a href="#" className="nav-link">School Management</a>
                                 </li>

                                 <li className="nav-item">
                                    <a href="#" className="nav-link">Portal Development</a>
                                 </li>

                                 <li className="nav-item">
                                    <a href="#" className="nav-link">E-Commerce Services</a>
                                 </li>
                              </ul>
                           </li>
                           
                        
                              
                           <li className="nav-item">
                              <a href="contact.html" className="nav-link">Our Client</a>
                           </li>
                           <li className="nav-item">
                              <a href="contact.html" className="nav-link">Contact</a>
                           </li>
                        </ul>
                        <div className="others-options d-flex align-items-center">
                       <div className="option-item">
                              
                              <i className="close-btn ri-close-line"></i>
                              
                              </div> 
                           <div className="option-item">
                              <a href="contact.html" className="default-btn">Let’s Talk <i className="ri-message-line"></i><span></span></a>
                           </div>
                           <div className="option-item">
                              <div className="side-menu-btn">
                                 <i className="ri-menu-4-line" data-bs-toggle="modal" data-bs-target="#sidebarModal"></i>
                              </div>
                           </div>
                        </div>
                     </div>
                  </nav>
               </div>
            </div>
            <div className="others-option-for-responsive">
               <div className="container">
                  <div className="dot-menu">
                     <div className="inner">
                        <div className="circle circle-one"></div>
                        <div className="circle circle-two"></div>
                        <div className="circle circle-three"></div>
                     </div>
                  </div>
                  <div className="container">
                     <div className="option-inner">
                        <div className="others-options d-flex align-items-center">
                           <div className="option-item">
                              <i className="search-btn ri-search-line"></i>
                              <i className="close-btn ri-close-line"></i>
                              <div className="search-overlay search-popup">
                                 <div className='search-box'>
                                    <form className="search-form">
                                       <input className="search-input" name="search" placeholder="Search..." type="text"/>
                                       <button className="search-button" type="submit">
                                       <i className="ri-search-line"></i>
                                       </button>
                                    </form>
                                 </div>
                              </div>
                           </div>
                           <div className="option-item">
                              <a href="contact.html" className="default-btn">Let’s Talk <i className="ri-message-line"></i><span></span></a>
                           </div>
                           <div className="option-item">
                              <div className="side-menu-btn">
                                 <i className="ri-menu-4-line" data-bs-toggle="modal" data-bs-target="#sidebarModal"></i>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </header>

      {/*  header section end here */}

        </>
    )
}

export default Header;
