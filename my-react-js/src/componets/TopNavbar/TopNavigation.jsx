import React, { Component, Fragment } from 'react'
import { Container, Navbar, Nav, NavLink } from 'react-bootstrap'
import '../TopNavbar/TopNavigation.css'
import Logo from '../../image/2.jpg'
import LogoScroll from '../../image/2.jpg'



 class TopNavigation extends Component {

     constructor() {
          super();
          this.state = {
               navBarTitle: 'navTitle',
               logo: [Logo],
               NavbarBack:"navBackground" ,
               NavbarItems :"navItem" ,
               variant:"dark"


          }
     }




     Scroll = () => {
          if (window.scrollY > 100) {
               this.setState({ navBarTitle: 'navTitleScroll', logo: [LogoScroll] ,NavbarBack:'navBackgroundScroll' ,NavbarItems:'navItemScroll' ,  variant:"dark"})
              
          } else {
               this.setState({ navBarTitle: 'navTitle', logo: [Logo] ,NavbarBack:'navBackground', NavbarItems:'navItem' ,variant:"dark" })
          }
     }

     componentDidMount() {
          window.addEventListener('scroll', this.Scroll);
     }
     
     render() {
          return (
               <Fragment>
                    <Navbar fixed="top" collapseOnSelect expand="lg" className={this.state.NavbarBack} >
                      
                              <Navbar.Brand href="/" className={this.state.navBarTitle}> <img src={this.state.logo} /> Creative Team</Navbar.Brand>
                              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                              <Navbar.Collapse id="responsive-navbar-nav">
                                   <Nav className="me-auto">
                                   </Nav>
                                   <Nav    >
                                     <Nav.Link>   <NavLink exact activeStyle={{color:'#f0ec2c'}} className={this.state.NavbarItems} to="/">Home</NavLink> </Nav.Link>
                                     <Nav.Link>  <NavLink exact activeStyle={{color:'#f0ec2c'}}  className={this.state.NavbarItems} to="/about">About</NavLink> </Nav.Link>
                                     <Nav.Link>  <NavLink exact activeStyle={{color:'#f0ec2c'}} className={this.state.NavbarItems} to="/AllServices">Services</NavLink> </Nav.Link>
                                     <Nav.Link>   <NavLink exact activeStyle={{color:'#f0ec2c'}} className={this.state.NavbarItems}to="/AllCourses">Courses</NavLink> </Nav.Link>
                                     <Nav.Link>   <NavLink exact activeStyle={{color:'#f0ec2c'}} className={this.state.NavbarItems} to="/AllProject">Profolio</NavLink> </Nav.Link>
                                     <Nav.Link>  <NavLink exact activeStyle={{color:'#f0ec2c'}} className={this.state.NavbarItems} to="/contact">Contact</NavLink> </Nav.Link>
                                   </Nav>
                              </Navbar.Collapse>
                         
                    </Navbar>
               </Fragment>
          )
     }
}
export default TopNavigation
