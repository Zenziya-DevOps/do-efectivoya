import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useHistory } from "react-router-dom"
import ico from "../../images/ico.svg"
import close from "../../images/close.svg"
import { Typography } from "@mui/material"
import { Container, Row, Col } from "react-bootstrap"
import { Button } from "@mui/material"
import TextField from "@mui/material/TextField"
import { createOtp, otpVerification } from "./../../services/api_efectivoya"
import "../../css/placeholder.css"
import Countdown from "react-countdown"

export const OtpValidacion = () => {
  const history = useHistory()
  const location = useLocation()
  const [isValidCode, setIsValidCode] = useState(false)
  const [message, setMessage] = useState("")

  useEffect(async () => {
    if (!location.state) history.push("/")
    var result = await createOtp(parseInt(location.state.celular))
    if (result.des_respuesta !== "OK")
      setMessage(
        "Hubo un problema al enviar el SMS, por favor intente más tarde"
      )
  }, [])

  const validateOtp = async (e) => {
    setMessage("")
    const otp = e.target.value
    if (otp.length === 4) {
      const result = await otpVerification(location.state.celular, otp)

      if (result.found) setIsValidCode(true)
      else setMessage("El código ingresado es incorrecto")
    }
  }

  const onRenderer = ({ seconds }) => {
    return <label>En {seconds} segundos avanza siguiente paso</label>
  }

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
      </Container>
      <Container className="pt-3 pb-1">
        <Container>
          <Row>
            <Col xs={12}>
              <Typography className="title" paragraph={true}>
                Te enviamos un código al {location.state.celular}
              </Typography>
              <Typography paragraph={true} className="mt-5">
                Ingrésalo aquí:
              </Typography>
            </Col>
          </Row>

          <Row>
            <Col className="text-center">
              <TextField
                type="number"
                maxLength="11"
                className="w50p"
                variant="standard"
                inputProps={{
                  style: {
                    textAlign: "center",
                    borderRadius: "5px",
                    fontSize: "2rem",
                    letterSpacing: "10px",
                    border: none,
                  },
                }}
                onChange={validateOtp}
              />
            </Col>
          </Row>

          <Row className="mt-5 pt-5 text-center">
            <Col>
              <Typography className="error" paragraph={true}>
                {message}
              </Typography>
              {isValidCode ? (
                <Countdown
                  date={Date.now() + 3000}
                  renderer={onRenderer}
                  onComplete={() => {
                    var { credito, celular } = location.state
                    credito.Celular = celular
                    //debugger
                    history.push({
                      pathname: `/procesar_solicitud`,
                      state: { credito },
                    })
                  }}
                />
              ) : (
                <Button
                  variant="text"
                  className="btn-block violet"
                  onClick={() => {
                    var { credito } = location.state
                    history.push({
                      pathname: `/validacion_otp`,
                      state: { credito },
                    })
                  }}
                >
                  Ingresar otro número de celular
                </Button>
              )}
            </Col>
          </Row>

          <Row className="mt-5 pt-5">
            <Col>
              <Button variant="contained" className="btn-block btn-zz bottom">
                Continuar
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}
