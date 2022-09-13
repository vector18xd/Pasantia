<template>
  <div>
    <!-- INFO SOBRE PLANES DE PREVISION EXEQUIAL -->
    <div>
      <h1 class="large-font" style="color:#12A19B;">
        <h4>Títulos de Previsión Exequial</h4>
      </h1>
    </div>
    <br>
    <v-layout style="width: 85%!important;">
      <v-img class="img" :src="require('@/assets/planes.png')"></v-img>
    </v-layout>
    <div class="container">
      <p align="center" style="font-size: 18px; color:#70706e">
        <span>XXXXXX......</span>
      </p>
      <br>
      <p
        align="justify"
        style="font-size: 18px"
      >Entre nuestros planes de previsión exequial ofrecemos:</p>
      <ul align="justify" style="font-size: 18px">
        <li class="lidecoration">Preservación y traslado del cuerpo.</li>
        <li class="lidecoration">Trámites legales.</li>
        <li class="lidecoration">Cofre.</li>
        <li
          class="lidecoration"
        >Velación por 24 horas "Salas de velación Espíritu Santo" las de más tradición en la ciudad.</li>
        <li class="lidecoration">Carteles de invitación.</li>
        <li class="lidecoration">Arreglo Floral.</li>
        <li class="lidecoration">Misa exequial.</li>
        <li
          class="lidecoration"
        >Kit funerario (Velones, libro de registro de asistentes, libro de oraciones, denario, bolsa, separadores de agradecimiento para acompañantes y bono de apoyo psicológico en nuestra Unidad de Duelo).</li>
        <li class="lidecoration">Autobús para acompañantes.</li>
        <li class="lidecoration">Carroza fúnebre.</li>
        <li class="lidecoration">Cinta con el nombre del ser querido.</li>
        <li
          class="lidecoration"
        >Destino final: Inhumación por 4 años en jardines exclusivos o cremación con urna.</li>
        <li class="lidecoration">Cobertura a nivel nacional.</li>
        <li class="lidecoration">Traslado terrestre nacional.</li>
        <li class="lidecoration">
          Servicios adicionales:
          <ul>
            <li class="lidecoration1">Servicio de cremación para mascotas.</li>
            <li class="lidecoration1">Servicio de repatriación.</li>
            <li class="lidecoration1">Seguros de vida.</li>
            <li class="lidecoration1">Servicios de descentos en salud, recreación y turismo.</li>
          </ul>
        </li>
      </ul>
    </div>
    <div>
      <h1 class="large-font" style="color:#12A19B;">ALGUNOS DE NUESTROS CLIENTES</h1>
    </div>

    <!-- SLIDER CLIENTES -->
    <div>
      <br>
      <div class="contenedor">
        <div id="slider"></div>
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
  
};
</script>

<style>
body{
  margin: 0;
}
.contenedor{
  width: 100%;
  margin: auto;
  overflow:hidden;
}
#slider{
  width: 2000px;
  height: 200px;
  background-image: url(../assets/clientes/clientes.png);
  background-size: 100% 100%;
  animation: slider 40s infinite linear;
  background-repeat: repeat;
}
.img {
  border-radius: 10px;
}
.lidecoration {
  list-style: decimal;
  color: #70706e;
}
.lidecoration1 {
  list-style: initial;
  color: #70706e;
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

@keyframes slider {
  to{
    background-position: 2000px;
  }
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
