<template>
  <div>

    <div>
      <h1 class="large-font" style="color:#12A19B;">
        <h4>Servicio de Inhumación</h4>
      </h1>
    </div>
    
     <v-carousel interval="4500"  class="slider" hide-controls>
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>

    <br>


    <!-- INHUMACION PARQUE CEMENTERIO -->

    <div>
      <br>
      <h1 class="large-font" style="color:#12A19B;">
        <h4>Sectores Para Inhumación Del Parque Cementerio</h4>
      </h1>
    </div>
    <br>
    <v-layout style="width: 85%!important">
      <v-img class="img" :src="require('@/assets/mapa.png')"></v-img>
    </v-layout>

    <!-- SECTORES -->
    
    <div>
      <div class="row">
          <p align="justify">
              <ul class="textul ancho">
              <a href="Sector_Achiras" class="texta"><li><img class="liimagen" src="../assets/logojardinesarmenia.png">Jardín achiras</li></a>
              <a href="Sector_Anturios" class="texta"><li><img class="liimagen" src="../assets/logojardinesarmenia.png">Jardín anturios</li></a>
              <a href="Sector_Azaleas" class="texta"><li><img class="liimagen" src="../assets/logojardinesarmenia.png">Jardín azaleas</li></a>
              <a href="Sector_Calendulas" class="texta"><li><img class="liimagen" src="../assets/logojardinesarmenia.png">Jardín calendulas</li></a>
              <a href="Sector_EspinaDe_Cristo" class="texta"><li><img class="liimagen" src="../assets/logojardinesarmenia.png">Jardín espina de Cristo</li></a>
              <a href="Sector_Lirios" class="texta"><li><img class="liimagen" src="../assets/logojardinesarmenia.png">Jardín lirios</li></a>
              <a href="Sector_Alelies" class="texta"><li><img class="liimagen" src="../assets/logojardinesarmenia.png">Jardín alelíes</li></a>
            </ul>
            <ul class="textul ancho">
              <a href="Sector_Ginger" class="texta"><li><img class="liimagen" src="../assets/logojardinesarmenia.png">Jardín ginger</li></a>
              <a href="Sector_Heliconias" class="texta"><li><img class="liimagen" src="../assets/logojardinesarmenia.png">Jardín heliconias</li></a>
              <a href="Sector_Hibiscus" class="texta"><li><img class="liimagen" src="../assets/logojardinesarmenia.png">Jardín hibiscus</li></a>
              <a href="Sector_Hortensias" class="texta"><li><img class="liimagen" src="../assets/logojardinesarmenia.png">Jardín hortensias</li></a>
              <a href="Sector_Lantanas" class="texta"><li><img class="liimagen" src="../assets/logojardinesarmenia.png">Jardín lantanas</li></a>
              <a href="Sector_Rosas" class="texta"><li><img class="liimagen" src="../assets/logojardinesarmenia.png">Jardín rosas</li></a>
              <a href="Sector_Toscanas" class="texta"><li><img class="liimagen" src="../assets/logojardinesarmenia.png">Jardín toscanas</li></a>
            </ul>
            <ul class="textul ancho">
              <a href="Sector_Orquideas" class="texta"><li><img class="liimagen" src="../assets/logojardinesarmenia.png">Jardín orquídeas</li></a>
              <a href="Sector_Veraneras" class="texta"><li><img class="liimagen" src="../assets/logojardinesarmenia.png">Jardín veraneras</li></a>
              <a href="Sector_Camelias" class="texta"><li><img class="liimagen" src="../assets/logojardinesarmenia.png">Jardín camelias</li></a>
              <a href="Sector_Vincas" class="texta"><li><img class="liimagen" src="../assets/logojardinesarmenia.png">Jardín vincas</li></a>
              <a href="Sector_Girasoles" class="texta"><li><img class="liimagen" src="../assets/logojardinesarmenia.png">Jardín girasoles</li></a>
              <a href="Sector_Margaritas" class="texta"><li><img class="liimagen" src="../assets/logojardinesarmenia.png">Jardín margaritas</li></a>
              <a href="Sector_Gardenias" class="texta"><li><img class="liimagen" src="../assets/logojardinesarmenia.png">Jardín gardenias</li></a>
            </ul>
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
          src: require("@/assets/jardinespagina.png")
        },
        {
          src: require("@/assets/jardinespagina.png")
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
.container2{
  padding: 40px;  
}
.texta{
  text-decoration: none !important;
  color: #333333 !important;
}
.texta:hover{
  text-decoration: underline !important;
}
.ancho{
  float: left;
  margin-top: 20px;
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
