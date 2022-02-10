import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ServicesImage from "../../image/cor.jpg";
import "../Services/Services.css"
export class Services extends Component {
  render() {
    return (
<Fragment>
    <Container className=' text-center m-50 ' >
    <Row>
        <Col lg={4} md={6} sm={12} className='ServiceCard text-center'> 
            <img src={ServicesImage} className="imgServices"/>
            <h4 >
                The First Course 
            </h4>
            <p> 
            Create an online video course, reach students across the gy
            </p>

        </Col>


        <Col lg={4} md={6} sm={12} className='ServiceCard text-center'> 
            <img src={ServicesImage} className="imgServices"/>
            <h4>
                The First Course 
            </h4>
            <p>
            Create an online video course, reach students acros
            </p>

        </Col>


        <Col lg={4} md={6} sm={12} className='ServiceCard text-center'> 
            <img src={ServicesImage} className="imgServices"/>
            <h4>
                The First Course 
            </h4>
            <p>
            Create an online video course, reach stude, and earn money
            </p>

        </Col>    <Col lg={4} md={6} sm={12} className='ServiceCard text-center'> 
            <img src={ServicesImage} className="imgServices"/>
            <h4>
                The First Course 
            </h4>
            <p>
            Create an online video course, reach stude, and earn money
            </p>

        </Col>
    </Row></Container>
</Fragment>)
  }
}

export default Services;
