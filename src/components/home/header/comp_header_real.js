import React, { Component } from "react"
import { Row, Container, Col } from "react-bootstrap"
import CalculadoraReal from "../../calculadora/comp_calculadora_real"
import Burger from "./Nav/Burger"
import ico from "../../../images/ico.svg"

export class COMP_Header_real extends Component {
  render() {
    return (
      <>
        <div
          style={{
            backgroundColor: "#3A68AD",
            height: "100vh",
          }}
        >
          <Container fluid>
            <Row className="p-3 my-auto mb-4 rounded">
              <Col className="p-2">
                <img src={`${ico}`} style={{ width: "195px" }} />
              </Col>

              <Col xs={1} className="my-auto ml-auto">
                <Burger />
              </Col>
            </Row>

            <Row className="pt-1">
              <Col xs={12} className="my-auto text-center pt-1 white">
                <p className="fs-32">Elige tu préstamo</p>
                <p>¡Puedes pedir hasta RD $10.000!</p>
              </Col>

              <Col xs={12}>
                <CalculadoraReal />
              </Col>
            </Row>
          </Container>
        </div>
      </>
    )
  }
}