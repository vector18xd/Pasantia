<template>

<div>
      <h1 class="large-font" style="color:#12A19B;">
        <h4>Psicologos Profesionales Unidad De Duelo</h4>
      </h1>
      <p style="font-size: 26px; color:#666666">
        <span>Datos Biograficos</span>
      </p>

      <div class="row">
        <div class="column-333 grow">
          <v-card class="card-estilo elevation-18">
            <v-avatar size="150" style="margin-top: 10px">
              <img src="../assets/adriana.jpg" alt="avatar">
            </v-avatar>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0" style="color:#12A19B;">
                  <h4>Adriana Botina Echeverry</h4>
                </h3>
                <div
                  style="padding: 1.7px"
                ><p>Nuestro propósito es la prestación de servicios funerarios con el diferencial de ofrecer un servicio integro teniendo en cuenta la calidez humana, acompañamiento espiritual, pastoral de la consolación y de la esperanza y dignos rituales.</p></div>
              </div>
            </v-card-title>
          </v-card>
        </div>
  
        <div class="column-333 grow">
          <v-card class="card-estilo elevation-18">
            <v-avatar size="150" style="margin-top: 10px">
              <img src="../assets/ruby.jpg" alt="avatar">
            </v-avatar>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0" style="color:#12A19B;">
                  <h4>Ruby Pardo Lozano</h4>
                </h3>
                <div
                  style="padding: 1.7px"
                ><p>Nuestro propósito es la prestación de servicios funerarios con el diferencial de ofrecer un servicio integro teniendo en cuenta la calidez humana, acompañamiento espiritual, pastoral de la consolación y de la esperanza y dignos rituales.</p></div>
              </div>
            </v-card-title>
          </v-card>
        </div>
      </div>
      <br>
</div>    
</div>    
</template>  

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
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
  border-radius: 30px;
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
.column-66 {
  float: left;
  width: 66.66666%;
  padding: 11px;
}
.column-33 {
  float: left;
  width: 33.33333%;
  margin-top: 35px;
}
.column-333-5 {
  display: inline-block;
  width: 50%;
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
.card-estilo {
  border: solid 1px;
  border-color: #e8ac09 !important;
  border-radius: 30px;
}
.grow:hover {
  transform: scale(1.02);
}
.slider{
  /* width: 857px !important; */
  width:88%;
  height: 302px !important;
   border-radius: 10px;
}
.imgslider{
  height: 302px;
}

p{
  color: #70706e;
}

@media screen and (max-width: 1000px) {
  .column-66,
  .column-33 {
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
</style>
