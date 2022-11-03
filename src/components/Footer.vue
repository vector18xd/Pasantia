<template>
  <v-footer dark height="auto">
    <v-card class="flex colorFondo" flat tile>
      <div class="bloque">
        <v-card-title>
          <div class="footerMargin">
            <div class="footerImg">
              <img
                src="../assets/clock.png"
                style="float: left; width: 26px; margin-right: 5px"
              />
              <b>
                <u style="font-size: 17px;">HORARIOS DE ATENCIÓN (OFICINAS)</u>
              </b>
            </div>
            <br />
            <div class="horarios">
              <div class="footerHorario">
                <b class="bfooter">Oficina principal</b>
                
                <ul class="ulFooter">
                  <li>Lunes - Jueves</li>
                  <div class="cuadrarHorarios">
                    <li>8:00 a.m. - 12:00 p.m</li><li class="espaciador">y</li><li> 2:00 p.m. - 6:00 p.m.</li>
                  </div>
                  <li>Viernes</li>
                  <div class="cuadrarHorarios">
                    <li>8:00 a.m. - 12:00 p.m.</li><li class="espaciador"> y </li><li>2:00 p.m. - 5:30 p.m.</li>
                  </div>
                </ul>
              </div>
              
              <br />
              <div class="footerHorario">
                <b class="bfooter">Parque cementerio </b>
                <ul class="ulFooter">
                  <li>Lunes - Viernes</li>
                  <div class="cuadrarHorarios">
                    <li>8:00 a.m. - 12:00 p.m.</li><li class="espaciador">y</li><li>2:00 p.m. - 6:00 p.m.</li>
                  </div>
                  <li>Sábados</li>
                  <div class="cuadrarHorarios">
                    <li>8:00 a.m. - 12:00 p.m.</li>
                  </div>
                  <li>Domingos</li>
                  <div class="cuadrarHorarios">
                    <li>8:00 a.m. - 1:00 p.m.</li><li class="espaciador"> y </li><li>3:00 p.m. - 6:00 p.m.</li>  
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </v-card-title>
      </div>

      <div class="bloque">
        <v-card-title>
          <div class="direccion">
            <img
              src="../assets/address.png"
              style="float: left; width: 26px; margin-right: 5px"
            />
            <b>
              <u style="font-size: 17px">DIRECCIÓN</u>
            </b>
            <br/>
            <br/>
            <div class="cuadrarDireccion">
              <div>
                <b class="bfooter">Oficina principal</b>
                <ul>
                  <a href="https://goo.gl/maps/2VVwCS78dzJ1fEnh8" @mouseover="upHere = true" @mouseleave="upHere = false" v-if="!upHere"><li>Calle 23 No. 12-26, ofi. 203 <font-awesome-icon icon="fa-regular fa-map"/></li></a>
                  <a href="https://goo.gl/maps/2VVwCS78dzJ1fEnh8" v-show="upHere" @mouseover="upHere = true" @mouseleave="upHere = false"><li>Calle 23 No. 12-26, ofi. 203 <font-awesome-icon icon="fa-solid fa-map-location-dot" /></li></a>
                  <li>Armenia, Colombia</li>
                </ul>
              </div>
              <div>  
                <b class="bfooter">Parque cementerio</b>
                <ul>
                  <a href="https://goo.gl/maps/2VVwCS78dzJ1fEnh8" @mouseover="upHere1 = true" @mouseleave="upHere1 = false" v-if="!upHere1"><li>Km 1 vía al Caimo <font-awesome-icon icon="fa-regular fa-map"/></li></a>
                  <a href="https://goo.gl/maps/2VVwCS78dzJ1fEnh8" v-show="upHere1" @mouseover="upHere1 = true" @mouseleave="upHere1 = false"><li>Km 1 vía al Caimo <font-awesome-icon icon="fa-solid fa-map-location-dot" /></li></a>
                  <li>Armenia, Colombia</li>
                </ul>
              </div>
            </div>
          </div>
        </v-card-title>
      </div>
      <div class="bloque">
        <v-card-title>
          <div class="ContainerTelefonos">
            <img
              src="../assets/talking.png"
              style="float: left; width: 26px; margin-right: 5px"
            />
            <b>
              <u style="font-size: 17px;">TELÉFONOS</u>
            </b>
            <br />
            <div class="telefonos">
              <div>   
                <b class="bfooter">Oficina principal</b>         
                <ul>
                  <li>+57 (6) 7448036</li>
                  <li>+57 (6) 7414393</li>
                  <li>+57 3155479996</li>
                </ul>
              </div>
              <br />
              <div>
              <b class="bfooter">Parque cementerio</b>
                <ul>
                  <li>+57 (6) 7472994</li>
                  <li>+57 (6) 7474199</li>
                  <li>+57 3165213599</li>
                </ul>
              </div>
            </div>
          </div>
        </v-card-title>
      </div>
      <div>
        <div>
        <v-card-title>
          <div class="sobreNosotros">
            <img src="../assets/domain-registration.png" style="float: left; width: 26px; margin-right: 5px"/>
            <b>
              <u style="font-size: 17px;">SOBRE NOSOTROS</u>
            </b>
            <br/>
            <ul class="ultext">
              <a href="/" class="f">
                <b>
                  <li>
                    <img class="liimagen" src="../assets/logojardinesarmeniablanco.png"/>Inicio
                  </li>
                </b>
              </a>
              <a href="AboutUs" class="f">
                <b>
                  <li>
                    <img class="liimagen" src="../assets/logojardinesarmeniablanco.png"/>Quiénes somos
                  </li>
                </b>
              </a>
              <a href="productsandservices" class="f">
                <b>
                  <li>
                    <img class="liimagen" src="../assets/logojardinesarmeniablanco.png"/>Productos y servicios
                  </li>
                </b>
              </a>
              <a href="https://75077623.000webhostapp.com/POLITICA%20DE%20TRATAMIENTO%20DE%20DATOS%20PERSONALES-PARA%20LINK.pdf" target="_blank" class="f">
                <b>
                  <li>
                    <img class="liimagen" src="../assets/logojardinesarmeniablanco.png"/>Política de protección de datos personales
                  </li>
                </b>
              </a>
            </ul>
          </div>
        </v-card-title>
      </div>
      <div class="redes">
        <v-card-title>
          <div class="correo">
            <img
              src="../assets/email(1).png"
              style="float: left; width: 26px; margin-right: 5px"
            />
            <b>
              <u style="font-size: 17px;">CORREO</u>
            </b>
            <br />
            <ul class="ultext">
              <li>secretaria@jardinesarmenia.com</li>
            </ul>
            <br /><br />
            <b style="font-size: 20px">Siguenos en:</b>
            <v-btn
              fab
              color="white"
              style="color: #12A19B; "
              onClick="window.open('https://www.facebook.com/jardines.armenia', '_blank')"
            >
              <v-icon size="30px">fab fa-facebook-f</v-icon>
            </v-btn>
            <v-btn
              fab
              color="white"
              style="color: #12A19B; "
              onClick="window.open('https://twitter.com/ArmeniaJardines','_blank')"
            >
              <v-icon size="30px">fab fa-twitter</v-icon>
            </v-btn>
          </div>
        </v-card-title>
      </div>
      </div>
      <v-divider color="#E8AC09"></v-divider>
      <v-card-text class="text-xs-center">
        &copy; 2020 —
        <strong>Fundación Parque Cementerio Jardines de Armenia</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    upHere : false,
    upHere1 : false,
    icons: ["fab fa-facebook", "fab fa-twitter"],
  }),
};

</script>

<style>
.f {
  text-decoration: none !important;
  color: white !important;
}
.colorFondo {
  background-color: #12a19b !important;
}
ul {
  margin-left: 6px;
}
ul a{
  color: white;
  list-style: none;
  text-decoration: none;
}
li {
  text-decoration: none !important;
  list-style: none;
}
.ultext {
  font-size: 16px;
}
.liimagen {
  float: left;
  width: 18px;
  margin-right: 5px;
}
.bloque {
  float: left;
  margin-left: 23px;
}
.bfooter {
  color: #333333 !important;
  font-size: 16px;
}
.footerMargin{
  display: flex;
  flex-direction: column;
}
.cuadrarHorarios{
  display: flex;
}
.espaciador{
  margin: 0 3px 0 3px;
}
.telefonos{
  margin-top: 5px;
}
.ContainerTelefonos{
  width: 100%;
}
.sobreNosotros{
  margin-left: 20px;
}
.correo{
  margin-left: 20px;
}

@media screen and (max-width: 1000px) {
  .bloque {
    float: none;
    margin-left: 15px;
  }
  .ulFooter{
    padding: 0;
  }
  .horarios{
    display: flex;
    justify-content: space-evenly;
  }
  .cuadrarHorarios{
    flex-direction: column;
    margin-left: 3px;
  }
  .espaciador{
    display: none;
  }
  .footerMargin{
    width: 100%;
  }
  .cuadrarDireccion{
    display: flex;
    justify-content: space-evenly;
  }
  .direccion{
    width: 100%;
  }
  .telefonos{
    display: flex;
    justify-content: space-around;
  }
  .redes{
    display: flex;
  }
}
</style>
