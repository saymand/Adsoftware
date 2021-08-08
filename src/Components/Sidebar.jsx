import React from 'react'

function Sidebar() {
    return (
        <>
        <div className="sidebarModal modal right fade" id="sidebarModal" tabindex="-1" role="dialog">
         <div className="modal-dialog" role="document">
            <div className="modal-content">
               <button type="button" className="close" data-bs-dismiss="modal"><i className="ri-close-line"></i></button>
               <div className="modal-body">
                  <div className="title">
                     <a href="index.html">
                     <img src="assets/images/logo1.png" />
                     </a>
                  </div>
                  <div className="sidebar-content">
                     <h3>About Us</h3>
                     <p> Adsoftwaresolution, an umbrella of services that multifunctioning assistance to our potential clients from website designing up-to web portal development, a comprehensive code. With a team of 100+ experienced and skilled members we are delighted in satisfying more than thousands of our customers with our services. We believe in delivering our assistance with innovation every time and that’s the reason our vision is to work with dedication and efficiency.  </p>
                     <div className="sidebar-btn">
                        <a href="contact.html" className="default-btn">Let’s Talk <i className="ri-message-line"></i><span></span></a>
                     </div>
                  </div>
                  <div className="sidebar-contact-info">
                     <h3>Contact Information</h3>
                     <ul className="info-list">
                        <li><i className="ri-phone-fill"></i> <a href="tel:+91-9716530569">+91-9716530569</a></li>
                        <li><i className="ri-mail-line"></i> <a href="mailto:info@adsoftwaresolutions.com"> <span className="__cf_email__"> info@adsoftwaresolutions.com</span></a></li>
                        <li><i className="ri-map-pin-line"></i>  New Delhi </li>
                     </ul>
                  </div>
                  <ul className="sidebar-social-list">
                     <li><a href="#" target="_blank"><i className="ri-facebook-fill"></i></a></li>
                     <li><a href="#" target="_blank"><i className="ri-twitter-fill"></i></a></li>
                     <li><a href="#" target="_blank"><i className="ri-linkedin-fill"></i></a></li>
                     <li><a href="#" target="_blank"><i className="ri-instagram-fill"></i></a></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
            
        </>
    )
}

export default Sidebar;
