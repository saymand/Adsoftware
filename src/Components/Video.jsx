import React from 'react'

function Video() {
    return (
        <>
           <div className="video-area pt-100">
         <div className="container">
            <div className="video-view-content">
               <div className="video-image">
                  <img src="assets/images/video/video-1.jpg"/>
               </div>
               <a href="#" className="video-btn popup-youtube">
               <i className="ri-play-line"></i>
               </a>
            </div>
         </div>
         <div className="video-shape-1" data-speed="0.08" data-revert="true">
            <img src="assets/images/video/shape-1.png"/>
         </div>
         <div className="video-shape-2" data-speed="0.08" data-revert="true">
            <img src="assets/images/video/shape-2.png"/>
         </div>
      </div> 
        </>
    )
}

export default Video;
