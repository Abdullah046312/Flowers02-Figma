import React from 'react'
import "./firstpart.css"
import { Col, Container, Row } from 'react-bootstrap'
import images1 from "../../assets/images1.png"
import images2 from "../../assets/images2.png"
import images3 from "../../assets/images3.png"
import images4 from "../../assets/images4.png"
import images5 from "../../assets/images5.png"
import images6 from "../../assets/images6.png"

const Firstpart = () => {
  return (
    <section id='first'>
        <Container>
            <Row>
                <Col lg={{span:6, offset:3}}>
                <div className="three">
                <h2>Today’s Availabe Flowers</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                </div>
                </Col>
            </Row>

            <Row>
                  <Col lg={4}>
                      <div className="four">
                          <img src={images1} alt="Pink Flower Tree" />
                          <div className="overlay"></div> {/* Overlay div */}
                          <h2>Pink Flower Tree</h2>
                          <p>$20</p>
                      </div>
                  </Col>
                  <Col lg={4}>
                      <div className="four">
                          <img src={images2} alt="Pink Flower Tree" />
                          <div className="overlay"></div> {/* Overlay div */}
                          <h2>Pink Flower Tree</h2>
                          <p>$20</p>
                      </div>
                  </Col>
                  <Col lg={4}>
                      <div className="four">
                          <img src={images3} alt="Pink Flower Tree" />
                          <div className="overlay"></div> {/* Overlay div */}
                          <h2>Pink Flower Tree</h2>
                          <p>$20</p>
                      </div>
                  </Col>
                  <Col lg={4}>
                      <div className="four">
                          <img src={images4} alt="Pink Flower Tree" />
                          <div className="overlay"></div> {/* Overlay div */}
                          <h2>Pink Flower Tree</h2>
                          <p>$20</p>
                      </div>
                  </Col>
                  <Col lg={4}>
                      <div className="four">
                          <img src={images5} alt="Pink Flower Tree" />
                          <div className="overlay"></div> {/* Overlay div */}
                          <h2>Pink Flower Tree</h2>
                          <p>$20</p>
                      </div>
                  </Col>
                  <Col lg={4}>
                      <div className="four">
                          <img src={images6} alt="Pink Flower Tree" />
                          <div className="overlay"></div> {/* Overlay div */}
                          <h2>Pink Flower Tree</h2>
                          <p>$20</p>
                      </div>
                  </Col>

               
            </Row>
            <div className="five">
            <button>See More</button>
            </div>
        </Container>
    </section>
  )
}

export default Firstpart
