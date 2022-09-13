<template>
  <div>
    <v-layout style="width: 85%!important">
      <v-img class="img" :src="require('@/assets/informacion1.png')"></v-img>
    </v-layout>
    <div>


    <!-- QUIÉNES SOMOS -->

    <br>
    <br>

      <div class="row ">
        <div class="column-6">
          <v-card class="img2 borde" to="Memorial-del-a!o2019">
            <v-img
              :src="require('@/assets/infointeres/memorialaño.png')"
              :lazy-src="require('@/assets/infointeres/memorialaño.png')"
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
          <v-card class="img2 borde" to="Memorial-del-mes">
            <v-img
              :src="require('@/assets/infointeres/memorialmes.png')"
              :lazy-src="require('@/assets/infointeres/memorialmes.png')"
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
          <v-card class="img2 borde" to="Info-Previa-al-Fallecimiento">
            <v-img
              :src="require('@/assets/infointeres/infoprevfallecimiento.png')"
              :lazy-src="require('@/assets/infointeres/infoprevfallecimiento.png')"
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
      <div class="row ">
        <div class="column-6">
          <v-card class="img2 borde" to="Info-Posterior-al-Fallecimiento">
            <v-img
              :src="require('@/assets/infointeres/infopostfallecimiento.png')"
              :lazy-src="require('@/assets/infointeres/infopostfallecimiento.png')"
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
          <v-card class="img2 borde" to="Exhumaciones-del-Mes">
            <v-img
              :src="require('@/assets/infointeres/progdeexhumaciones.png')"
              :lazy-src="require('@/assets/infointeres/progdeexhumaciones.png')"
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
          <v-card class="img2 borde">
            <v-carousel interval="4500" style="height: auto" hide-delimiters hide-controls>
              <v-carousel-item style="max-width: 378px; max-height: 230px" v-for="(item1,i) in items1" :key="i" :src="item1.src"></v-carousel-item>
            </v-carousel>
          </v-card>
        </div>
      </div>
      <br>
      <br>
      <br>
    </div>   
  </div>
</template>

<script>
export default {
  data() {
    return {
      items1: [
        {
          src: require("@/assets/infointeres/horarioseucaristiasp.png")
        },
        {
          src: require("@/assets/capilla4.png")
        },
        {
          src: require("@/assets/capilla2.png")
        },
        {
          src: require("@/assets/infointeres/horarioseucaristias.png")
        }
      ]
    };
  }
};
</script>

<style>
.column-6 {
  float: left;
  width: 33.33333%;
  padding: 10px;
}
.img {
  border-radius: 10px;
}
.img2 {
  width: 380px !important;
  height: auto !important;
  border-radius: 10px !important;
  margin-bottom: 8px !important;
}
.img2:hover {
  transform: scale(1.02);
  -webkit-box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.36);
  -moz-box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.36);
  box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.36);
}

.borde {
  border: solid 1px #e8ac09 !important;
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

}
</style>
