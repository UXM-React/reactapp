import React,{ Component } from 'react';
import './App.css';
import Radium from 'radium';
import Navigation from './navigation/navigation';
import Alert from 'react-bootstrap/Alert';
import {DropdownButton,Dropdown} from 'react-bootstrap';




class App extends Component {
  

render(){
  return (
    <div className="App container-fulid sb-nav-fixed">
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Start Bootstrap</a><button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#">
        <i className="fa fa-bars"></i>   
        </button>
        <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
          <div className="input-group search-box">
            <input className="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
            <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                <i className="fa fa-search"></i>
                </button>
            </div>
          </div>
        </form> 
        <i className="fa fa-user fa-fw"></i>   
        <DropdownButton variant="secondary" id="dropdown-Secondary-button" title="">
          <Dropdown.Item href="#">Settings</Dropdown.Item>
          <Dropdown.Item href="#">Activity</Dropdown.Item>
          <hr></hr>
          <Dropdown.Item href="#">Logout</Dropdown.Item>
        </DropdownButton>
      </nav>      
            <Navigation/>
      </div>
    );
}
}
export default Radium(App);
