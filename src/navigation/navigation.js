import React, { useState, Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Collapse, CardBody, Card } from 'reactstrap';
import Student from '../student/student';
import Tables from '../tables/tables';


export default class leftnav extends Component {

  state = {
    isOpen: false,
    isOpen2: false,
    isOpen3: false,
    isOpen4: false,
    isOpen5: false
  }

  toggle = () => {
    const drplist=this.state.isOpen;
    this.setState({isOpen:!drplist});
  };
  toggle2 = () => {
    const drplist2=this.state.isOpen2;
    this.setState({isOpen2:!drplist2});
  };toggle3 = () => {
    const drplist3=this.state.isOpen3;
    this.setState({isOpen3:!drplist3});
  };toggle4 = () => {
    const drplist4=this.state.isOpen4;
    this.setState({isOpen:!drplist4});
  };
  toggle5 = () => {
    const drplist5 = this.state.isOpen1;
    this.setState({ isOpen: !drplist5 });
  };

  render() {


    return (
      <Router>
        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
              <div className="sb-sidenav-menu">
                <div className="nav">
                  <div className="sb-sidenav-menu-heading">Core
                            </div>
                            
                            <a className="nav-link"  href="/dashboard">
                            <i className="fa fa-tachometer"></i>       Dashboard</a>
                            <div className="sb-sidenav-menu-heading">Interface</div>
                            <a className="nav-link " href="#" onClick={this.toggle}>
                            <i className="fa fa-columns"></i>                                Layouts
                                <span className="sb-sidenav-collapse-arrow">
                                <i className="fa fa-angle-down"></i>
                                </span>
                                </a>

                  <Collapse isOpen={this.state.isOpen}>
                    <Card>
                      <CardBody>
                        <nav className="sb-sidenav-menu-nested nav"><a className="nav-link" href="/staticnav">Static Navigation</a><a className="nav-link" href="/lightsidenav">Light Sidenav</a></nav>
                      </CardBody>
                    </Card>
                  </Collapse>

                      
                             <a className="nav-link " onClick={this.toggle2} href="#" >
                             <i className="fa fa-book"></i>                                Pages
                                <span className="sb-sidenav-collapse-arrow">
                                <i className="fa fa-angle-down"></i>                                </span>
                            </a>

                  <Collapse isOpen={this.state.isOpen2}>
                    <Card>
                      <CardBody>
                        <nav className="sb-sidenav-menu-nested nav">
                          <a className="nav-link" href="/staticnav" onClick={this.toggle3}>Authentication
                                            <span className="sb-sidenav-collapse-arrow">
                                      <i className="fa fa-angle-down"></i>
                                </span>
                                            </a>
                                <Collapse isOpen={this.state.isOpen3}>
                                <Card>
                                    <CardBody>
                                    <nav className="sb-sidenav-menu-nested nav"><a className="nav-link" href="/login">Login</a><a className="nav-link" href="/register">Register</a><a className="nav-link" href="/password">Forgot Password</a></nav>
                                    </CardBody>
                                </Card>
                            </Collapse>
                                <a className="nav-link" href="/lightsidenav" onClick={this.toggle4}>Light Sidenav
                                 <span className="sb-sidenav-collapse-arrow">
                                 <i className="fa fa-angle-down"></i></span>
                                </a>
                                 <Collapse isOpen={this.state.isOpen4}>
                                <Card>
                                    <CardBody>
                                    <nav className="sb-sidenav-menu-nested nav"><a className="nav-link" href="/login">Login</a><a className="nav-link" href="/register">Register</a><a className="nav-link" href="/password">Forgot Password</a></nav>
                                    </CardBody>
                                </Card>
                            </Collapse>  
                             
                                    
                <a className="nav-link collapsed" href="#" onClick={this.toggle5}                                       >Error
                <span className="sb-sidenav-collapse-arrow">
                <i className="fa fa-chart-area"></i>
                                </span>
                                </a>
                                 <Collapse isOpen={this.state.isOpen5}>
                                <Card>
                                    <CardBody>
                                    <nav className="sb-sidenav-menu-nested nav"><a className="nav-link" href="/401">401 Page</a><a className="nav-link" href="/404">404 Page</a><a className="nav-link" href="/500">500 Page</a></nav>
                                    </CardBody>
                                </Card>
                           </Collapse>
                           </nav>                  
                        </CardBody>
                    </Card>
                  </Collapse>


                           <div className="sb-sidenav-menu-heading">Addons</div>
                            <a className="nav-link" href="charts.html"
                                ><i className="fa fa-area-chart"></i>
                                  Charts</a>
                            <a className="nav-link" href="/tables"
                                >
                                <i className="fa fa-table"></i>
                                Tables</a
                  >
                </div>
              </div>
              <div className="sb-sidenav-footer">
                <div className="small">Logged in as:</div>
                        Start Bootstrap
                    </div>
            </nav>
          </div>
          <div className="rightsidenav">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/dashboard">
                <Dashboard />
              </Route>

              <Route path="/staticnav">
                <Staticnav />
              </Route>
              <Route path="/lightsidenav">
                <Lightsidenav />
              </Route>
              <Route path="/login">
                <Login />
              </Route>

              <Route path="/register">
                <Register />
              </Route>

              <Route path="/password">
                <Password />
              </Route>

              <Route path="/tables">
                <Tables />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>

    );
  }
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function tables() {
  return (
    <Tables />
  );
}
function Staticnav() {
  return (
    <div>
      <h2>staticnav</h2>
    </div>
  );
}
function Lightsidenav() {
  return (
    <div>
      <h2>lightsidenav</h2>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h2>login</h2>
    </div>
  );
}
function Register() {
  return (
    <div>
      <h2>register</h2>
    </div>
  );
}
function Password() {
  return (
    <div>
      <h2>password</h2>
    </div>
  );
}
