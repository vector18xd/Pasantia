<template>
  <div>
   
   <!-- SERVICIOS PARQUE CEMENTERIO -->
    <div >
      <h1 class="large-font" style="color:#12A19B;">
        <h4>Titulos de Servicios</h4>
      </h1>
      <p style="font-size: 24px; color: #666">
        <span>“La mejor forma de tener protegido a los seres queridos”</span>
      </p>
    </div>

<h2>
  Adquieralo:
  <br>
  Cerrado: el servicio se adquiere para una persona en especifico.
  <br>
  Abierta: el servicio puede ser utilizado con la persona que usted necesite.
</h2>

    <br>
    <br>

    <!-- CARDS SERVICIOS -->
    <div>
      <div class="row">
        <div class="column-333 grow cardT">
          <v-card class="card-estilo elevation-18">
            <v-avatar size="150" style="margin-top: 10px">
              <img src="../assets/aliados.png" alt="avatar" />
            </v-avatar>
            <v-card-title primary-title>
              <div style="font-size: 16px">
                <p>
                  Diseñado para las familias que solo necesitan el servicio exequial.
                </p>
                <div style="padding: 1.7px"><p>TITULO TULIPAN.</p></div>
              </div>
            </v-card-title>
            <v-btn class="fboton elevation-8" to="titulotulipan">
              <strong>SABER MÁS</strong>
            </v-btn>
          </v-card>
        </div>

        <div class="column-333 grow cardT">
          <v-card class="card-estilo elevation-18">
            <v-avatar size="150" style="margin-top: 10px">
              <img src="../assets/aliados.png" alt="avatar" />
            </v-avatar>
            <v-card-title primary-title>
              <div style="font-size: 16px">
                <p>
                  Diseñado para familias que ven en la cremación una opción en el destino final, servicio inicial mas cremación.
                </p>
                <div style="padding: 1.7px"><p>TITULO AZUCENA.</p></div>
              </div>
            </v-card-title>
            <v-btn class="fboton elevation-8" to="tituloazucena">
              <strong>SABER MÁS</strong>
            </v-btn>
          </v-card>
        </div>

        <div class="column-333 grow cardT">
          <v-card class="card-estilo elevation-18">
            <v-avatar size="150" style="margin-top: 10px">
              <img src="../assets/aliados.png" alt="avatar" />
            </v-avatar>
            <v-card-title primary-title>
              <div style="font-size: 16px">
                <p>
                  Diseñado para las familias que desea tener mas de una opción en el  de destino final, ya sea cremación o lote.
                </p>
                <div style="padding: 1.7px"><p>TITULO AZALEA.</p></div>
              </div>
            </v-card-title>
            <v-btn class="fboton elevation-8" to="tituloazalea">
              <strong>SABER MÁS</strong>
            </v-btn>
          </v-card>
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
  .cardT{
    height: 28rem;
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

