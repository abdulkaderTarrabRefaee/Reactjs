import '../asset/css/custom.css';
import { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import AppUrl from  '../AppUrl/AppUrl'
import RestApi from  '../AppUrl/RestApi'



export class TobBanner extends Component {
     constructor()
     {
          super();
          this.state={
               title:"rr",
               subtitle:"gg",
               buttonName:"erew",
               buttonUrl:""
          }
     }

     componentDidMount()
     {
          RestApi.GetRequest(AppUrl.topBannerHome).then(result=>
               {
                    this.setState({
                    title:result[0]['title'],
                    subtitle:result[0]['subtitle'],
                    buttonName:result[0]['buttun_name'],
                    buttonUrl:result[0]['buttun_url'],
               
               })
               });
     }
     render() {
          return (
               <Fragment>

                    <Container fluid={true} className="topFixedBanner  p-0 "  >

                         <div className="topBannerOverly">

                              <Container className="topContent"  >

                                   <Row>

                                        <Col className="text-center"  >

                                             <h1 className="topTitle" >   {this.state.title} </h1>
                                             <h4 className="topSubTitle"> {this.state.subtitle} </h4>
                                             <Button variant="primary">{this.state.buttonName}</Button>

                                        </Col>


                                   </Row>

                              </Container>


                         </div>


                    </Container>


               </Fragment>
          )
     }
}

export default TobBanner;
