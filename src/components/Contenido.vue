<template id="">
  <div>
    <div style="width: 95%!important">
    <v-carousel interval="4500" class="slider" hide-controls height="302">
      <v-carousel-item class="imgslider"  v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>
    </div>
    
    <!-- POR QUÉ ELEGIRNOS -->
    
    <div class="respons" >
      <div class="row">
        <div class="column-33 centrarImagen">
          <v-img :src="require('@/assets/elegirnos.png')" class="imagen"></v-img>
        </div>
        <div class="column-66">
          <h1 class="large-font" style="color:#12A19B;">
            <h4>¿Por qué elegirnos?</h4>
          </h1>
          <p align=" justify">
            <span>Esta entidad tiene en su horizonte empresarial ante todo los valores del evangelio, y entre ellos la no violencia, la justicia, la veracidad, la fraternidad desde unos servicios respetuosos, responsables, solidarios, profesionales y muy espirituales.</span>
          </p>
          <p align=" justify">
            <span>Por esta razón la Fundación Parque Cementerio Jardines de Armenia es una entidad de derecho privado perteneciente a la DIÓCESIS DE ARMENIA, con más de 40 años de experiencia en servicios funerarios de primera calidad y con el más completo portafolio de servicios exequiales.</span>
          </p>
          <p align="justify" class="texto_inicio">
            Nosotros como Fundación Parque Cementerio Jardines de Armenia promovemos la
            <span style="font-size:15px">
              <font color="#12A19B">IGUALDAD, PAZ Y ESPERANZA.</font>
            </span>Porque creemos que el servicio funerario prestado con los componentes de nuestra misión, visión y valores, debe ser también un espacio para construir la paz y reafirmar la esperanza en la transformación y continuación de la existencia en la vida eterna.
          </p>
        </div>
      </div>
    </div>

    <!-- CARDS NOSOTROS, NUESTROS SERVICIOS -->
    <div>
      <div class="Contentrow">
        <div class="column-333 grow" style="    margin-top: 38px;">
          <v-card class="card-estilo elevation-18">
            <v-avatar size="150" style="margin-top: 10px">
              <img src="../assets/nosotros.png" alt="avatar">
            </v-avatar>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0" style="color:#12A19B;">
                  <h4>Nosotros</h4>
                </h3>
                <div
                  style="padding: 1.7px"
                ><p>Nuestro propósito es la prestación de servicios funerarios con el diferencial de ofrecer un servicio integro teniendo en cuenta la calidez humana, acompañamiento espiritual, pastoral de la consolación y de la esperanza y dignos rituales.</p></div>
              </div>
            </v-card-title>
            <v-btn class="fboton elevation-8" to="AboutUs">
              <strong>SABER MÁS</strong>
            </v-btn>
          </v-card>
        </div>

        <div class="column-333 grow centroColum">
          <v-card class="card-estilo elevation-18">
            <v-avatar size="150" style="margin-top: 10px">
              <img src="../assets/planesyservicios.png" alt="avatar">
            </v-avatar>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0" style="color:#12A19B;">
                  <h4>Nuestros Servicios</h4>
                </h3>
                <div
                  style="padding: 1.7px"
                ><p>Entre nuestra amplia experiencia en servicios funerarios y nuestro más completo portafolio de servicios y planes exequiales con altos estándares de calidad, puedes elegir el plan que más se ajuste a tus necesidades y las de tu familia.</p></div>
              </div>
            </v-card-title>
            <v-btn class="fboton elevation-8" to="productsandservices">
              <strong>SABER MÁS</strong>
            </v-btn>
          </v-card> 
        </div>

         <div class="column-333 grow">
          <v-card class="card-estilo elevation-18">
            <v-avatar size="150" style="margin-top: 10px">
              <img src="../assets/logouniduelo.png" alt="avatar">
            </v-avatar>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0" style="color:#12A19B;">
                  <h4>Unidad de Duelo</h4>
                </h3>
                <div
                  style="padding: 1.7px"
                ><p>La Unidad de Duelo es una dependencia de la Fundación Parque Cementerio Jardines de Aremina, la cual brinda a las personas ayuda para el mejoramiento de su calidad de vida al momento de sufrir la pérdidad de un ser querido.</p></div>
              </div>
            </v-card-title>
            <v-btn class="fboton elevation-8" to="Info-Uniduelo">
              <strong>SABER MÁS</strong>
            </v-btn>
          </v-card>
        </div>
      </div>
    </div>

    <div class="container1">
      <h1 style="color:#12A19B; font-size: 29px;">
        <h4>SERVICIOS DEL DIA</h4>
      </h1>
      <div class="row">
        <div class="column-3333">
          <a href="Servicios-Sala-Velacion" class="f"><h1 class="h1text">
            <img src="../assets/logojardinesarmenia.png" style="float: left; width: 38px">
            <h4>SALAS DE VELACIÓN JARDINES DE ARMENIA</h4>
          </h1>
          </a>
        </div>
        <div class="column-3333">
          <img src="../assets/logojardinesarmenia.png" style="float: left; width: 38px">
          <a href="Servicios-Parque-Cementerio" class="f"><h1 class="h1text">
            <h4>PARQUE CEMENTERIO JARDINES DE ARMENIA</h4>
          </h1>
          </a>
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("@/assets/carrusel/carrusel1.png")
        },
         {
          src: require("@/assets/carrusel/carrusel5.png")
        },
         {
          src: require("@/assets/carrusel/carrusel3.png")
        },
         {
          src: require("@/assets/carrusel/carrusel4.png")
        },
         {
          src: require("@/assets/carrusel/carrusel2.png")
        },
         {
          src: require("@/assets/carrusel/carrusel6.png")
        },
        {
          src: require("@/assets/carrusel/carrusel7.png")
        },
        {
          src: require("@/assets/carrusel/carrusel8.png")
        },
        {
          src: require("@/assets/carrusel/carrusel9.png")
        },
        {
          src: require("@/assets/carrusel/carrusel10.png")
        }
      ]
    };
  }
};
</script>
<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
.container {
  padding: 20px;
}
.container1 {
  padding: 30px;
}
.imagen {
  width: auto !important;
  height: 220px !important;
  border-radius: 10px !important;
  margin-bottom: 8px !important;
}
.fboton {
  color: #333333 !important;
  margin-bottom: 12px;
  background-color: #12a19b !important;
  background-image: -webkit-linear-gradient(top, #12a19b, #999999);
  background-image: -moz-linear-gradient(top, #12a19b, #999999);
  background-image: -ms-linear-gradient(top, #12a19b, #999999);
  background-image: -o-linear-gradient(top, #12a19b, #999999);
  background-image: linear-gradient(to bottom, #12a19b, #999999);
}
.fboton:hover {
  background-color: #666666 !important;
  background-image: -webkit-linear-gradient(top, #999999, #12a19b);
  background-image: -moz-linear-gradient(top, #999999, #12a19b);
  background-image: -ms-linear-gradient(top, #999999, #12a19b);
  background-image: -o-linear-gradient(top, #999999, #12a19b);
  background-image: linear-gradient(to bottom, #999999, #12a19b);
}

.row:after {
  content: "";
  display: table;
  clear: both;
}
.Contentrow{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 7rem 0 7rem;
}
.column-66 {
  float: left;
  width: 66.66666%;
  padding: 11px;
}
.column-33 {
  float: left;
  width: 33.33333%;
  margin-top: 35px;
  display: flex;
  align-items: flex-end;
}
.column-333 {
  display: inline-block;
  width: 25%;
  padding: 0 15px 0 15px;
  height: 30rem;
}
.centroColum {
  padding: 15px;
}
.column-3333 {
  display: inline-block;
  width: 30%;
  padding: 13px;
}
.h1text {
  color: #666666;
  font-size: 23px;
}
.h1text:hover {
  color: #12a19b !important;
}
.large-font {
  font-size: 40px;
  text-align: center;
}
.xlarge-font {
  font-size: 64px;
}
img {
  display: block;
  height: auto;
  max-width: 100%;
  height: 100%;
}

.grow:hover {
  transform: scale(1.02);
}
.centrarImagen{
  align-items: center;
}
.imgslider{
  height: 302px;
}

p{
  color: #70706e;
}
/* texto inicio */
/* .texto_inicio {
  margin: 15px;
} */
.respons {
  width: 85%;
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
/* Card con Hover */
.marginsCards{
  justify-content: center;
}
.Newcard, .Newcardc{
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

.Newcard:hover, .Newcardc:hover{
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

.Newcard .Newheader .img-box, .Newcardc .Newheaderc .img-box {
  width: 50px;
}

.Newcard .Newheader .title, .Newcardc .Newheaderc .title {
  font-size: 1.1em;
  letter-spacing: .1em;
  font-weight: 500;
  text-transform: uppercase;
  padding: 4px 0 14px 0;
  transition: all .5s;
  color: #edededc5;

}

.Newcard:hover .Newheader, .Newcardc:hover .Newheaderc {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 96%);
}

.Newcard:hover .Newcard .header .title, .Newcardc:hover .Newcardc .header .title {
  padding: 0;
}
.title{
  color:#666666;
}

.Newcard .content, .Newcardc .content {
  display: block;
  text-align: justify;
  color: #212121;
  margin: 0 18px;
}

.Newcard .content p, .Newcardc .content p {
  transition: all .5s;
  font-size: 1em;
  margin-bottom: 8px;
}

.Newcard .content a, .Newcardc .content a {
  color: #1d8122;
  cursor: pointer;
  transition: all .5s;
  font-size: .8rem;
  font-weight: 500;
  text-transform: uppercase;
}

.Newcard .content .btn-link:hover, .Newcardc .content .btn-link:hover {
  border-bottom: 1px solid #1d8122;
}
@media screen and (max-width: 1000px) {
  .Contentrow{
    margin:0;
  }
  .column-66,
  .column-33 {
    width: 100%;
    text-align: center;
  }
  .column-333 {
    width: 100%;
    text-align: center;
  }
  .column-3333 {
    width: 88%;
    text-align: center;
  }
  img {
    margin: auto;
  }
  .slider{
    display: none;
  }
}
.v-carousel__item{
  height: 302px;
}
</style>

