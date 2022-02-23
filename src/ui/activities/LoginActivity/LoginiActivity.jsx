import React from "react";
import "./LoginActivity.scss"

 class LoginiActivity extends React.Component{
 constructor(props) {
     super(props);
 }

     render(){
     return  <div className={"LoginActivity"}>

         <div className={"row masab"}>
             <div className={"col-md-7 salman"}>
                 <img src={require('../../../Twitt.jpg')}
                      className={"picture"}
                      alt={"hello"}/>
             </div>
             <div className={"col-md-5 umar"}>
                 <i className={"fab fa-twitter"}/>
                 <h1 className={"heading"}>Happening now</h1>
                 <h2 className={"heading1"}>Join Twitter today.</h2>
                 <div className={"form-group"}>

                     <button

                     className={"input1 form-control"}
                     type={"text"}
                     value={"Sign up with apple"}

                     >  <i className={"fab fa-apple"}/>Sign up with apple</button>

                 </div>

                 <div className="or-container mb-3">
                     <div className="or-line mr-3"/>
                     <div className="or">or</div>
                     <div className="ml-3 or-line"/>
                 </div>
                 <div className={"form-group"}>

                     <button

                         className={"input2 form-control"}
                        type={"submit"}
                     ><a href={"#popup1"}>Sign up with phone number</a></button>
                     <div id="popup1" className="overlay">

                         <div className="popup">
                             <a className="close" href="#">&times;</a>
                             <i className={"fab fa-twitter icon"}/>
                             <h2>Create your account</h2>
                             <br/>
                             <div className="content">

                                 <div className={"form-group"}>
                                     <input
                                     className={"form-control input 4"}

                                     />
                                 </div>
                                 <br/>
                                 <div className={"form-group"}>
                                     <input
                                         className={"form-control input 4"}

                                     />
                                 </div>
<br/>

                                 <a href={"#"}>Use email instead</a>
                                 <br/>
                                 <p className={"para"}>Date of birth</p>
                                 <p className={"text"}>This will not be shown publicly. Confirm your own age, even if this account is
                                     for a business, a pet, or something else.</p>
                             </div>
                         </div>
                     </div>


                 </div>
<p className={"paragraph"}>By signing up, you agree to the <a className={"ancle"}>Terms of Service</a> and <a className={"ancle"}>Privacy<br/>
    Policy,</a> including <a className={"ancle"}>Cookie Use.</a></p>
                 <div className={"head"}>Already have an account?</div>
                 <div className={"form-group"}>

                     <button

                         className={"input3 form-control"}
                         type={"text"}
                         placeholder={""}
                     >Sign in</button>

                 </div>
             </div>

         </div>


         <div className={"footer"}>About
             Help Center
             TermsofService
             PrivacyPolicy
             CookiePolicy
             Accessibility
             Adsinfo
             Blog
             Status
             Careers
             BrandResources
             Advertising
             Marketing
             TwitterforBusiness
             Developers
             Directory
         <br/>
             Settings
             © 2022 Twitter, Inc.
         </div>
         </div>
     }
 }
 export default LoginiActivity;