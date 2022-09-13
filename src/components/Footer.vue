<template>
  <v-footer dark height="auto">
    <v-card class="flex colorFondo" flat tile>
      <div class="bloque">
        <v-card-title>
          <div>
            <img
              src="../assets/clock.png"
              style="float: left; width: 26px; margin-right: 5px"
            />
            <b>
              <u style="font-size: 17px;">HORARIOS DE ATENCIÓN</u>
            </b>
            <br />
            <b class="bfooter">Oficina principal</b>
            <ul>
              <li>Lunes - Jueves</li>
              <li>8:00 a.m. - 12:00 p.m. y 2:00 p.m. - 6:00 p.m.</li>
              <li>Viernes</li>
              <li>8:00 a.m. - 12:00 p.m. y 2:00 p.m. - 5:30 p.m.</li>
            </ul>
            <br />
            <ul>
              <b class="bfooter">Parque cementerio (oficinas)</b>
            </ul>
            <ul>
              <li>Lunes - Viernes</li>
              <li>8:00 a.m. - 12:00 p.m. y 2:00 p.m. - 6:00 p.m.</li>
              <li>Sábados</li>
              <li>8:00 a.m. - 12:00 p.m.</li>
              <li>Domingos</li>
              <li>8:00 a.m. - 1:00 p.m. y 3:00 p.m. - 6:00 p.m.</li>
            </ul>
          </div>
        </v-card-title>
      </div>

      <div class="bloque">
        <v-card-title>
          <div>
            <img
              src="../assets/address.png"
              style="float: left; width: 26px; margin-right: 5px"
            />
            <b>
              <u style="font-size: 17px">DIRECCIÓN</u>
            </b>
            <br />
            <b class="bfooter">Oficina principal</b>
            <ul>
              <li>Calle 23 No. 12-26, ofi. 203</li>
              <li>Armenia, Colombia</li>
            </ul>
            <br /><br />
            <ul>
              <b class="bfooter">Parque cementerio (oficinas)</b>
            </ul>
            <ul>
              <li>Km 1 vía al Caimo</li>
              <li>Armenia, Colombia</li>
            </ul>
          </div>
        </v-card-title>
      </div>
      <div class="bloque">
        <v-card-title>
          <div>
            <img
              src="../assets/talking.png"
              style="float: left; width: 26px; margin-right: 5px"
            />
            <b>
              <u style="font-size: 17px;">TELÉFONOS</u>
            </b>
            <br />
            <b class="bfooter">Oficina principal</b>
            <ul>
              <li>+57 (6) 7448036</li>
              <li>+57 (6) 7414393</li>
              <li>+57 3155479996</li>
            </ul>
            <br />
            <ul>
              <b class="bfooter">Parque cementerio (oficinas)</b>
            </ul>
            <ul>
              <li>+57 (6) 7472994</li>
              <li>+57 (6) 7474199</li>
              <li>+57 3165213599</li>
            </ul>
          </div>
        </v-card-title>
      </div>
      <div>
        <v-card-title>
          <div>
            <img
              src="../assets/domain-registration.png"
              style="float: left; width: 26px; margin-right: 5px"
            />
            <b>
              <u style="font-size: 17px;">SOBRE NOSOTROS</u>
            </b>
            <br />
            <ul class="ultext">
              <a href="/" class="f"
                ><b
                  ><li>
                    <img
                      class="liimagen"
                      src="../assets/logojardinesarmeniablanco.png"
                    />Inicio
                  </li></b
                ></a
              >
              <a href="AboutUs" class="f"
                ><b
                  ><li>
                    <img
                      class="liimagen"
                      src="../assets/logojardinesarmeniablanco.png"
                    />Quiénes somos
                  </li></b
                ></a
              >
              <a href="productsandservices" class="f"
                ><b
                  ><li>
                    <img
                      class="liimagen"
                      src="../assets/logojardinesarmeniablanco.png"
                    />Productos y servicios
                  </li></b
                ></a
              >
              <a
                href="https://75077623.000webhostapp.com/POLITICA%20DE%20TRATAMIENTO%20DE%20DATOS%20PERSONALES-PARA%20LINK.pdf"
                target="_blank"
                class="f"
                ><b
                  ><li>
                    <img
                      class="liimagen"
                      src="../assets/logojardinesarmeniablanco.png"
                    />Política de protección de datos personales
                  </li></b
                ></a
              >
            </ul>
          </div>
        </v-card-title>
      </div>
      <div>
        <v-card-title>
          <div>
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
@media screen and (max-width: 1000px) {
  .bloque {
    float: none;
    margin-left: 15px;
  }
}
</style>
