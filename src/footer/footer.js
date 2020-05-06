import React, { Component } from "react";
import "./footer.css";

export default class Footer extends Component{
 
    render(){
        return(
            <footer className="py-3 footer">
                    <div className="container-fluid">
                    <div>Copyright © 2020. All Rights Reserved | Designed by <a className="footer-link" href="#">UXM Team</a></div>
                    </div>
            </footer>
        );
    }
}