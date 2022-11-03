<template>
  <div>
    <!-- INFO SOBRE UNIDAD DE DUELO -->
    <div>
      <h1 class="large-font" style="color:#12A19B;">
        <h4>Unidad de Duelo</h4>
      </h1>
    </div>
    <div class="container">
      <div class="row">
    <div style="width: 100%">
    <v-carousel interval="4500" class="slider" hide-controls>
      <v-carousel-item class="imgslider" v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>
    </div>

        <div class="column-50 margenU">
          <br />
          <br />
            <p align=" justify" style="font-size:18px">
              Brindar acompañamiento psicosocial y espiritual a las personas en
              situación de duelo por muerte de un ser querido, orientado a
              mitigar el impacto emocional, desde una intervención integral del
              ser humano, con un equipo interdisciplinario de sacerdotes,
              psicólogos y agentes de pastoral de duelo.</p>
  
            <br />
            <h4 style="color:#12A19B; font-size:20px">POBLACIÓN OBJETO</h4>
            <br />
            <p align="left" style="font-size:18px"
              >Niños, jóvenes, adultos jóvenes y adultos mayores, sin distinción
              de sexo, raza, credo y/o posición social, que han sufrido la
              pérdida de un ser querido por muerte, así como a sus familias,
              especialmente, cuando estos duelos tienden a volverse situaciones
              difíciles que ponen en riesgo la salud espiritual y mental de los
              dolientes.</p>
            
        </div>
      </div>
    </div>

<!--NAVEGACION UNIDAD DE DUELO-->
    <div id="Unidad">
      <v-tabs
        style="width: 68%"
        color="transparent"
        slider-color="#12A19B"
        grow
        show-arrows
        v-model="model"
        class="hidden-sm-and-down"
        type="pills"
      >
        <v-tab v-for="(tab, index) in tabs" :key="tab" :title="tab" @click="selectTabs(index)">
          {{tab}}
        </v-tab>
      </v-tabs>
    </div>
    <h1>{{index}}</h1>
    
      <br>
      <br>
      
    <!-- CARDS  -->
    <div v-show="index === 0">
      <h4 align="center" style="font-size: 25px; color:#12A19B">
        <span> Información según el tipo de usuario<br /> </span>
      </h4>
      <div class="row cardsInfoUs">
        <div class="column-333 grow">
          <v-card class="card-estilo elevation-18">
            <v-avatar size="150" style="margin-top: 10px">
              <img src="../assets/nosotros.png" alt="avatar" />
            </v-avatar>
            <v-card-title primary-title>
              <div style="font-size: 16px">
                <p>
                  Conoce más acerca de la unidad de duelo.
                </p>
                <div style="padding: 1.7px"><p>Niño.</p></div>
              </div>
            </v-card-title>
            <v-btn class="fboton elevation-8" to="usuarioniño">
              <strong>SABER MÁS</strong>
            </v-btn>
          </v-card>
        </div>

        <div class="column-333 grow">
          <v-card class="card-estilo elevation-18">
            <v-avatar size="150" style="margin-top: 10px">
              <img src="../assets/planesyservicios.png" alt="avatar" />
            </v-avatar>
            <v-card-title primary-title>
              <div style="font-size: 16px">
                <p>
                  Conoce más acerca de la unidad de duelo.
                </p>
                <div style="padding: 1.7px"><p>Adulto joven.</p></div>
              </div>
            </v-card-title>
            <v-btn class="fboton elevation-8" to="usuarioadultojoven">
              <strong>SABER MÁS</strong>
            </v-btn>
          </v-card>
        </div>

        <div class="column-333 grow">
          <v-card class="card-estilo elevation-18">
            <v-avatar size="150" style="margin-top: 10px">
              <img src="../assets/logouniduelo.png" alt="avatar" />
            </v-avatar>
            <v-card-title primary-title>
              <div style="font-size: 16px">
                <p>
                  Conoce más acerca de la unidad de duelo.
                </p>
                <div style="padding: 1.7px"><p>Adulto.</p></div>
              </div>
            </v-card-title>
            <v-btn class="fboton elevation-8" to="usuarioadulto">
              <strong>SABER MÁS</strong>
            </v-btn>
          </v-card>
        </div>
      </div>
    </div>
    <div id="Psicologos" v-show="index === 1">
      <h1 class="large-font" style="color:#12A19B;">
        <h4>Psicologos Profesionales Unidad De Duelo</h4>
      </h1>
      <p style="font-size: 26px; color:#666666">
        <span>Datos Biograficos</span>
      </p>
      <div class="cardsP">
      <div class="cardPs">
          <div class="card-avatar"></div>
          <div class="cardP-info">
            <p class="titleP">Adriana Botina</p>
            <p class="subtitleP">Psicóloga</p>
          </div>
          <div class="cardP-bio">
            <p>Nuestro propósito es la prestación de servicios funerarios con el diferencial de ofrecer un servicio integro teniendo en cuenta la calidez humana, acompañamiento espiritual, pastoral de la consolación y de la esperanza y dignos rituales.</p>
          </div>
      </div>
      <div class="cardPs">
          <div class="card-avatar1"></div>
          <div class="cardP-info">
            <p class="titleP">Ruby Pardo Lozano</p>
            <p class="subtitleP">Psicóloga</p>
          </div>
          <div class="cardP-bio">
            <p>Nuestro propósito es la prestación de servicios funerarios con el diferencial de ofrecer un servicio integro teniendo en cuenta la calidez humana, acompañamiento espiritual, pastoral de la consolación y de la esperanza y dignos rituales.</p>
          </div>
      </div>
      </div>
      <!-- <div class="row">
        
        <div class="column-333 grow">
        
x          <v-card class="card-estilo elevation-18">
            <v-avatar size="150" style="margin-top: 10px">
              <img src="../assets/adriana.jpg" alt="avatar">
            </v-avatar>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0" style="color:#12A19B;">
                  <h4>Adriana Botina Echeverry</h4>
                </h3>
                <div
                  style="padding: 1.7px"
                ><p>Nuestro propósito es la prestación de servicios funerarios con el diferencial de ofrecer un servicio integro teniendo en cuenta la calidez humana, acompañamiento espiritual, pastoral de la consolación y de la esperanza y dignos rituales.</p></div>
              </div>
            </v-card-title>
          </v-card>
        </div>
  
        <div class="column-333 grow">
          <v-card class="card-estilo elevation-18">
            <v-avatar size="150" style="margin-top: 10px">
              <img src="../assets/ruby.jpg" alt="avatar">
            </v-avatar>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0" style="color:#12A19B;">
                  <h4>Ruby Pardo Lozano</h4>
                </h3>
                <div
                  style="padding: 1.7px"
                ><p>Nuestro propósito es la prestación de servicios funerarios con el diferencial de ofrecer un servicio integro teniendo en cuenta la calidez humana, acompañamiento espiritual, pastoral de la consolación y de la esperanza y dignos rituales.</p></div>
              </div>
            </v-card-title>
          </v-card>
        </div>
      </div> -->
      <br>
    </div>
    <div id="Memorial" v-show="index === 2">
    </div >    
    <div id="Emisora" v-show="index === 3">
        <div>
          <h1 class="large-font" style="color:#12A19B;">
          <h4>PROGRAMA RADIAL UN MEMORIAL POR LA VIDA</h4>
          </h1>
          <p style="font-size: 26px; color:#666666">
          <span>Fechas de Emisión de Nuestro Programa </span>
          </p>
        </div>
      <div style="width: 45%;">
        <v-img :src="require('@/assets/logo_waifu2x_art_noise2_scale_tta_1_waifu2x_art_noise2_scale_tta_1.png')" style="border-radius: 10px"></v-img>
      </div>
      <div>
      <!-- TABLA EXHUMACIONES -->
        <div class="container">
          <v-card>
            <v-card-title class="tabla tabla1">
              <v-spacer></v-spacer>
              <v-text-field
              color="#12a19b"
              v-model="search"
              append-icon="search"
              label="Buscar"
              single-line
              hide-details
              ></v-text-field>
            </v-card-title>
          <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
            hide-actions
            :pagination.sync="pagination"
            class="elevation-6 tabla tabla1"
          >
            <template v-slot:items="props">
              <td class="text-xs-center tabla">{{ props.item.fecha }}</td>
              <td class="text-xs-center tabla">{{ props.item.nombre }}</td>
              <td class="text-xs-center tabla">{{ props.item.dia }}</td>
              <td class="text-xs-center tabla">{{ props.item.hora }}</td>
            </template>
            <template v-slot:no-results>
              <v-alert
                :value="true"
                color="error"
                icon="warning"
              >Su búsqueda de "{{ search }}" no encontró resultados.</v-alert>
            </template>
            </v-data-table>
          </v-card>
          <br>
          <div class="text-xs-center pt-2">
            <v-pagination v-model="pagination.page" :length="pages" color="#12a19b"></v-pagination>
          </div>
        </div>
      </div>
    </div>

    <div class="text-xs-right">
      <v-btn class="fboton elevation-8 positionbtn" to="productsandservices">
        <strong>REGRESAR</strong>
      </v-btn>
    </div>    
  </div>
</template>
<script>

export default {
  name : "Unidad",
  data() {
    return {
      search: "",
      pagination: {},
      selected: [],
      headers: [
        { text: "FECHA", align: "center", sortable: false, value: "fecha" },
        { text: "NOMBRE DE LA EMISIÓN", align: "center", sortable: false, value: "nombre" },
        { text: "DIA", align: "center", sortable: false, value: "dia" },
        { text: "HORA", align: "center", sortable: false, value: "hora" }
      ],
      desserts: [
        {
          fecha: "04/03/2020",
          nombre: "LA FAMILIA, TODO UN CUENTO",
          dia: "MIERCOLES",
          hora: "9:30 AM"
        },
        {
          fecha: "05/03/2020",
          nombre: "LAZOS DE AMOR MARIANO",
          dia: "MIERCOLES",
          hora: "10:00 AM"
        },
        {
          fecha: "05/03/2020",
          nombre: "SENDEROS DE ESPERANZA",
          dia: "JUEVES",
          hora: "11:05 AM"
        },
        {
          fecha: "06/03/2020",
          nombre: "MEMORIAL POR LA VIDA",
          dia: "VIERNES",
          hora: "10:00 AM"
        },
        {
          fecha: "11/03/2020",
          nombre: "LA FAMILIA TODO UN CUENTO",
          dia: "MIERCOLES",
          hora: "10:00 AM"
        },
        {
          fecha: "11/03/2020",
          nombre: "LAZOS DE AMOR MARIANO",
          dia: "MIERCOLES",
          hora: "11:00 AM"
        },
        {
          fecha: "10/03/2020",
          nombre: "LAICO ES TU HORA",
          dia: "MARTES",
          hora: "10:00 AM"
        },
        {
          fecha: "12/03/2020",
          nombre: "SENDEREOS DE ESPERANZA",
          dia: "JUEVES",
          hora: "10:00 AM"
        },
        {
          fecha: "13/03/2020",
          nombre: "MEMORIAL POR LA VIDA",
          dia: "VIERNES",
          hora: "11:00 AM"
        },
        {
          fecha: "16/03/2020",
          nombre: "CARISMAS",
          dia: "LUNES",
          hora: "10:00 AM"
        },
        {
          fecha: "",
          nombre: "",
          dia: "",
          hora: ""
        },
        {
          fecha: "",
          nombre: "",
          dia: "",
          hora: ""
        },
        {
          fecha: "",
          nombre: "",
          dia: "",
          hora: ""
        },
        {
          fecha: "",
          nombre: "",
          dia: "",
          hora: ""
        },
        {
          fecha: "",
          nombre: "",
          dia: "",
          hora: ""
        }
      ],
      index:0,
      tabs:["Servicio", "PSICOLOGOS", "MEMORIAL", "EMISORA", "INFORMACION DE INTERES"],
      items: [
        {
          src: require("@/assets/duelo.png")
        },
        {
          src: require("@/assets/jardinespagina.png")
        },
        {
          src: require("@/assets/jardinespagina.png")
        },
        {
          src: require("@/assets/jardinespagina.png")
        }
      ]
    };
  },
  methods: {
    selectTabs(index){
      this.index = index
    }
  },
  computed: {
    pages() {
      if (
        this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      )
        return 0;

      return Math.ceil(
        this.pagination.totalItems / this.pagination.rowsPerPage
      );
    }
  },
};
</script>
<style>
.contenedor {
  width: 100%;
  margin: 0;
  overflow: hidden;
}
.lidecoration {
  list-style: decimal;
}
.lidecoration1 {
  list-style: initial;
}
.positionbtn {
  margin-top: 30px;
  margin-right: 45px;
  margin-bottom: 35px;
}
.column-6 {
  float: left;
  width: 33.33333%;
  padding: 10px;
}
.widthtotal {
  width: 90% !important;
}

.e-card-horizontal {
  border: solid 1px;
  border-color: #e8ac09 !important;
  border-radius: 1px;
}

.column-334 {
  display: inline-block;
  width: 25%;
  padding: 15px 0;
}

.enlaces a{
text-align: center;
}
/* Margen Unidad Duelo */
.margenU{
  margin: 0 5rem;
  /* Psicologos */
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.container1 {
  padding: 30px;
}
.imagen {
  width: auto !important;
  height: 220px !important;
  border-radius: 10px !important;
  margin-bottom: 8px !important;
}
.fboton {
  color: #333333 !important;
  margin-bottom: 12px;
  border-radius: 30px;
  background-color: #12a19b !important;
  background-image: -webkit-linear-gradient(top, #12a19b, #999999);
  background-image: -moz-linear-gradient(top, #12a19b, #999999);
  background-image: -ms-linear-gradient(top, #12a19b, #999999);
  background-image: -o-linear-gradient(top, #12a19b, #999999);
  background-image: linear-gradient(to bottom, #12a19b, #999999);
}
.fboton:hover {
  background-color: #666666 !important;
  background-image: -webkit-linear-gradient(top, #999999, #12a19b);
  background-image: -moz-linear-gradient(top, #999999, #12a19b);
  background-image: -ms-linear-gradient(top, #999999, #12a19b);
  background-image: -o-linear-gradient(top, #999999, #12a19b);
  background-image: linear-gradient(to bottom, #999999, #12a19b);
}

.row:after {
  content: "";
  display: table;
  clear: both;
}
.column-66 {
  float: left;
  width: 66.66666%;
  padding: 11px;
}
.column-33 {
  float: left;
  width: 33.33333%;
  margin-top: 35px;
}
.column-333-5 {
  display: inline-block;
  width: 50%;
  padding: 15px;
}
.column-3333 {
  display: inline-block;
  width: 30%;
  padding: 13px;
}
.h1text {
  color: #666666;
  font-size: 23px;
}
.h1text:hover {
  color: #12a19b !important;
}
.large-font {
  font-size: 40px;
  text-align: center;
}
.xlarge-font {
  font-size: 64px;
}
img {
  display: block;
  height: auto;
  max-width: 100%;
  height: 100%;
}
.card-estilo {
  border: solid 1px;
  border-color: #e8ac09 !important;
  border-radius: 30px;
}
.grow:hover {
  transform: scale(1.02);
}
.slider{
  /* width: 857px !important; */
  width:88%;
  height: 302px !important;
  border-radius: 10px;
}
.imgslider{
  height: 302px;
}

p{
  color: #70706e;
}
.cardsInfoUs{
  width: 80rem;
}
/* CardPsicologos */
.cardsPs{
  display: flex;
  justify-content: center;
}
.cardPs {
  margin: 30px;
  display: flex;
  width: 230px;
  height: 294px;
  outline: .5em solid #cbedd7;
  background: linear-gradient(to top, #009b7d 0%, #ffff 100%);
  transition: opacity 0.3s;
  position: relative;
  overflow: hidden;
  color: var(--maindark);
  border-radius: 8px;
  animation: appear16123 0.3s linear forwards;
}
.card-avatar{
  margin-left: 18px;
  width: 72%;
  position: absolute;
  background: url("../assets/adriana.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 12rem;
  border-radius: 100px;
  transition: transform 1s cubic-bezier(0.785, 0.135, 0.150, 0.860);
}
.card-avatar1{
  margin-left: 18px;
  width: 72%;
  position: absolute;
  background: url("../assets/ruby.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 12rem;
  border-radius: 100px;
  transition: transform 1s cubic-bezier(0.785, 0.135, 0.150, 0.860);
}
.card-avatar:hover {
  transform: scale(1.1);
}
.cardPs::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 4;
  background-color: rgba(80, 64, 44, 0);
  transition: background-color 1s;
}

.cardPs-info {
  bottom: 0;
  position: absolute;
  width: 100%;
  padding: 1.5em;
  text-align: center;
  padding-right: 45px;
  transition: transform 1s cubic-bezier(0.785, 0.135, 0.150, 0.860);
}

.cardP-bio {
  margin-bottom: 21rem;
  text-align: center;
  transform: translate(120%,40%);
  transition: transform 1s cubic-bezier(0.785, 0.135, 0.150, 0.860);
}

.cardP-bio p {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5em;
}


/*Text*/
.titleP {
  font-size: 1.3em;
  font-weight: bold;
  }

.titleP::after {
  content: "";
  display: block;
  width: 50%;
  height: 2px;
  margin: 0 auto 4%;
  background-color: #000;
}

.subtitleP {
  font-weight: 400;
  line-height: 1em;
}
/*Hover*/
.cardPs:hover::before {
  background-color: rgba(80, 64, 44, 0.25);
}

.cardPs:hover .cardP-info {
  transform: translateX(-100%);
}
.cardPs:hover .card-avatar, .cardPs:hover .card-avatar1{
  transform: translateX(-150%);
}

.cardPs:hover .cardP-bio  {
  transform: translate(0,40%);
  opacity: 1;
}


/* Emisora */
.positionbtn {
  margin-right: 45px;
  margin-bottom: 45px;
}
.container2 {
  padding: 40px;
}
.tabla {
  border-left: solid 1px;
  border-top: solid 1px;
  border-color: #12a19b;
}
.tabla1 {
  border-right: solid 1px;
  border-color: #12a19b;
}
.lidecoration {
  list-style: decimal;
}
@media screen and (max-width: 1000px) {
  .column-6 {
    width: 103%;
    text-align: center;
  }
  .img {
    margin: auto;
  }
  .widthtotal {
    width: none;
  }
  .column-66,
  .column-33 {
    width: 100%;
    text-align: center;
  }
  .column-3333 {
    width: 88%;
    text-align: center;
  }
  img {
    margin: auto;
  }
  .slider{
    display: none;
  }
  .cardsP{
    flex-direction: column;
    align-items: center;
  }
}
</style>
