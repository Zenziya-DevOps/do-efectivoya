import React, { useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Typography } from "@mui/material"
import ico from "../images/ico.svg"
import close from "../images/close.svg"
import api_efectivoya from "./../services/api_efectivoya"
import { step } from "./../constants"
import { getCookie } from "../helpers"

export const Desaprobado = () => {
  useEffect(() => {
    api_efectivoya.interacciones({
      step: step.RECHAZADO,
      value: `Cliente notificado como rechazado`,
      idCookie: getCookie(),
      url: window.location.href,
    })
  }, [])

  return (
    <>
      <Container
        style={{
          backgroundColor: "#3A68AD",
        }}
      >
        <Row className="pt-3 pb-3">
          <Col xs={6} className="text-left">
            <img src={`${ico}`} style={{ width: "195px" }} />
          </Col>

          <Col xs={6} className="text-right">
            <a href="/">
              <img src={`${close}`} className="img img-fluid" id="xclos" />
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <Typography paragraph={true} className="text-center white">
              <b className="white">
                ¡Lo sentimos! <br /> No podemos prestarte dinero
              </b>
            </Typography>
          </Col>
        </Row>
      </Container>

      <Container
        style={{
          backgroundColor: "#F8F8F8",
          height: "100vh",
        }}
      >
        <Row>
          <Col className="mt-5 mb-3">
            <Typography paragraph={true} className="">
              Algunas recomendaciones:
            </Typography>
          </Col>
        </Row>
        <Row>
          <Col
            className="bwhite mr-3 ml-3 pt-3 pb-3"
            style={{ borderRadius: "10px" }}
          >
            <ul>
              <li style={{ lineHeight: "35px" }}>
                Verifica tu ingresos mensuales. Es importante poder comprobar tu
                actividad y continuidad laboral.
              </li>
              <li style={{ lineHeight: "35px" }}>Paga tus cuentas a tiempo.</li>
              <li style={{ lineHeight: "35px" }}>
                Intenta mantener los saldos de tus tarjetas de credito por
                debajo de 35% de tus límites.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  )
}
