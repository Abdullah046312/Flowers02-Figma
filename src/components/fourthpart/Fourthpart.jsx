import React from 'react'
import "./fourthpart.css"
import { Col, Container, Row } from 'react-bootstrap'


const Fourthpart = () => {
  return (
    <section id='four'>
        <Container>
            <Row>
                <Col lg={{span:6, offset:3}}>
                <div className="nine">
                    <h2>Instagram</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                </Col>
            </Row>

         
        </Container>
    </section>
  )
}

export default Fourthpart
