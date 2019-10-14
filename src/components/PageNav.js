import React from "react";
import { Link } from "react-router-dom";

class PageNav extends React.Component {
    render(){
        if ((window.location.pathname !== "/") && (window.location.pathname !== "/index.html")) {

        return(
        <div className="container">
        <div className="row">
         <div className="col">
         <Link to= "/" className= "NavBar-logo brand-logo left grey-text text-darken-3">
          B.BRAND</Link>
        </div>	 

        </div>
        </div>

        );
        }
        else {
            
        
        return (

            
        <div className="col">
		<Link to="/" className= "NavBar-logo brand-logo left grey-text text-darken-3">
          B.BRAND
        </Link>
        </div>	 
        );  
        }     
    }
    
}

export default PageNav;