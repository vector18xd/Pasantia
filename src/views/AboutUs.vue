<template>

<div>
    <v-layout style="width: 85%" >
    <v-img class="img" :src="require('@/assets/quienessomos.png')"></v-img>
  </v-layout>
  
    <!-- QUIÉNES SOMOS -->
    <div class="container">
      <h1 class="large-font" style="color:#12A19B;">
        <h4>Quiénes Somos</h4>
      </h1>

      <br>

      <p align=" justify" style="font-size: 16px">
        <span>La Fundación Parque Cementerio Jardines de Armenia, con mas de 40 años de experiencia en servicios funerarios es una entidad de la diócesis de Armenia, tiene como MISIÓN u OBJETO SOCIAL, la misión de la iglesia: La Evangelización, desde su ser de empresa de servicios funerarios, previsión exequial, salas de velación, parque cementerio.</span>
      </p>
      <p align=" justify" style="font-size: 16px">
        <span>Por esta razón nuestro próposito es la prestación de servicios funerarios con el diferencial de ser servicio integral con los siguientes componentes: Calidez humana, acompañmiento espiritual, pastoral de la consolación y de la esperanza y dignos rituales.</span>
      </p>
    </div>

    <br>

    <!-- INSTALACIONES DE LA FUNDACIÓN -->
    <div>
      <div class="row">
        <div class="column-3333">
            <img src="../assets/logojardinesarmenia.png" style="float: left; width: 38px">
            <a href="Sede-administrativa" class="f"><h1 class="h1text" >
            <h4>SEDE ADMINISTRATIVA JARDINES DE ARMENIA</h4>
          </h1>
          </a>
        </div>
        <div class="column-3333" >
          <img src="../assets/logojardinesarmenia.png" style="float: left; width: 38px">
          <a href="Sede-Parque-cementerio" class="f"><h1 class="h1text">
            <h4>PARQUE CEMENTERIO JARDINES DE ARMENIA</h4>
          </h1>
          </a>
        </div>
        <div class="column-3333">
          <img src="../assets/logojardinesarmenia.png" style="float: left; width: 38px">
          <a href="Sede-Sala-Velacion" class="f"><h1 class="h1text">
            <h4>SALAS DE VELACIÓN JARDINES DE ARMENIA</h4>
          </h1>
          </a>
        </div>
      </div>
    </div>
    <div class="row marginsCards">
        <div class="Newcard salavelacion">
          <div class="Newheader salavelacion">
            <h1 class="title">Salas de Velación</h1>
              <div class="img-box">
                <img src="../assets/logojardinesarmenia.png" style="float: left; width: 38px">
              </div>
          </div>
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing it amet it...
            </p>
            <a href="Servicios-Sala-Velacion" class="btn-link">Read More...</a>
          </div>
        </div>
        <div class="Newcardo">
          <div class="Newheadero">
            <h1 class="title">Oficina Principal</h1>
              <div class="img-box">
                <img src="../assets/logojardinesarmenia.png" style="float: left; width: 38px">
              </div>
          </div>
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing it amet it...
            </p>  
            <a href="Sede-administrativa" class="btn-link">Read More...</a>
          </div>
        </div>
        <div class="Newcardc">
          <div class="Newheaderc">
            <h1 class="title">Parque Cementerio</h1>
              <div class="img-box">
                <img src="../assets/logojardinesarmenia.png" style="float: left; width: 38px">
              </div>
          </div>
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing it amet it...
            </p>  
            <a href="Servicios-Parque-Cementerio" class="btn-link">Read More...</a>
          </div>
        </div>
      </div>
    <!-- MISIÓN, VISIÓN, VALORES CORPORATIVOS, NUESTRA HISTORIA -->
    
    <div class="container">
      <div class="row fade">
        <div class="column-33">
          <v-img :src="require('@/assets/mision.png')" class="img1"></v-img>
        </div>
        <div class="column-66">
          <h1 style="color:#12A19B;">
            Misión
          </h1>
          <p align=" justify" style="font-size: 16px">
            <span>Prestar a nuestros afiliados y clientes un excelente servicio funerario y de previsión exequial con calidez humana, fundamentado en procesos de calidad que nos permitan desempeñarnos con versatilidad y flexibilidad buscando siempre el mejoramiento continuo y acompañado a nuestros clientes en el manejo del duelo.</span>
                      </p>
          <p align=" justify" style="font-size: 16px">
            <span>Además ofrecemos nuestros servicios funerarios a usuarios a nivel nacional e internacional, sin distinción de clase social, raza o creencias.</span>
          </p>
        </div>
      </div>
      <br>
      <div class="row fade">
        <div class="column-66">
          <h1 style="color:#12A19B;">Visión</h1>
          <p align=" justify" style="font-size: 16px">
            <span>Para el año 2021 la Fundación Parque Cementerio Jardines de Armenia, alcanzará un alto reconocimiento en el gremio funerario dentro y fuera del Quindío en la prestación de excelentes servicios, cualificando cada una de sus fortalezas y procesos, proyectándose a innovaciones continuas para el bienestar de los usuarios y sus necesidades, desde la actualización y asesoramiento permanente, el cumplimiento de la normatividad civil y eclesiástica, en pro de lo que se nos ha confiado: el ser humano, la familia y la naturaleza como "casa común".</span>
          </p>
        </div>
        <div class="column-33">
          <v-img :src="require('@/assets/vision.png')" class="img1"></v-img>
        </div>
      </div>
      <br>
      <div class="row fade">
        <div class="column-33">
          <v-img :src="require('@/assets/valorescorporativos.png')" class="img1"></v-img>
        </div>
        <div class="column-66">
          <h1 style="color:#12A19B;">Valores Corporativos</h1>
          <p align=" justify" style="font-size: 16px">
            <span>La política empresarial de esta entidad diocesana, está orientada en la integracion de aspectos claves de la vida y servicio de la iglesia y la sociedad como también los valores que constituyen transversalmente el ser y que hacer de la entidad, inspirados éstos en el evangelio, como son:</span>
          </p>
          <p align=" justify">
              <ul class="ultext" style="float: left">
              <li><img class="liimagen" src="../assets/logojardinesarmenia.png">La fe</li>
              <li><img class="liimagen" src="../assets/logojardinesarmenia.png">La verdad</li>
              <li><img class="liimagen" src="../assets/logojardinesarmenia.png">La honestidad</li>
              <li><img class="liimagen" src="../assets/logojardinesarmenia.png">La justicia</li>
              <li><img class="liimagen" src="../assets/logojardinesarmenia.png">Armonia</li>
            </ul>
            <ul class="ultext" style="float: left">
              <li><img class="liimagen" src="../assets/logojardinesarmenia.png">El respeto</li>
              <li><img class="liimagen" src="../assets/logojardinesarmenia.png">La caridad</li>
              <li><img class="liimagen" src="../assets/logojardinesarmenia.png">La misericordia</li>
              <li><img class="liimagen" src="../assets/logojardinesarmenia.png">La responsabilidad</li>
              <li><img class="liimagen" src="../assets/logojardinesarmenia.png">Estética</li>
            </ul>
            <ul class="ultext" style="float: left">
              <li><img class="liimagen" src="../assets/logojardinesarmenia.png">La familia</li>
              <li><img class="liimagen" src="../assets/logojardinesarmenia.png">Calidez</li>
              <li><img class="liimagen" src="../assets/logojardinesarmenia.png">Puntualidad</li>
              <li><img class="liimagen" src="../assets/logojardinesarmenia.png">Orden</li>
            </ul>
          </p>
        </div>
      </div>
      <br>
      <div class="row fade">
        <div class="column-66">
          <h1 style="color:#12A19B;">Nuestra Historia</h1>
          <p align=" justify" style="font-size: 16px">
            <span>El cementerio fue inaugurado, prestando sus servicios a la ciudad el 27 de Septiembre de 1974, a la fecha la entidad tiene como experiencia mas de 40 años en la prestación de servicios exequiales al pueblo quindiano.</span>
          </p>
          <p align=" justify" style="font-size: 16px">
            <span>Algunos años después debido al ambiente espacioso y natural, bello, colorido y silvestre se dio el nombre de Parque Cementerio Jardines de Armenia. Posteriormente es creada la Fundación Parque Cementerio Jardines de Armenia.</span>
          </p>
          <v-btn class="fboton elevation-8" @click="getPdf">
            
            <strong>CONTINUAR LEYENDO</strong>
          </v-btn>
        </div>
        <div class="imgNuestraH">
          <v-img :src="require('@/assets/personal.png')" class="img1"></v-img>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  methods: {
    getPdf(){
      window.open("https://75077623.000webhostapp.com/RESE%C3%91A%20HISTORICA%20DEL%20PARQUE%20CEMENTERIO.pdf", '_blank')
    }
  }
};
</script>

<style>
.column-33 {
  float: left;
  width: 33.33333%;
  padding: 0px 13px;
  margin-top: 35px;
}
.img {
  border-radius: 10px;
}
.img1 {
  width: auto !important;
  height: 215px !important;
  border-radius: 10px !important;
  margin-bottom: 8px !important;

  -webkit-box-shadow: 0px 0px 18px 2px rgba(0,0,0,0.5);
  -moz-box-shadow: 0px 0px 18px 2px rgba(0,0,0,0.5);
  box-shadow: 0px 0px 18px 2px rgba(0,0,0,0.5);
}
.img:hover {
  -webkit-box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.41);
  -moz-box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.41);
  box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.41);
}
.fade
{
        opacity:0.5;
}
.fade:hover
{
        opacity:1;
        text-decoration: none !important;
}
/* Card con Hover */
.marginsCards{
  justify-content: center;
}
.Newcard, .Newcardc, .Newcardo{
  margin: 15px;
  width: 300px;
  height: 120px;
  border-radius: 10px;
  transition: all .5s;
  box-shadow: 15px 15px 30px rgba(25, 25, 25, 0.11),
             -15px -15px 30px rgba(60, 60, 60, 0.082);
  text-align: center;
  overflow: hidden;
}

.Newcard:hover, .Newcardc:hover, .Newcardo:hover{
  height: 254px;
  background: linear-gradient(360deg, #edededc5 60%, hsla(0, 0%, 13%, 1) 70%);
}

.Newcard .Newheader {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('../assets/fondoSalasdeVelacion.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 16px;
}

.Newcardc .Newheaderc {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('../assets/cementerio.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 16px;
}
.Newcardo .Newheadero {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('../assets/admin1.png');
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 16px;
}

.Newcard .Newheader .img-box, .Newcardc .Newheaderc .img-box, .Newcardo .Newheadero .img-box {
  width: 50px;
}

.Newcard .Newheader .title, .Newcardc .Newheaderc .title , .Newcardo .Newheadero .title{
  font-size: 1.1em;
  letter-spacing: .1em;
  font-weight: 500;
  text-transform: uppercase;
  padding: 4px 0 14px 0;
  transition: all .5s;
  color: #edededc5;

}

.Newcard:hover .Newheader, .Newcardc:hover .Newheaderc, .Newcardo:hover .Newheadero {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 96%);
}

.Newcard:hover .Newcard .header .title, .Newcardc:hover .Newcardc .header .title, .Newcardo:hover .Newcardo .header .title {
  padding: 0;
}
.title{
  color:#666666;
}

.Newcard .content, .Newcardc .content, .Newcardo .content {
  display: block;
  text-align: justify;
  color: #212121;
  margin: 0 18px;
}

.Newcard .content p, .Newcardc .content p, .Newcardo .content p {
  transition: all .5s;
  font-size: 1em;
  margin-bottom: 8px;
}

.Newcard .content a, .Newcardc .content a, .Newcardo .content a {
  color: #1d8122;
  cursor: pointer;
  transition: all .5s;
  font-size: .8rem;
  font-weight: 500;
  text-transform: uppercase;
}

.Newcard .content .btn-link:hover, .Newcardc .content .btn-link:hover, .Newcardo .content .btn-link:hover {
  border-bottom: 1px solid #1d8122;
}
/* Nuestr historia */
.imgNuestraH{
  float: left;
  width: 33.33333%;
  padding: 0px 13px;
  margin: 0;
  display: flex;
  align-items: center;
}

@media screen and (max-width: 1000px) {
  .column-33 {
    width: 103%;
    text-align: center;
  }
  .column-3333 {
    width: 88%;
    text-align: center;
  }
  img {
    margin: auto;
  }
}
</style>
