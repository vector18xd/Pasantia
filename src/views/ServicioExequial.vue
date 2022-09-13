<template>
  <div>
   
   <!-- SERVICIOS PARQUE CEMENTERIO -->
    <div >
      <h1 class="large-font" style="color:#12A19B;">
        <h4>Planes de Proteccion Empresariales</h4>
      </h1>
      <p style="font-size: 24px; color: #666">
        <span>Entre nuestros servicios podrá contar con:</span>
      </p>
     
    </div>

    <br>
    <br>

    <!-- CARDS SERVICIOS -->
    <div>
      <div class="row">
      <div class="row">
        <div class="column-333 grow">
          <v-card class="card-estilo elevation-18">
            <v-avatar size="150" style="margin-top: 10px">
              <img src="../assets/gardenia.png" alt="avatar" />
            </v-avatar>
            <v-card-title primary-title>
              <div style="font-size: 16px">
                <p>
                  Plan diseñado  para grupos  corporativos mediamos , con amplio cubrimiento.
                </p>
                <div style="padding: 1.7px"><p>PLAN CORPORATIVO GARDENIA.</p></div>
              </div>
            </v-card-title>
            <v-btn class="fboton elevation-8" to="plangardenia">
              <strong>SABER MÁS</strong>
            </v-btn>
          </v-card>
        </div>

        <div class="column-333 grow">
          <v-card class="card-estilo elevation-18">
            <v-avatar size="150" style="margin-top: 10px">
              <img src="../assets/aleli.png" alt="avatar" />
            </v-avatar>
            <v-card-title primary-title>
              <div style="font-size: 16px">
                <p>
                  Plan diseñado  para grupos  corporativos pequeños  , con amplio cubrimiento.
                </p>
                <div style="padding: 1.7px"><p>PLAN CORPORATIVO ALELI.</p></div>
              </div>
            </v-card-title>
            <v-btn class="fboton elevation-8" to="planaleli">
              <strong>SABER MÁS</strong>
            </v-btn>
          </v-card>
        </div>

        <div class="column-333 grow">
          <v-card class="card-estilo elevation-18">
            <v-avatar size="150" style="margin-top: 10px">
              <img src="../assets/camelia.png" alt="avatar" />
            </v-avatar>
            <v-card-title primary-title>
              <div style="font-size: 16px">
                <p>
                  Plan diseñado  para grupos  corporativos Micro, con amplio cubrimiento.
                </p>
                <div style="padding: 1.7px"><p>PLAN CORPORATIVO CAMELIA.</p></div>
              </div>
            </v-card-title>
            <v-btn class="fboton elevation-8" to="plancamelia">
              <strong>SABER MÁS</strong>
            </v-btn>
          </v-card>
        </div>
      </div>
      </div>
    </div>
  
    <div class="text-xs-right">
    <v-btn class="fboton elevation-8 positionbtn" to="AboutUs">
        <strong>REGRESAR</strong>
    </v-btn>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.column-6 {
  float: left;
  width: 33.33333%;
  padding: 10px;
}

.column-67 {
  float: center;
  width: 33.33333%;
  padding: 10px;
}

.container2{
   padding: 20px;
    width: 85%;
}
.img2 {
  width: 380px !important;
  height: auto !important;
  border-radius: 10px !important;
  margin-bottom: 8px !important;
}
.img2:hover{
  transform: scale(1.02);
  -webkit-box-shadow: 0px 0px 16px 1px rgba(0,0,0,0.36);
  -moz-box-shadow: 0px 0px 16px 1px rgba(0,0,0,0.36);
  box-shadow: 0px 0px 16px 1px rgba(0,0,0,0.36);
}
.positionbtn{
 margin-right: 45px;
 margin-bottom: 45px;
}
.widthCard {
  width: 90% !important;
}
.borde{ 
    border: solid 1px #E8AC09 !important;
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

