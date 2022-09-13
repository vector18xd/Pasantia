<template>
  <div>

    <div>
      <h1 class="large-font" style="color:#12A19B; margin-bottom: 30px">
        <h4>Obituarios Sala de Velación</h4>
      </h1>
    </div>


    <!-- OBITUARIOS -->
    
    <div class="row widthCard">
      <div class="column-222" v-for="card in cards" :key="card.title">
        <v-card class="estiloCard">
          <v-avatar size="80" style="margin-top: 10px; margin-right: 30px">
            <img :src="card.img" alt="avatar" />
          </v-avatar>
          <v-container fill-height pa-0>
            <v-card-title primary-title>
              <div class>
                <h3 class="headline" style="color: #12A19B">
                  <img :src="card.src" style="float: left;" />
                  <h4 v-text="card.name"></h4>
                </h3>
                <h2>
                  <h4 style="color: #70706e" v-text="card.eucaristia"></h4>
                </h2>
                <div style="margin-left: 13%; margin-right: 13%">
                <p style="font-size: 17px; color: #666666" v-text="card.textEucaristia"></p>
                </div>
                <h2>
                  <h4 style="color: #70706e" v-text="card.fecha"></h4>
                </h2>
                <p style="font-size: 17px; color: #666666" v-text="card.textFecha"></p>
                <h2>
                  <h4 style="color:#70706e" v-text="card.destino"></h4>
                </h2>
                <p style="font-size: 17px; color: #666666" v-text="card.textDestino"></p>
                <h2>
                  <h4 style="color: #70706e" v-text="card.cementerio"></h4>
                </h2>
                <p style="font-size: 17px; color: #666666" v-text="card.textCementerio"></p>
              </div>
            </v-card-title>
          </v-container>
        </v-card>
      </div>
    </div>
    <div class="text-xs-right">
      <v-btn class="fboton elevation-8 positionbtn" to="/">
        <strong>REGRESAR</strong>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        img: require("@/assets/logojardinesarmenia.png"),
        src: require("@/assets/cross.png"),
        name: "Juan Jose Galindo Orozco",
        eucaristia: "Eucaristía:",
        textEucaristia: "Parroquia Espíritu Santo Fundadores Cra. 13A No 2N-55",
        fecha: "Fecha y Hora:",
        textFecha: "26/03/2019 - 5:00 p.m.",
        destino: "Destino Final:",
        textDestino: "Inhumación",
        cementerio: "Cementerio:",
        textCementerio: "Parque Cementerio Jardines de Aremnia"
      },
      {
        img: require("@/assets/logojardinesarmenia.png"),
        src: require("@/assets/cross.png"),
        name: "Luz Dary Hernandez Cano",
        eucaristia: "Eucaristía:",
        textEucaristia: "Parroquia Espíritu Santo Fundadores Cra. 13A No 2N-55",
        fecha: "Fecha y Hora:",
        textFecha: "26/03/2019 1:00 p.m.",
        destino: "Destino Final:",
        textDestino: "Cremación",
        cementerio: "Cementerio:",
        textCementerio: "Parque Cementerio Jardines de Aremnia"
      },
      {
        img: require("@/assets/logojardinesarmenia.png"),
        src: require("@/assets/cross.png"),
        name: "Julio Cesar Rivillas",
        eucaristia: "Eucaristía:",
        textEucaristia: "Parroquia Espíritu Santo Fundadores Cra. 13A No 2N-55",
        fecha: "Fecha y Hora:",
        textFecha: "26/03/2019 - 11:00 a.m.",
        destino: "Destino Final:",
        textDestino: "Cremación",
        cementerio: "Cementerio:",
        textCementerio: "Parque Cementerio Jardines de Aremnia"
      },
      {
        img: require("@/assets/logojardinesarmenia.png"),
        src: require("@/assets/cross.png"),
        name: "Julio Cesar Rivillas",
        eucaristia: "Eucaristía:",
        textEucaristia: "Parroquia Espíritu Santo Fundadores Cra. 13A No 2N-55",
        fecha: "Fecha y Hora:",
        textFecha: "26/03/2019 - 4:00 p.m.",
        destino: "Destino Final:",
        textDestino: "Inhumación",
        cementerio: "Cementerio:",
        textCementerio: "Parque Cementerio Jardines de Aremnia"
      },
      {
        img: require("@/assets/logojardinesarmenia.png"),
        src: require("@/assets/cross.png"),
        name: "Juan Jose Galindo Orozco",
        eucaristia: "Eucaristía:",
        textEucaristia: "Parroquia Espíritu Santo Fundadores Cra. 13A No 2N-55",
        fecha: "Fecha y Hora:",
        textFecha: "26/03/2019 - 5:00 p.m.",
        destino: "Destino Final:",
        textDestino: "Inhumación",
        cementerio: "Cementerio:",
        textCementerio: "Parque Cementerio Jardines de Aremnia"
      },
      {
        img: require("@/assets/logojardinesarmenia.png"),
        src: require("@/assets/cross.png"),
        name: "Luz Dary Hernandez Cano",
        eucaristia: "Eucaristía:",
        textEucaristia: "Parroquia Espíritu Santo Fundadores Cra. 13A No 2N-55",
        fecha: "Fecha y Hora:",
        textFecha: "26/03/2019 1:00 p.m.",
        destino: "Destino Final:",
        textDestino: "Cremación",
        cementerio: "Cementerio:",
        textCementerio: "Parque Cementerio Jardines de Aremnia"
      },
      {
        img: require("@/assets/logojardinesarmenia.png"),
        src: require("@/assets/cross.png"),
        name: "Jaimito Hernandez Cano",
        eucaristia: "Eucaristía:",
        textEucaristia: "Parroquia Espíritu Santo Fundadores Cra. 13A No 2N-55",
        fecha: "Fecha y Hora:",
        textFecha: "26/03/2019 1:00 p.m.",
        destino: "Destino Final:",
        textDestino: "Cremación",
        cementerio: "Cementerio:",
        textCementerio: "Parque Cementerio Jardines de Aremnia"
      },
            {
        img: require("@/assets/logojardinesarmenia.png"),
        src: require("@/assets/cross.png"),
        name: "Jaimito Hernandez Cano",
        eucaristia: "Eucaristía:",
        textEucaristia: "Parroquia Espíritu Santo Fundadores Cra. 13A No 2N-55",
        fecha: "Fecha y Hora:",
        textFecha: "26/03/2019 1:00 p.m.",
        destino: "Destino Final:",
        textDestino: "Cremación",
        cementerio: "Cementerio:",
        textCementerio: "Parque Cementerio Jardines de Aremnia"
      },
            {
        img: require("@/assets/logojardinesarmenia.png"),
        src: require("@/assets/cross.png"),
        name: "Jaimito Hernandez Cano",
        eucaristia: "Eucaristía:",
        textEucaristia: "Parroquia Espíritu Santo Fundadores Cra. 13A No 2N-55",
        fecha: "Fecha y Hora:",
        textFecha: "26/03/2019 1:00 p.m.",
        destino: "Destino Final:",
        textDestino: "Cremación",
        cementerio: "Cementerio:",
        textCementerio: "Parque Cementerio Jardines de Aremnia"
      },
      {
        img: require("@/assets/logojardinesarmenia.png"),
        src: require("@/assets/cross.png"),
        name: "Luz Dary Hernandez Cano",
        eucaristia: "Eucaristía:",
        textEucaristia: "Parroquia Espíritu Santo Fundadores Cra. 13A No 2N-55",
        fecha: "Fecha y Hora:",
        textFecha: "26/03/2019 1:00 p.m.",
        destino: "Destino Final:",
        textDestino: "Cremación",
        cementerio: "Cementerio:",
        textCementerio: "Parque Cementerio Jardines de Aremnia"
      }
    ]
  })
};
</script>

<style>
.column-222 {
  float: left;
  width: 31%;
  padding: 13px;
  margin-left: 2%;
}
.widthCard {
  width: 84% !important;
}

.estiloCard {
  border: solid 1px;
  border-color: #e8ac09 !important;
  border-radius: 55px;
  background-color: transparent !important;
  -webkit-box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.75);
box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.75);
}
@media screen and (max-width: 1000px) {
  .column-222 {
    width: 80%;
    text-align: center;
    margin-left: 9%;
  }
  .widthCard {
    width: 85% !important;
  }
}
</style>
