<template>
  <div>
<!-- SERVICIOS PARQUE CEMENTERIO -->
    <div >
      <h1 class="large-font" style="color:#12A19B;">
        <h4>Planes de Proteccion Familiares o Grupales</h4>
      </h1>
      <p style="font-size: 24px; color: #666">
        <span>Entre nuestros servicios podrá contar con:</span>
      </p>     
    </div>

    <br>
    <br>
    <!-- CARDS SERVICIOS -->
    <div>
      <div class="rowP">
        <div class="cardP">
          <v-card class="card-estilo cardMarginT elevation-18">
            <v-avatar size="150" style="margin-top: 10px">
              <img src="../assets/Imagen1.png" alt="avatar" />
            </v-avatar>
            <v-card-title primary-title>
              <div style="font-size: 16px">
                <p>
                  Plan diseñado para grupos de familias pequeños, 
                  y su vida se  desenvuelve en el  departamento del Quindío.
                </p>
                <div style="padding: 1.7px"><p>PLAN PROTECCION MARGARITA.</p></div>
              </div>
            </v-card-title>
            <v-btn class="fboton elevation-8" to="planmargarita">
              <strong>SABER MÁS</strong>
            </v-btn>
          </v-card>
        </div>

        <div class="cardP">
          <v-card class="card-estilo cardMarginT elevation-18">
            <v-avatar size="150" style="margin-top: 10px">
              <img src="../assets/rosa.png" alt="avatar" />
            </v-avatar>
            <v-card-title primary-title>
              <div style="font-size: 16px">
                <p>
                  Protección diseñada para cubrir lo que las familias de la región requiere.
                </p>
                <h4><br></h4>
                <div style="padding: 1.7px"><p>PLAN PROTECCION ROSA.</p></div>
              </div>
            </v-card-title>
            <v-btn class="fboton elevation-8" to="planrosa">
              <strong>SABER MÁS</strong>
            </v-btn>
          </v-card>
        </div>

        <div class="cardP">
          <v-card class="card-estilo cardMarginT elevation-18">
            <v-avatar size="150" style="margin-top: 10px">
              <img src="../assets/girasol.png" alt="avatar" />
            </v-avatar>
            <v-card-title primary-title>
              <div style="font-size: 16px">
                <p>
                  Protección diseñada para cubrir grupos de familias medianas.
                </p>
                <h4><br></h4>
                <div style="padding: 1.7px"><p>PLAN PROTECCION GIRASOL.</p></div>
              </div>
            </v-card-title>
            <v-btn class="fboton elevation-8" to="plangirasol">
              <strong>SABER MÁS</strong>
            </v-btn>
          </v-card>
        </div>

        <div class="cardP">
          <v-card class="card-estilo cardMarginT elevation-18">
            <v-avatar size="150" style="margin-top: 10px">
              <img src="../assets/orquidea.png" alt="avatar" />
            </v-avatar>
            <v-card-title primary-title>
              <div style="font-size: 16px">
                <p>
                  Protección diseñada para cubrir grupos de familias grandes, con un cubrimiento al 100% Nacional.
                </p>
                <div style="padding: 1.7px"><p>PLAN PROTECCION ORQUIDEA.</p></div>
              </div>
            </v-card-title>
            <v-btn class="fboton elevation-8" to="planorquidea">
              <strong>SABER MÁS</strong>
            </v-btn>
          </v-card>
        </div>

        <div class="cardP">
          <v-card class="card-estilo cardMarginT elevation-18">
            <v-avatar size="150" style="margin-top: 10px">
              <img src="../assets/sacerdotal.jpg" alt="avatar" />
            </v-avatar>
            <v-card-title primary-title>
              <div style="font-size: 16px">
                <p>
                  Plan diseñado para cubrir la familia del sacerdote a nivel local departamental y nacional.
                </p>
                <h4><br></h4>
                <div style="padding: 1.7px"><p>PLAN PROTECCION SACERDOTAL.</p></div>
              </div>
            </v-card-title>
            <v-btn class="fboton elevation-8" to="plansacerdotal">
              <strong>SABER MÁS</strong>
            </v-btn>
          </v-card>
        </div>

        <div class="cardP">
          <v-card class="card-estilo cardMarginT elevation-18">
            <v-avatar size="150" style="margin-top: 10px">
              <img src="../assets/diocesanas.png" alt="avatar" />
            </v-avatar>
            <v-card-title primary-title>
              <div style="font-size: 16px">
                <p>
                  Plan diseñado para cubrir a todos  los trabajadores de las entidades diocesanas y parroquiales.
                </p>
                <div><p>PLAN PROTECCION DIOCESANAS Y PARROQUIALES.</p></div>
              </div>
            </v-card-title>
            <v-btn class="fboton elevation-8" to="plandiocesanasyparroquias">
              <strong>SABER MÁS</strong>
            </v-btn>
          </v-card> 
        </div>

        <div class="cardP">
          <v-card class="card-estilo  cardMarginT elevation-18">
            <v-avatar size="150" style="margin-top: 10px">
              <img src="../assets/multiplan.png" alt="avatar" />
            </v-avatar>
            <v-card-title primary-title>
              <div style="font-size: 16px">
                <p>
                  Plan diseñado para usted y su familia integre un plan de protección según su necesidad.
                </p>
                <h4><br></h4>
                <br>
                <div style="padding: 1.7px"><p>PLAN PROTECCION MULTIPLAN.</p></div>
              </div>
            </v-card-title>
            <v-btn class="fboton elevation-8" to="planmultiplan">
              <strong>SABER MÁS</strong>
            </v-btn>
          </v-card>
        </div>

        <div class="cardP">
          <v-card class="card-estilo cardMarginT elevation-18">
            <v-avatar size="150" style="margin-top: 10px">
              <img src="../assets/permanencia.png" alt="avatar" />
            </v-avatar>
            <v-card-title primary-title>
              <div style="font-size: 16px">
                <h4><br></h4>
                <p>
                  Plan diseñado para  retirados o pensionados de las diferentes empresas que ya tienen protección con la fundación.
                </p>
                <div style="padding: 1.7px"><p>PLAN PROTECCION PERMANENCIA.</p></div>
              </div>

            </v-card-title>
            <v-btn class="fboton elevation-8" to="planpermanencia">
              <strong>SABER MÁS</strong>
            </v-btn>
          </v-card>
        </div>
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
.rowP{
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.cardP{
  padding: 15px; 
  width: 30rem;
  height: 32rem;
}
.cardMarginT{
  width: 100%;
  height: 100%;
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

