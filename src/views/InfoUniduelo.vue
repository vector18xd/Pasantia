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

        <div class="column-50">
          <br />
          <br />
          <p align=" justify">
            <p style="font-size:18px">
              Brindar acompañamiento psicosocial y espiritual a las personas en
              situación de duelo por muerte de un ser querido, orientado a
              mitigar el impacto emocional, desde una intervención integral del
              ser humano, con un equipo interdisciplinario de sacerdotes,
              psicólogos y agentes de pastoral de duelo.</p>
  
          <p align="left">
            <br />
            <h4 style="color:#12A19B; font-size:20px">POBLACIÓN OBJETO</h4>
            <br />
            <p  style="font-size:18px"
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

      <v-tabs
        style="width: 68%"
        color="transparent"
        slider-color="#12A19B"
        grow
        show-arrows
        v-model="model"
        class="hidden-sm-and-down"
      >
        <v-tab to="/">Inicio</v-tab> 

        <v-tab to="/Psicologos">Psicologos</v-tab>

        <v-tab to="/Memorial">Memorial</v-tab>

        <v-tab to="/Emisora">Emisora</v-tab>

        <v-tab to="/InformacionInteres">Informacion de interes</v-tab>

      </v-tabs>

      <br>
      <br>
      
    <!-- CARDS  -->
    <div>
      <h4 align="center" style="font-size: 25px; color:#12A19B">
        <span> Información según el tipo de usuario<br /> </span>
      </h4>
      <div class="row">
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

    <div class="text-xs-right">
      <v-btn class="fboton elevation-8 positionbtn" to="productsandservices">
        <strong>REGRESAR</strong>
      </v-btn>
    </div>    
  </div>
</template>
<script>

export default {
  data() {
    return {
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
  }
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
}
</style>
