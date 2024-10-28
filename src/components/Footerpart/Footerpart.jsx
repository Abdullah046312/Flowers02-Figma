import React from 'react'
import "./footerpart.css"
import { Col, Container, Row } from 'react-bootstrap'

const Footerpart = () => {
  return (
   <section id='footer'>
    <Container>
        <Row>
            <Col lg={{span:6, offset:3}}>
            <div className="tharteen">
                <h2>Flower Shop</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <h6>@2020-2023, FlowerShop.com. All rights reserved. </h6>
                <h4>Designed By Abdullah Al-Mamun.</h4>
            </div>
            </Col>
        </Row>
        <Row>
            <Col lg={{span:6, offset:3}}>
            <div className="fourteen">
                <h4><i class="fa-brands fa-square-twitter"></i></h4>
                <h4><i class="fa-brands fa-square-facebook"></i></h4>
                <h4><i class="fa-brands fa-square-youtube"></i></h4>
                <h4><i class="fa-brands fa-linkedin"></i></h4>
                <h4><i class="fa-brands fa-instagram"></i></h4>
                
                <h4><i class="fa-brands fa-apple"></i></h4>
            </div>
            </Col>
        </Row>
        <Row>
            <Col lg={{span:6, offset:3}}>
            <div className="fiveteen">
                <h2>Send Flowers</h2>
                <h2>What We Do</h2>
                <h2>Gallery</h2>
                <h2>Contacts</h2>
               
            </div>
            </Col>
        </Row>
    </Container>
   </section>
  )
}

export default Footerpart
