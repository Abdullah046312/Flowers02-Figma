import React from 'react'
import "./secondpart.css"
import { Col, Container, Row } from 'react-bootstrap'
import images7 from "../../assets/images7.png"
import images8 from "../../assets/images8.png"
import images9 from "../../assets/images9.png"
import images10 from "../../assets/images10.png"

const Secondpart = () => {
  return (
    <section id='second'> 
        <Container>
            <Row>
            <Col lg={{span:6, offset:3}}>
                <div className="three">
                <h2>Our Features Flower</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                </div>
                </Col> 
            </Row>
            <Row>
          <Col lg={3}>
            <div className="six">
              <div className="six-inner">
                <img src={images7} alt="Pink Flower Tree" />

              </div>
              <h2>Pink Flower Tree</h2>
              <p>$20</p>
            </div>
          </Col>
          <Col lg={3}>
            <div className="six">
              <div className="six-inner">
                <img src={images8} alt="Pink Flower Tree" />

              </div>
              <h2>Pink Flower Tree</h2>
              <p>$20</p>
            </div>
          </Col>
          <Col lg={3}>
            <div className="six">
              <div className="six-inner">
                <img src={images9} alt="Pink Flower Tree" />

              </div>
              <h2>Pink Flower Tree</h2>
              <p>$20</p>
            </div>
          </Col>
          <Col lg={3}>
            <div className="six">
              <div className="six-inner">
                <img src={images10} alt="Pink Flower Tree" />

              </div>
              <h2>Pink Flower Tree</h2>
              <p>$20</p>
            </div>
          </Col>
            
           </Row>
        </Container>
    </section>
  )
}

export default Secondpart
