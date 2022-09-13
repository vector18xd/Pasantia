<template>
  <div class>
    <v-toolbar class="toolbar" style="height: 88px!important">
      <v-toolbar-side-icon
        @click="drawer = !drawer"
        class="white--text hidden-md-and-up"
        style="margin-top: 35px!important; margin-left: 10px!important"
      ></v-toolbar-side-icon>

      <v-layout class="hidden-sm-and-down" row>
        <v-logo>
          <img src="../assets/logojardines3.jpg">
        </v-logo>
      </v-layout>

      <v-spacer></v-spacer>

      <v-toolbar-items class="overflow-x-hidden" style="margin-top: 30px!important">
        <v-layout align-center>
          <v-flex xs12 md12 text-xs-center>
            <div>
              <v-btn flat class="colorTexto1">
                <v-icon>phone_in_talk</v-icon>+57 (6) 7414393
              </v-btn>
            </div>
            <div>
              <v-btn flat class="colorTexto1">
                <v-icon>mail</v-icon>secretaria@jardinesarmenia.com
              </v-btn>
            </div>
          </v-flex>
        </v-layout>
      </v-toolbar-items>
      <v-btn class="boton elevation-8" flat to="Puntos_De_Pago">Puntos de pago</v-btn>
    </v-toolbar>
    <hr size="8" color="#E8AC09">

    <template>
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-layout mt-2 column align-center>
          <v-flex>
            <v-avatar>
              <img src="../assets/logojardinesarmenia.png">
            </v-avatar>
          </v-flex>
          <v-flex>
            <p class="mt-2 ml-2 mr-2" align="center" style="font-size: 17px">
              <b>FUNDACION PARQUE CEMENTERIO JARDINES DE ARMENIA</b>
            </p>
            <p class="ml-2 mr-2" align="center" style="font-family: MV Boli; color: #12a19b; font-size: 20px">Igualdad, paz y esperanza</p>
          </v-flex>
        </v-layout>

        <v-divider color="#12a19b"></v-divider>
        <v-list>
          <v-list-tile to="/">
            <v-list-tile-action style="color: #12a19b">
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-title style="color: #333333">Inicio</v-list-tile-title>
          </v-list-tile>

          <v-list-tile to="AboutUs">
            <v-list-tile-action style="color: #12a19b">
              <v-icon>people</v-icon>
            </v-list-tile-action>
            <v-list-tile-title style="color: #333333">Quiénes Somos</v-list-tile-title>
          </v-list-tile>

          <v-list-group prepend-icon="build" style="color: #333333 !important">
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title >Productos y Servicios</v-list-tile-title>
              </v-list-tile>
            </template>

            <v-list-tile to="productsandservices">
              <v-list-tile-action></v-list-tile-action>
              <v-list-tile-title>Nuestros Servicios</v-list-tile-title>
            </v-list-tile>
            <v-list-tile to="Servicios_Exequiales">
              <v-list-tile-action></v-list-tile-action>
              <v-list-tile-title>Servicio Exequial</v-list-tile-title>
            </v-list-tile>
            <v-list-tile to="ServiciosParque">
              <v-list-tile-action></v-list-tile-action>
              <v-list-tile-title>Parque Cementerio</v-list-tile-title>
            </v-list-tile>
            <v-list-tile to="Info-Uniduelo">
              <v-list-tile-action></v-list-tile-action>
              <v-list-tile-title>Unidad de Duelo</v-list-tile-title>
            </v-list-tile>
          </v-list-group>
          <v-list-tile to="Information">
            <v-list-tile-action style="color: #12a19b">
              <v-icon>info</v-icon>
            </v-list-tile-action>
            <v-list-tile-title style="color: #333333">Información de Interés</v-list-tile-title>
          </v-list-tile>

          <v-list-group prepend-icon="web">
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Trámites en Línea</v-list-tile-title>
              </v-list-tile>
            </template>

            <v-list-tile to="Actualizar-datos">
              <v-list-tile-action></v-list-tile-action>
              <v-list-tile-title>Actualizar datos</v-list-tile-title>
            </v-list-tile>
            <v-list-tile to="Encuesta-satisfaccion">
              <v-list-tile-action></v-list-tile-action>
              <v-list-tile-title>Encuesta de satisfacción</v-list-tile-title>
            </v-list-tile>
            <v-list-tile to="Otros-tramites">
              <v-list-tile-action></v-list-tile-action>
              <v-list-tile-title>Otros trámites</v-list-tile-title>
            </v-list-tile>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  }
};
</script>


<style media="screen">
.boton {
  color: #12a19b !important;
  margin-top: 32px !important;
  background-color: white !important;
}
.boton:hover {
  color: #e8ac09 !important;
  background-color: white !important;
}
.imagen {
  width: auto !important;
  height: auto !important;
}
.colorTexto1 {
  color: #333333 !important;
  font-size: 15px !important;
  text-transform: lowercase;
}
.toolbar {
  background-color: #12a19b !important;
}
.v-toolbar__content,
.v-toolbar__extension {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 !important;
}
.v-toolbar__content > *:last-child,
.v-toolbar__extension > *:last-child {
  margin-right: 10px !important;
}
.v-list__group__header--active .v-list__group__header__prepend-icon .v-icon {
    color: #12a19b !important;
}
.v-navigation-drawer > .v-list .v-list__tile--active .v-list__tile__title {
    color: #12a19b !important;
}
</style>
