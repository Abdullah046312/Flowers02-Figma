import React from 'react'
import "./thirdpart.css"
import { Col, Container, Row } from 'react-bootstrap'
import images11 from "../../assets/images11.png"


const Thirdpart = () => {
  return (
    <section id='third'>
        <Container>
            <Row>
                <div className="eight">
                <Col lg={6}>
                <div className="seven">
                    <h2>Hurry Up</h2>
                    <h3>Hot Deal ! Sale Up To 25% Off</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <button>Shop Now</button>
                </div>
                </Col>
                <Col lg={6}>
                <div className="nine">
                    <img src={images11} alt="" />
                </div>
                </Col>

                </div>
               
            </Row>
        </Container>
    </section>
  )
}

export default Thirdpart
