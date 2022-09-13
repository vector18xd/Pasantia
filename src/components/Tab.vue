<template>
  <center>
    <div>
      <v-tabs
        style="width: 68%"
        color="transparent"
        slider-color="#12A19B"
        grow
        show-arrows
        v-model="model"
        class="hidden-sm-and-down"
      >
        <v-tab to="/">Inicio</v-tab> 
        <v-tab to="/AboutUs">Quiénes Somos</v-tab>

        <v-menu transition="slide-y-transition" offset-y>
          <template v-slot:activator="{ on }">
            <v-tab v-on="on">Productos y Servicios</v-tab>
          </template>
          <v-list>
            <v-list-tile v-for="(item, index) in items2" :to="item.link" :key="index">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-tab to="/Information">Información de Interés</v-tab>

        <v-menu transition="slide-y-transition" offset-y>
          <template v-slot:activator="{ on }">
            <v-tab v-on="on">Trámites en Línea</v-tab>
          </template>
          <v-list>
            <v-list-tile v-for="(item, index) in items" :to="item.link" :key="index">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-tabs>
    </div>
  </center>
</template>
<script>

export default {
  data() {
    return {
      items: [
        {
          title: "Actualizar Datos",
          link: "Actualizar-datos"
        },
        {
          title: "Encuesta de Satisfacción",
          link: "Encuesta-satisfaccion"
        },
        {
          title: "Otros Trámites",
          link: "Otros-tramites"
        }
      ],
      items2: [
        {
          title: "Planes de Proteccion Familiares o Grupales",
          link: "productsandservices"
        },
        {
          title: "Planes de Proteccion Empresariales",
          link: "Servicios_Exequiales"
        },
        {
          title: "Titulos de Servicios",
          link: "titulosservicios"
        },
        {
          title: "Beneficios Adicionales",
          link: "beneficiosadicionales"
        },
        {
          title: "Parque Cementerio",
          link: "ServiciosParque"
        },
        {
          title: "Unidad de Duelo",
          link: "Info-Uniduelo"
        }
      ],
      active: null
    };
  },
  methods: {
    next() {
      const active = parseInt(this.active);
      this.active = active < 2 ? active + 1 : 0;
    }
  }
};
</script>
<style>
.menuable__content__active .primary--text .v-list__tile__title {
    color: #12a19b
}
</style>
