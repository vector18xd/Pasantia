<template>
  <div>
    <div>
      <h1 class="large-font" style="color:#12A19B;">
        <h4>Memorial y Sensibilización del Mes de Marzo</h4>
      </h1>
      <p style="font-size: 26px; color:#666666">
        <span>En homenaje a nuestros seres queridos que han partido a la casa del Padre.</span>
      </p>
    </div>

    <!-- MEMORIAL DEL MES PARQUE CEMENTERIO -->

    <div style="width: 60%;">
      <v-img :src="require('@/assets/infointeres/Memorialmarzoaborto.jpg')" style="border-radius: 10px"></v-img>
    </div>

    <br>
    <br>

    <!--Items Unidad De Duelo-->

    <div>
      <h4 align="center" style="font-size: 25px; color:#12A19B">
        <span> Mira los beneficios que te ofrece nuestra Unidad de Duelo<br /> </span>
      </h4>
      <br>
      <div class="row">
        <div class="column-333 grow">
          <v-card class="card-estilo elevation-18">
            <v-avatar size="150" style="margin-top: 10px">
              <img src="../assets/nosotros.png" alt="avatar" />
            </v-avatar>
            <v-card-title primary-title>
              <div style="font-size: 16px">
                <p>
                  Conoce más acerca de la unidad de duelo.
                </p>
                <div style="padding: 1.7px"><p>Memorial Institucional</p></div>
              </div>
            </v-card-title>
            <v-btn class="fboton elevation-8" to="memorialinstitucional">
              <strong>SABER MÁS</strong>
            </v-btn>
          </v-card>
        </div>

        <div class="column-333 grow">
          <v-card class="card-estilo elevation-18">
            <v-avatar size="150" style="margin-top: 10px">
              <img src="../assets/planesyservicios.png" alt="avatar" />
            </v-avatar>
            <v-card-title primary-title>
              <div style="font-size: 16px">
                <p>
                  Conoce más acerca de la unidad de duelo.
                </p>
                <div style="padding: 1.7px"><p>Kit De Duelo</p></div>
              </div>
            </v-card-title>
            <v-btn class="fboton elevation-8" to="kiddeduelo">
              <strong>SABER MÁS</strong>
            </v-btn>
          </v-card>
        </div>

        <div class="column-333 grow">
          <v-card class="card-estilo elevation-18">
            <v-avatar size="150" style="margin-top: 10px">
              <img src="../assets/logouniduelo.png" alt="avatar" />
            </v-avatar>
            <v-card-title primary-title>
              <div style="font-size: 16px">
                <p>
                  Conoce más acerca de la unidad de duelo.
                </p>
                <div style="padding: 1.7px"><p>Articulo Memorial</p></div>
              </div>
            </v-card-title>
            <v-btn class="fboton elevation-8" to="articulo">
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
