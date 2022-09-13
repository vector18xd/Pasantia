<template>
  <div>
    <!-- PLANES DE PREVISION -->
    <div>
      <h1 class="large-font" style="color:#12A19B;">
        <h4>Nuestros Planes de Previsión exequial</h4>
      </h1>
    </div>

    <br>

    <div>
      <v-carousel interval="4500" class="slider" hide-delimiters>
        <v-carousel-item
          class="imgslider" v-for="(item,i) in items" :key="i" :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </div>

    <div class="text-xs-right">
      <v-btn class="fboton elevation-8 positionbtn" to="Planes-prevision_info">
        <strong>SABER MAS</strong>
      </v-btn>
    </div>

    <div>
      <h4 class="large-font" style="color:#12a19b;">Alianzas Y Coberturas</h4>
    </div>

    <br>

    <div>
      <div class="row widthCard">
        <div class="column-6">
          <v-hover>
            <v-card slot-scope="{ hover }" class="img2" color="transparent">
              <v-img
                :src="require('@/assets/fasilicimo.png')"
                :lazy-src="require('@/assets/fasilicimo.png')"
              >
                <template v-slot:placeholder>
                  <v-layout fill-height align-center justify-center ma-0>
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-layout>
                </template>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out teal darken-2 v-card--reveal white--text estilohover" style="font-size: 16px;"
                  >Todas las personas que estén vinculadas a un plan de previsión exequial, podrán pagar sus cuotas en cualquier punto Facilísimo a nivel nacional.</div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </div>
        <div class="column-6">
          <v-hover>
            <v-card slot-scope="{ hover }" class="img2" color="transparent">
              <v-img :src="require('@/assets/finsa.png')" :lazy-src="require('@/assets/finsa.png')">
                <template v-slot:placeholder>
                  <v-layout fill-height align-center justify-center ma-0>
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-layout>
                </template>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out teal darken-2 v-card--reveal white--text estilohover" style="font-size: 16px"
                  >Repatriamos el cuerpo de un ser querido desde cualquier parte del mundo excepto países en guerra.</div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </div>
        <div class="column-6">
          <v-hover>
            <v-card slot-scope="{ hover }" class="img2" color="transparent">
              <v-img
                :src="require('@/assets/redexequialo.png')"
                :lazy-src="require('@/assets/redexequialo.png')"
              >
                <template v-slot:placeholder>
                  <v-layout fill-height align-center justify-center ma-0>
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-layout>
                </template>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out teal darken-2 v-card--reveal white--text estilohover" style="font-size: 16px"
                  >Estamos vinculados a la Red Exequial de Colombia, la cual se encarga de hacer cumplir los estándares de calidad y de servicio.</div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </div>
      </div>
      <div class="row widthCard">
        <div class="column-6">
          <v-hover>
            <v-card slot-scope="{ hover }" class="img2" color="transparent">
              <v-img
                :src="require('@/assets/asomavi.png')"
                :lazy-src="require('@/assets/asomavi.png')"
              >
                <template v-slot:placeholder>
                  <v-layout fill-height align-center justify-center ma-0>
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-layout>
                </template>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out teal darken-2 v-card--reveal white--text estilohover" style="font-size: 16px"
                  >Con ASOMAVI todas las personas que estén vinculadas a un plan de previsión exequial, podrán obtener descuentos y beneficios especiales en servicios de salud, recreación y turismo.</div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </div>
        <div class="column-6">
          <v-hover>
            <v-card slot-scope="{ hover }" class="img2" color="transparent">
              <v-img
                :src="require('@/assets/huellita.png')"
                :lazy-src="require('@/assets/huellita.png')"
              >
                <template v-slot:placeholder>
                  <v-layout fill-height align-center justify-center ma-0>
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-layout>
                </template>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out teal darken-2 v-card--reveal white--text estilohover" style="font-size: 16px"
                  >En alianza con Huellitas en el Cielo, contamos con servicios funerarios para su mascota.</div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </div>
        <div class="column-6">
          <v-hover>
            <v-card slot-scope="{ hover }" class="img2" color="transparent">
              <v-img
                :src="require('@/assets/Colmena.png')"
                :lazy-src="require('@/assets/Colmena.png')"
              >
                <template v-slot:placeholder>
                  <v-layout fill-height align-center justify-center ma-0>
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-layout>
                </template>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out teal darken-2 v-card--reveal white--text estilohover" style="font-size: 16px"
                  >Brindamos un seguro de vida para el titular o beneficiario de hasta $ 3,000.000 por causa de muerte, incapacidad y desmembración.</div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
            <br>
            <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("@/assets/planes/aleli.png")
        },
        {
          src: require("@/assets/planes/plantraslado1.png")
        },
        {
          src: require("@/assets/planes/planmargarita1.png")
        },
        {
          src: require("@/assets/planes/planparroquias1.png")
        },
        {
          src: require("@/assets/planes/plangardenia.png")
        }
      ]
    };
  }
};
</script>

<style>
.positionbtn {
  margin-right: 45px;
  margin-bottom: 30px;
  margin-top: 25px;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.87;
  position: absolute;
  width: 100%;
}
.estilohover {
  height: 100%;
  font-size: 18px;
}
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
  margin-bottom: 8px !important;
}
.img2:hover {
  transform: scale(1.02);
  -webkit-box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.36);
  -moz-box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.36);
  box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.36);
}
.positionbtn {
  margin-right: 45px;
  margin-bottom: 45px;
}
.widthCard {
  width: 90% !important;
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
