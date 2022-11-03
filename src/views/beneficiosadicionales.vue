
  <template>
  <div>
  <!-- SERVICIOS PARQUE CEMENTERIO -->
    <div >
      <h1 class="large-font" style="color:#12A19B;">
        <h4>Beneficios Adicionales</h4>
      </h1>
    </div>

    <br>
    <br>

    <!-- CARDS SERVICIOS -->
    <section class="mainB">
      <div class="rowP">
        <div class="cardP">
          <v-card class="card-estilo cardMarginB elevation-18">
            <v-avatar size="150" style="margin-top: 10px">
              <img src="../assets/aliados.png" alt="avatar" />
            </v-avatar>
            <v-card-title primary-title>
              <div style="font-size: 16px">
                <p>
                  Al acceder al programa de Bienestar Social “ aliadas para servir” usted y su grupo vinculado al plan de previsión exequial. Resultan beneficiados de descuentos y beneficios especiales en servicios de salud, recreación y turismo.
                </p>
                <div style="padding: 7.7px;"><p>ASOMAVI ALIADOS PARA SERVIR.</p></div>
              </div>
            </v-card-title>
            <v-btn class="fboton elevation-8" to="asomavialiados">
              <strong>SABER MÁS</strong>
            </v-btn>
          </v-card>
        </div>

        <div class="cardB">
          <v-card class="card-estilo cardMarginB elevation-18">
            <v-avatar size="150" style="margin-top: 10px">
              <img src="../assets/fuego.png" alt="avatar" />
            </v-avatar>
            <v-card-title primary-title>
              <div style="font-size: 16px">
                <p>
                  Apoyamos a los cementerios del Quindío  y a la comunidad en la cremación de restos, se incluye la recogida y urna Cenizaria.
                </p>
                <h1><br></h1>
                <div class="paddingDivB" style="padding: 3.7px"><p>CREMACION DE RESTOS.</p></div>
              </div>
              <br>
            </v-card-title>
            <v-btn class="fboton elevation-8" to="cremacionderestos">
              <strong>SABER MÁS</strong>
            </v-btn>
          </v-card>
        </div>

        <div class="cardB" >
          <v-card class="card-estilo cardMarginB elevation-18">
            <v-avatar size="150" style="margin-top: 10px">
              <img src="../assets/carrofunebre.png" alt="avatar" />
            </v-avatar>
            <v-card-title primary-title >
              <div style="font-size: 16px">
                <p>
                  Se recoge y traslada los cuerpos fallecidos a nivel nacional.
                </p>
                <h1><br></h1>
                <h1><br></h1>
                <div style="padding: 7.7px"><p>TRASLADO NACIONAL.</p></div>
              </div>
            </v-card-title>
            <v-btn class="fboton elevation-8" to="trasladonacional">
              <strong>SABER MÁS</strong>
            </v-btn>
          </v-card>
        </div>

        <div class="cardB">
          <v-card class="card-estilo cardMarginB elevation-18">
            <v-avatar size="150" style="margin-top: 10px">
              <img src="../assets/segurodevida.png" alt="avatar" />
            </v-avatar>
            <v-card-title primary-title>
              <div style="font-size: 16px">
                <p>
                  El seguro de vida se da a la familia del fallecido, por muerte del titular o beneficiarios, Este seguro lo pueden tomar desde 3.000.000 hasta 15,000.000. a unos precios económicos.
                </p>
                <h1><br></h1>
                <div style="padding: 1.7px"><p>SEGURO DE VIDA.</p></div>
              </div>
            </v-card-title>
            <v-btn class="fboton elevation-8" to="segurodevida">
              <strong>SABER MÁS</strong>
            </v-btn>
          </v-card>
        </div>

        <div class="cardB">
          <v-card class="card-estilo  cardMarginB elevation-18">
            <v-avatar size="150" style="margin-top: 10px">
              <img src="../assets/avion.png" alt="avatar" />
            </v-avatar>
            <v-card-title primary-title>
              <div style="font-size: 16px">
                <p style="margin: 0">
                  Servicio que tiene cubrimiento por fallecimiento en el exterior,  se cubre todo el mundo desde el país de residencia hacia el país y ciudad de origen, se puede repatriar cenizas, la expatriación es otra opción.
                </p>
                <br>
                <div style="padding: 3px"><p>REPATRIACION POR FALLECIMIENTO.</p></div>
              </div>
            </v-card-title>
            <v-btn class="fboton elevation-8" to="repatriacionxfallecimiento">
              <strong>SABER MÁS</strong>
            </v-btn>
          </v-card>
        </div>

        <div class="cardB">
          <v-card class="card-estilo cardMarginB elevation-18">
            <v-avatar size="150" style="margin-top: 10px">
              <img src="../assets/mascotas.png" alt="avatar" />
            </v-avatar>
            <v-card-title primary-title>
              <div style="font-size: 16px">
                <p style="margin-bottom: 8px;">
                <ul>
                    <p style="margin-bottom: 8px;">ESTE SERVICIO INCLUYE</p>
                    <li>1. Recogida de la Mascota.</li>
                    <li>2. Cobertura todo el Departamento del Quindío.</li>
                    <li>3. Sala, para despedida de la mascota en huellitas al Cielo.</li>
                </ul>
                </p>
                <div><p style="margin-bottom: 8px;">PROTECCION EXEQUIAL PARA MASCOTAS.</p></div>
              </div>
            </v-card-title>
            <v-btn class="fboton elevation-8" to="proteccionexequialmascotas">
              <strong>SABER MÁS</strong>
            </v-btn>
          </v-card>
        </div>
      </div>
    </section>
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
.cardB{
  padding: 15px; 
  width: 30rem;
  height: 32rem;
}
.mainB{
  display: flex;
}
.containerB{
  display: flex;
  flex-wrap: wrap;
}
.containerB div{
  justify-content: center;
}
.sliders{
  margin-bottom: 20px;
  position: relative;

}
.slider .owl-item.active.center .slider-card{
  transform: scale(1.15);
  opacity: 1;
  background-color: #ccc;
}
.cardMarginB{
  width: 100%;
  height: 100%;
}
.paddingDivB{
  padding: 7.7;
}
@media screen and (max-width: 1000px) {
  .cardB{
    width: 26rem;
    height: 34rem;
  }
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
  .paddingDivB{
    padding: 20.7px;
  }
}
</style>

