
import React from 'react'
import Head from "next/head"
import { useRouter } from 'next/router'
import { withRouter } from 'next/router'
function MyApp({ router , Component, pageProps }) {
  const isActive = (name) =>{
    console.log("name : ",name)
    console.log("router.pathname : ",router.pathname)
    if(name === router.pathname)
      return "active"
    return ""
  }
  return (
    
    
    <>
    <Head>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    
      <title>Personal Website</title>
      {/*<meta content="" name="description" />
      <meta content="Mokhtar Mami Personal Website" name="keywords" />*/}
    
      
      
    
      
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
    
      
      <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
      <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
      <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
      <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
      <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
      <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
    
      <link href="assets/css/style.css" rel="stylesheet" />
    
    </Head>
    
    
    
    
    {/* Work Here */}
    
    
    
    <Component {...pageProps} />
    
    
    
    {/* Work Here */}
    
    
    <footer id="footer">
    <div className="container">
      <h3>Mokhtar Mami</h3>
      
      <div className="social-links">
        <a href="https://github.com/Mo5mami" className="github"><i className="bx bxl-github"></i></a>
        <a href="https://www.linkedin.com/in/mokhtar-mami/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
      </div>
      <div className="copyright">
        &copy; Copyright <strong><span>MyResume</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
         <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>
    
    <div id="preloader"></div>
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>  
      <script src="assets/vendor/aos/aos.js"></script>
      <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
      <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
      <script src="assets/vendor/php-email-form/validate.js"></script>
      <script src="assets/vendor/purecounter/purecounter.js"></script>
      <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
      <script src="assets/vendor/typed.js/typed.min.js"></script>
      <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
    
      
      <script src="assets/js/main.js"></script>
      {/*<script src="assets/js/opencv.js" onload="onOpenCvReady();" type="text/javascript"></script>*/}
    
    
    
    </>
      )
    }
    


export default withRouter(MyApp)
