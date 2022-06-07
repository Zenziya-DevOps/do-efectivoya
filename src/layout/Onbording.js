import React, { Component } from "react"
import { COMP_Header } from "../components/header/comp_header"
import { COMP_Pasos } from "../components/pasos/comp_pasos"
import { COMP_Requisitos } from "../components/requesitos/comp_requisitos"
import { COMP_Consultas } from "../components/consultas/comp_consultas"
import { COMP_historia } from "../components/historias/historias_comp"
import { COMP_Cuotas } from "../components/cuota/comp_cuota"
import { COMP_Footer } from "../components/footer/comp_footer"
import bk_1 from "../images/bk_1.svg"

export class Vw_Onboring extends Component {
  render() {
    return (
      <div id="master">
        <COMP_Header />
        <COMP_Pasos />
        <div
          style={{
            backgroundImage: `url(${bk_1})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            marginTop: "-12px",
          }}
        >
          <COMP_Requisitos />
        </div>
        <COMP_Consultas />
        <COMP_historia />
        <COMP_Cuotas />
        <COMP_Footer />
      </div>
    )
  }
}
