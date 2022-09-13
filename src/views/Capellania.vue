<template>
  <div>

      <div>
      <h1 class="large-font" style="color:#12A19B;">
        <h4>Servicio de Capellanía</h4>
      </h1>
    </div>

    <br>

     <v-carousel interval="4500" style="width: 93%!important" hide-controls>
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>

    <!-- CAPILLA PARQUE CEMENTERIO -->
    <div class="container2">
      <div class="row">
          <br>
          <p align="justify">
             <span>X................................<br>X............................</span>
          </p>
      </div>
    </div>
    <div class="text-xs-right">
    <v-btn class="fboton elevation-8 positionbtn" to="ServiciosParque">
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
          src: require("@/assets/capilla4.png")
        },
        {
          src: require("@/assets/capilla1.png")
        },
        {
          src: require("@/assets/capilla2.png")
        },
        {
          src: require("@/assets/capilla3.png")
        }
      ]
    };
  }
};
</script>

<style>
.container2{
  padding: 40px;  
}
.positionbtn{
 margin-right: 45px;
 margin-bottom: 45px;
}

</style>
