<template>
  <div>
    <!-- SERVICIOS PARQUE CEMENTERIO -->
    <div>
      <h1 class="large-font" style="color:#12A19B;">
        <h4>Puntos de Pago</h4>
      </h1>
    </div>

    <br>

    <!-- CARDS SERVICIOS -->
    <div>
      <div class="row ">
        <div class="column-6">
          <v-card class="img2 borde">
            <v-card-tittle>
              <div class="texttittle">
                <p class="text-xs-center">
                  <h5>Sala de Velación</h5>
              </div>
            </v-card-tittle>
            <v-img
              :src="require('@/assets/salavelacionc.png')"
              :lazy-src="require('@/assets/salavelacionc.png')"
              aspect-ratio="1.9" style="border-radius: 10px;"
            >
              <template v-slot:placeholder>
                <v-layout fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </template>
            </v-img>
            <v-card-actions></v-card-actions>
          </v-card>
        </div>
        <div class="column-6">
          <v-card class="img2 borde">
            <v-card-tittle>
              <div class="texttittle">
                <p class="text-xs-center">
                  <h5>Oficina Principal</h5>
              </div>
            </v-card-tittle>
            <v-img
              :src="require('@/assets/admin.png')"
              :lazy-src="require('@/assets/admin.png')"
              aspect-ratio="1.9" style="border-radius: 10px;"
            >
              <template v-slot:placeholder>
                <v-layout fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </template>
            </v-img>
            <v-card-actions></v-card-actions>
          </v-card>
        </div>
        <div class="column-6">
          <v-card class="img2 borde">
            <v-card-tittle>
              <div class="texttittle">
                <p class="text-xs-center">
                  <h5>Parque Cementerio</h5>
              </div>
            </v-card-tittle>
            <v-img
              :src="require('@/assets/elegirnos.png')"
              :lazy-src="require('@/assets/elegirnos.png')"
              aspect-ratio="1.9" style="border-radius: 10px;"
            >
              <template v-slot:placeholder>
                <v-layout fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </template>
            </v-img>
            <v-card-actions></v-card-actions>
          </v-card>
        </div>
      </div>
      <div class="row ">
       <div class="column-6">
          <v-card class="img2 borde">
            <v-card-tittle>
              <div class="texttittle">
                <p class="text-xs-center">
                  <h5>Facilísimo</h5>
              </div>
            </v-card-tittle>
            <v-img
              :src="require('@/assets/fasilicimo.png')"
              :lazy-src="require('@/assets/fasilicimo.png')"
              aspect-ratio="1.9"
            >
              <template v-slot:placeholder>
                <v-layout fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </template>
            </v-img>
            <v-card-actions></v-card-actions>
          </v-card>
        </div>
        <div class="column-6">
          <v-card class="img2 borde">
            <v-card-tittle>
              <div class="texttittle">
                <p class="text-xs-center">
                  <h5>Super Inter</h5>
              </div>
            </v-card-tittle>
            <v-img
              :src="require('@/assets/clientes/superinter.png')"
              :lazy-src="require('@/assets/clientes/superinter.png')"
              aspect-ratio="1.9"
            >
              <template v-slot:placeholder>
                <v-layout fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </template>
            </v-img>
            <v-card-actions></v-card-actions>
          </v-card>
        </div>
        <div class="column-6">
          <v-card class="img2 borde">
            <v-card-tittle>
              <div class="texttittle">
                <p class="text-xs-center">
                  <h5>Éxito</h5>
              </div>
            </v-card-tittle>
            <v-img
              :src="require('@/assets/clientes/exito.png')"
              :lazy-src="require('@/assets/clientes/exito.png')"
              aspect-ratio="1.9"
            >
              <template v-slot:placeholder>
                <v-layout fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </template>
            </v-img>
            <v-card-actions></v-card-actions>
          </v-card>
        </div>
      </div>
      <div class="row">
        <div class="column-6">
          <v-card class="img2 borde">
            <v-card-tittle>
              <div class="texttittle">
                <p class="text-xs-center">
                  <h5>Carulla</h5>
              </div>
            </v-card-tittle>
            <v-img
              :src="require('@/assets/clientes/carulla.png')"
              :lazy-src="require('@/assets/clientes/carulla.png')"
              aspect-ratio="1.9"
            >
              <template v-slot:placeholder>
                <v-layout fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </template>
            </v-img>
            <v-card-actions></v-card-actions>
          </v-card>
        </div>
        <div class="column-6">
          <v-card class="img2 borde">
            <v-card-tittle>
              <div class="texttittle">
                <p class="text-xs-center">
                  <h5>Surtimax</h5>
              </div>
            </v-card-tittle>
            <v-img
              :src="require('@/assets/clientes/surtimax.png')"
              :lazy-src="require('@/assets/clientes/surtimax.png')"
              aspect-ratio="1.9"
            >
              <template v-slot:placeholder>
                <v-layout fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </template>
            </v-img>
            <v-card-actions></v-card-actions>
          </v-card>
        </div>
        <div class="column-6">
          <v-card class="img2 borde">
            <v-card-tittle>
              <div class="texttittle">
                <p class="text-xs-center">
                  <h5>Baloto</h5>
              </div>
            </v-card-tittle>
            <v-img
              :src="require('@/assets/clientes/Baloto.png')"
              :lazy-src="require('@/assets/clientes/Baloto.png')"
              aspect-ratio="1.9"
            >
              <template v-slot:placeholder>
                <v-layout fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </template>
            </v-img>
            <v-card-actions></v-card-actions>
          </v-card>
          <br>
        </div>
      </div>
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
.container2 {
  padding: 20px;
  width: 85%;
}
.img2 {
  width: 380px !important;
  height: auto !important;
  border-radius: 10px !important;
  margin-bottom: 10px !important;
}
.img2:hover {
  transform: scale(1.02);
  -webkit-box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.36);
  -moz-box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.36);
  box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.36);
}
.texttittle {
  padding: 5px;
  color: #12a19b;
  font-size: 30px;
}
.widthCard {
  width: 90% !important;
}
.borde {
  border: solid 1px #e8ac09 !important;
}

h5{
  color: #70706e;
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
