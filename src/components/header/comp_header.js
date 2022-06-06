import React, { Component } from "react"
import { Row, Container, Col } from "react-bootstrap"
import { label_ } from "../../styles/leters"
import { COMPCalculadoras } from "../../components/calculadora/comp_calculadora"
import { device } from "../../model/device"
import Burger from "./Nav/Burger"
import { Youtube } from "react-bootstrap-icons"
import * as constant from "../../constants"
import imagenCarrousel from "./../../images/EFECTIVO-YO-700png.png"
const assets = process.env.REACT_APP_ASSETS

export class COMP_Header extends Component {
  render() {
    return (
      <>
        <div
          style={{
            backgroundImage: `url(${assets}/bk_0.svg)`,
            backgroundSize: "cover ",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            height: device.device.type === "desktop" ? "750px" : "1200px",
          }}
        >
          <Container fluid>
            <Row className="p-3 my-auto mb-4 rounded shadow">
              {device.device.type === "desktop" ? (
                <>
                  <Col>
                    {constant.header.map((x, i) => {
                      return (
                        <img
                          key={i}
                          src={`${assets}${x.Contenido}`}
                          style={{ width: "calc(25% - 1em)" }}
                        />
                      )
                    })}
                  </Col>

                  <Col className="ml-auto">
                    <Row className="justify-content-end">
                      <Col xs={3}>
                        <a href="#Cuota">
                          <label style={label_(3, 0)}>Pagar cuota</label>
                        </a>
                      </Col>

                      <Col xs={3}>
                        <a href="#Requisito">
                          <label style={label_(3, 0)}>Requisitos</label>
                        </a>
                      </Col>

                      <Col xs={3}>
                        <a href="#Ayuda">
                          <label style={label_(3, 0)}>Ayuda</label>
                        </a>
                      </Col>
                    </Row>
                  </Col>
                </>
              ) : (
                <>
                  <Col className="p-2">
                    {constant.header.map((x, i) => {
                      return (
                        <img
                          key={i}
                          src={`${assets}${x.Contenido}`}
                          style={{ width: "195px" }}
                        />
                      )
                    })}
                  </Col>

                  <Col xs={1} className="my-auto ml-auto">
                    <Burger />
                  </Col>
                </>
              )}
            </Row>

            <Row className="pt-5">
              {device.device.type === "desktop" ? (
                <>
                  <Col
                    xs={device.device.type === "desktop" ? 4 : 12}
                    className="my-auto"
                  >
                    <img
                      src={imagenCarrousel}
                      className="p-3 my-auto img img-fluid"
                    />
                  </Col>

                  <Col
                    xs={device.device.type === "desktop" ? 4 : 12}
                    className="my-auto text-center"
                  >
                    <label
                      className="font-weight-bold"
                      style={label_(3, 0, "2.2em")}
                    >
                      El préstamo para <br /> cumplir todos tus planes.
                    </label>
                    <label style={label_(3, 0, "1em")}>
                      <label className="mt-1 mb-0">
                        ¡Obtén hasta RD$ 10,000!
                      </label>
                      <label className="mb-0">
                        Aprobación inmediata, sin papeleo,
                      </label>
                      <label className="mb-0">
                        sólo con tu cédula y 100% online!
                      </label>
                    </label>
                    <label>
                      <a style={{ color: "#fff" }} href="#youtubeVideo">
                        <Youtube /> Ver cómo funciona
                      </a>
                    </label>
                  </Col>

                  <Col xs={device.device.type === "desktop" ? 4 : 12}>
                    <COMPCalculadoras />
                  </Col>
                </>
              ) : (
                <>
                  <Col xs={device.device.type === "desktop" ? 4 : 12}>
                    <COMPCalculadoras />
                  </Col>

                  <Col
                    xs={device.device.type === "desktop" ? 4 : 12}
                    className="my-auto text-center pt-3"
                  >
                    <label
                      className="font-weight-bold"
                      style={label_(3, 0, "30px")}
                    >
                      El préstamo para cumplir todos tus planes.
                    </label>
                    <label style={label_(3, 0, "17px")}>
                      <label className="mt-1 mb-0">
                        ¡Obtén hasta RD$ 10,000!
                      </label>
                      <label className="mb-0">
                        Aprobación inmediata, sin papeleo,
                      </label>
                      <label className="mb-0">
                        sólo con tu cédula y 100% online!
                      </label>
                      <label className="mb-0">
                        <a style={{ color: "#fff" }} href="#youtubeVideo">
                          <Youtube /> Ver cómo funciona
                        </a>
                      </label>
                    </label>
                  </Col>

                  <Col
                    xs={device.device.type === "desktop" ? 4 : 12}
                    className="my-auto text-center"
                  >
                    <img
                      src={imagenCarrousel}
                      className="my-auto img img-fluid"
                    />
                  </Col>
                </>
              )}
            </Row>
          </Container>
        </div>
      </>
    )
  }
}
