<template>
  <div>
    <div>
      <h1 class="large-font" style="color:#12A19B;">
        <h4>PROGRAMA RADIAL UN MEMORIAL POR LA VIDA</h4>
      </h1>
      <p style="font-size: 26px; color:#666666">
        <span>Fechas de Emisión de Nuestro Programa </span>
      </p>
    </div>

   <div style="width: 45%;">
      <v-img :src="require('@/assets/logo_waifu2x_art_noise2_scale_tta_1_waifu2x_art_noise2_scale_tta_1.png')" style="border-radius: 10px"></v-img>
    </div>

    <div>

    <!-- TABLA EXHUMACIONES -->
    <div class="container">
      <v-card>
        <v-card-title class="tabla tabla1">
          <v-spacer></v-spacer>
          <v-text-field
            color="#12a19b"
            v-model="search"
            append-icon="search"
            label="Buscar"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :search="search"
          hide-actions
          :pagination.sync="pagination"
          class="elevation-6 tabla tabla1"
        >
          <template v-slot:items="props">
            <td class="text-xs-center tabla">{{ props.item.fecha }}</td>
            <td class="text-xs-center tabla">{{ props.item.nombre }}</td>
            <td class="text-xs-center tabla">{{ props.item.dia }}</td>
            <td class="text-xs-center tabla">{{ props.item.hora }}</td>
          </template>
          <template v-slot:no-results>
            <v-alert
              :value="true"
              color="error"
              icon="warning"
            >Su búsqueda de "{{ search }}" no encontró resultados.</v-alert>
          </template>
        </v-data-table>
      </v-card>
      <br>
      <div class="text-xs-center pt-2">
        <v-pagination v-model="pagination.page" :length="pages" color="#12a19b"></v-pagination>
      </div>
    </div>
    <div class="text-xs-right">
      <v-btn class="fboton elevation-8 positionbtn" to="Information">
        <strong>REGRESAR</strong>
      </v-btn>
    </div>
  </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      search: "",
      pagination: {},
      selected: [],
      headers: [
        { text: "FECHA", align: "center", sortable: false, value: "fecha" },
        { text: "NOMBRE DE LA EMISIÓN", align: "center", sortable: false, value: "nombre" },
        { text: "DIA", align: "center", sortable: false, value: "dia" },
        { text: "HORA", align: "center", sortable: false, value: "hora" }
      ],
      desserts: [
        {
          fecha: "04/03/2020",
          nombre: "LA FAMILIA, TODO UN CUENTO",
          dia: "MIERCOLES",
          hora: "9:30 AM"
        },
        {
          fecha: "05/03/2020",
          nombre: "LAZOS DE AMOR MARIANO",
          dia: "MIERCOLES",
          hora: "10:00 AM"
        },
        {
          fecha: "05/03/2020",
          nombre: "SENDEROS DE ESPERANZA",
          dia: "JUEVES",
          hora: "11:05 AM"
        },
        {
          fecha: "06/03/2020",
          nombre: "MEMORIAL POR LA VIDA",
          dia: "VIERNES",
          hora: "10:00 AM"
        },
        {
          fecha: "11/03/2020",
          nombre: "LA FAMILIA TODO UN CUENTO",
          dia: "MIERCOLES",
          hora: "10:00 AM"
        },
        {
          fecha: "11/03/2020",
          nombre: "LAZOS DE AMOR MARIANO",
          dia: "MIERCOLES",
          hora: "11:00 AM"
        },
        {
          fecha: "10/03/2020",
          nombre: "LAICO ES TU HORA",
          dia: "MARTES",
          hora: "10:00 AM"
        },
        {
          fecha: "12/03/2020",
          nombre: "SENDEREOS DE ESPERANZA",
          dia: "JUEVES",
          hora: "10:00 AM"
        },
        {
          fecha: "13/03/2020",
          nombre: "MEMORIAL POR LA VIDA",
          dia: "VIERNES",
          hora: "11:00 AM"
        },
        {
          fecha: "16/03/2020",
          nombre: "CARISMAS",
          dia: "LUNES",
          hora: "10:00 AM"
        },
        {
          fecha: "",
          nombre: "",
          dia: "",
          hora: ""
        },
        {
          fecha: "",
          nombre: "",
          dia: "",
          hora: ""
        },
        {
          fecha: "",
          nombre: "",
          dia: "",
          hora: ""
        },
        {
          fecha: "",
          nombre: "",
          dia: "",
          hora: ""
        },
        {
          fecha: "",
          nombre: "",
          dia: "",
          hora: ""
        }
      ]
    };
  },
  computed: {
    pages() {
      if (
        this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      )
        return 0;

      return Math.ceil(
        this.pagination.totalItems / this.pagination.rowsPerPage
      );
    }
  }
};
</script>

<style>
/* Emisora */
.positionbtn {
  margin-right: 45px;
  margin-bottom: 45px;
}
.container2 {
  padding: 40px;
}
.tabla {
  border-left: solid 1px;
  border-top: solid 1px;
  border-color: #12a19b;
}
.tabla1 {
  border-right: solid 1px;
  border-color: #12a19b;
}
.lidecoration {
  list-style: decimal;
}
</style>