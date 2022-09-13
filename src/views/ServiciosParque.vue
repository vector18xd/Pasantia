<template>
  <div>
   
   <!-- SERVICIOS PARQUE CEMENTERIO -->
    <div >
      <h1 class="large-font" style="color:#12A19B;">
        <h4>Servicios Parque Cementerio</h4>
      </h1>
      <p style="font-size: 24px; color: #666">
        <span>Entre nuestros servicios podrá contar con:</span>
      </p>
     
    </div>

    <br>
    <br>

    <!-- CARDS SERVICIOS -->
    <div>
      <div class="row">
        <div class="column-6">
          <v-card class="img2 borde" to="Servicio_Inhumacion">
            <v-img
              :src="require('@/assets/infointeres/inhumacion.png')"
              :lazy-src="require('@/assets/infointeres/inhumacion.png')"
            >
              <template v-slot:placeholder>
                <v-layout fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </template>
            </v-img>
          </v-card>
        </div>
        <div class="column-6">
          <v-card class="img2 borde" to="servicio_Cremacion">
            <v-img
              :src="require('@/assets/infointeres/cremacion.png')"
              :lazy-src="require('@/assets/infointeres/cremacion.png')"
            >
              <template v-slot:placeholder>
                <v-layout fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </template>
            </v-img>
          </v-card>
        </div>
        <div class="column-6">
          <v-card class="img2 borde" to="servicio_Exhumacion">
            <v-img
              :src="require('@/assets/infointeres/exhumacion.png')"
              :lazy-src="require('@/assets/infointeres/exhumacion.png')"
            >
              <template v-slot:placeholder>
                <v-layout fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </template>
            </v-img>
          </v-card>
        </div>
      </div>
      <div class="row">
        <div class="column-6">
          <v-card class="img2 borde" to="Capilla_celebracion_SantaMisa">
            <v-img
              :src="require('@/assets/infointeres/capillacelebracionsantamisa.png')"
              :lazy-src="require('@/assets/infointeres/capillacelebracionsantamisa.png')"
            >
              <template v-slot:placeholder>
                <v-layout fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </template>
            </v-img>
          </v-card>
        </div>
        <div class="column-6">
          <v-card class="img2 borde" to="Servicio_Capellania">
            <v-img
              :src="require('@/assets/infointeres/serviciodecapellania.png')"
              :lazy-src="require('@/assets/infointeres/serviciodecapellania.png')"
            >
              <template v-slot:placeholder>
                <v-layout fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </template>
            </v-img>
          </v-card>
        </div>
        <div class="column-6">
          <v-card class="img2 borde" to="Servicio_Laboratorio-tanatopraxia">
            <v-img
              :src="require('@/assets/infointeres/laboratoriotanatopraxia.png')"
              :lazy-src="require('@/assets/infointeres/laboratoriotanatopraxia.png')"
            >
              <template v-slot:placeholder>
                <v-layout fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </template>
            </v-img>
          </v-card>
        </div>
      </div>
      <div class="row">
        <div class="column-67">
          <v-card class="img2 borde" to="Servicio-de-Cava">
            <v-img
              :src="require('@/assets/infointeres/sericiodecava.png')"
              :lazy-src="require('@/assets/infointeres/sericiodecava.png')"
            >
              <template v-slot:placeholder>
                <v-layout fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </template>
            </v-img>
          </v-card>
        </div>
      </div>
    </div>
    <div class="container2">
      <p align="justify" style="font-size: 18px; color: #666;">
        <span>Además contamos con cafetería, servicio de baño, amplias zonas y bahias de parqueo y personal calificado para asegurarle una excelente atención a usted y su familia.</span>
      </p>
    </div>
    <div class="text-xs-right">
    <v-btn class="fboton elevation-8 positionbtn" to="productsandservices">
        <strong>REGRESAR</strong>
    </v-btn>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.column-6 {
  float: left;
  width: 33.33333%;
  padding: 10px;
}

.column-67 {
  float: center;
  width: 33.33333%;
  padding: 10px;
}

.container2{
   padding: 20px;
    width: 85%;
}
.img2 {
  width: 380px !important;
  height: auto !important;
  border-radius: 10px !important;
  margin-bottom: 8px !important;
}
.img2:hover{
  transform: scale(1.02);
  -webkit-box-shadow: 0px 0px 16px 1px rgba(0,0,0,0.36);
  -moz-box-shadow: 0px 0px 16px 1px rgba(0,0,0,0.36);
  box-shadow: 0px 0px 16px 1px rgba(0,0,0,0.36);
}
.positionbtn{
 margin-right: 45px;
 margin-bottom: 45px;
}
.widthCard {
  width: 90% !important;
}
.borde{ 
    border: solid 1px #E8AC09 !important;
}
@media screen and (max-width: 1000px) {
  .column-6 {
    width: 103%;
    text-align: center;
  }
  .img {
    margin: auto;
  }
  .img2 {
    margin: auto;
    width: 350px !important;
    height: auto !important;
  }
  .widthCard {
    width: none;
  }
}
</style>
