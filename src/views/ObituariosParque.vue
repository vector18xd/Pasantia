<template>
  <div>

    <div>
      <h1 class="large-font" style="color:#12A19B; margin-bottom: 30px">
        <h4>Obituarios Parque Cementerio</h4>
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
                  <h4 style="color: #70706e" v-text="card.destino"></h4>
                </h2>
                <p style="font-size: 17px; color: #666666" v-text="card.textDestino"></p>
                <h2>
                  <h4 style="color: #70706e" v-text="card.fecha"></h4>
                </h2>
                <p style="font-size: 17px; color: #666666" v-text="card.textFecha"></p>
                <h2>
                  <h4 style="color: #70706e" v-text="card.sectorlote"></h4>
                </h2>
                <div style="margin-left: 13%; margin-right: 13%">
                <p style="font-size: 17px; color: #666666" v-text="card.textSectorLote"></p>
                </div>
                <h2>
                  <h4 style="color: #70706e" v-text="card.velacion"></h4>
                </h2>
                <p style="font-size: 17px; color: #666666" v-text="card.textVelacion"></p>
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
        destino: "Destino Final:",
        textDestino: "Inhumación",
        fecha: "Fecha y Hora:",
        textFecha: "26/03/2019 - 5:00 p.m.",
        sectorlote: "Sector y Lote:",
        textSectorLote: "20 - 347",
        velacion: "Sala de Velación:",
        textVelacion: "Salas de velación Jardines de Armenia Fundadores Cra. 13a No. 2N - 55"
      },
      {
        img: require("@/assets/logojardinesarmenia.png"),
        src: require("@/assets/cross.png"),
        name: "Juan Jose Galindo Orozco",
        destino: "Destino Final:",
        textDestino: "Cremación",
        fecha: "Fecha y Hora:",
        textFecha: "26/03/2019 - 5:00 p.m.",
        sectorlote: "Sector y Lote:",
        textSectorLote: "13 - 638",
        velacion: "Sala de Velación:",
        textVelacion: "Sala de velación La Ofrenda Armenia Cra. 13 No. 22-13"
      },
      {
        img: require("@/assets/logojardinesarmenia.png"),
        src: require("@/assets/cross.png"),
        name: "Juan Jose Galindo Orozco",
        destino: "Destino Final:",
        textDestino: "Inhumación",
        fecha: "Fecha y Hora:",
        textFecha: "26/03/2019 - 5:00 p.m.",
        sectorlote: "Sector y Lote:",
        textSectorLote: "20 - 347",
        velacion: "Sala de Velación:",
        textVelacion: "Salas de velación Jardines de Armenia Fundadores Cra. 13a No. 2N - 55"
      },
      {
        img: require("@/assets/logojardinesarmenia.png"),
        src: require("@/assets/cross.png"),
        name: "Juan Jose Galindo Orozco",
        destino: "Destino Final:",
        textDestino: "Inhumación",
        fecha: "Fecha y Hora:",
        textFecha: "26/03/2019 - 5:00 p.m.",
        sectorlote: "Sector y Lote:",
        textSectorLote: "13 - 638",
        velacion: "Sala de Velación:",
        textVelacion: "Sala de velación La Ofrenda Armenia Cra. 13 No. 22-13"
      },
      {
        img: require("@/assets/logojardinesarmenia.png"),
        src: require("@/assets/cross.png"),
        name: "Juan Jose Galindo Orozco",
        destino: "Destino Final:",
        textDestino: "Cremación",
        fecha: "Fecha y Hora:",
        textFecha: "26/03/2019 - 5:00 p.m.",
        sectorlote: "Sector y Lote:",
        textSectorLote: "20 - 347",
        velacion: "Sala de Velación:",
        textVelacion: "Salas de velación Jardines de Armenia Fundadores Cra. 13a No. 2N - 55"
      },
      {
        img: require("@/assets/logojardinesarmenia.png"),
        src: require("@/assets/cross.png"),
        name: "Juan Jose Galindo Orozco",
        destino: "Destino Final:",
        textDestino: "Inhumación",
        fecha: "Fecha y Hora:",
        textFecha: "26/03/2019 - 5:00 p.m.",
        sectorlote: "Sector y Lote:",
        textSectorLote: "13 - 638",
        velacion: "Sala de Velación:",
        textVelacion: "Sala de velación La Ofrenda Armenia Cra. 13 No. 22-13"
      }
    ]
  })
};
</script>
