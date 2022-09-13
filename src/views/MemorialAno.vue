<template>
  <div>
    <div>
      <h1 class="large-font" style="color:#12A19B;">
        <h4>Memorial a Realizar en el Año</h4>
      </h1>
      <p style="font-size: 26px; color:#666666">
        <span><p>En homenaje a nuestros seres queridos que han partido a la casa del Padre.</p></span>
      </p>
    </div>

    <!-- MEMORIAL PARQUE CEMENTERIO -->

    <div style="width: 75%">
      <v-img :src="require('@/assets/infointeres/memorial1.png')" style="border-radius: 10px"></v-img>
      <v-img :src="require('@/assets/infointeres/memorial2.png')" style="border-radius: 10px"></v-img>
    </div>

    <div class="text-xs-right">
      <v-btn class="fboton elevation-8 positionbtn" to="Information">
        <strong>REGRESAR</strong>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>

<style>
.positionbtn {
  margin-right: 45px;
  margin-bottom: 45px;
}
</style>
