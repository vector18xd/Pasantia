<template>
  <div>

    <div>
      <h1 class="large-font" style="color:#12A19B;">
        <b>Jardín Hibiscus</b>
      </h1>
    </div>

    <!-- INHUMACION PARQUE CEMENTERIO -->
    <br>
    <v-layout style="width: 95%!important">
      <v-img class="img" :src="require('@/assets/Sectores/sector10.jpg')"></v-img>
    </v-layout>
    
    <div class="text-xs-right">
    <v-btn class="fboton elevation-8 positionbtn" to="Servicio_Inhumacion">
        <strong>REGRESAR</strong>
    </v-btn>
    </div>
  </div>  
</template>

<script>
</script>

<style>
.container2{
  padding: 40px;  
}
.ancho{
  float: left;
  margin-left: 143px;
}
.textul{
  font-size: 20px;
}

.img {
  border-radius: 10px;
}
.img:hover {
  -webkit-box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.41);
  -moz-box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.41);
  box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.41);
}
.positionbtn{
 margin-right: 45px;
 margin-bottom: 45px;
}
@media screen and (max-width: 1000px) {
.ancho{
   margin-left: 80px;
}
}

</style>
