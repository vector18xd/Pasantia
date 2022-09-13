<template>
  <div>
    <div>
      <h1 class="large-font" style="color:#12A19B;">
        <h4>Exhumaciones del Mes</h4>
      </h1>
    </div>

    <!-- TABLA EXHUMACIONES -->
    <div class="container">
      <v-card>
        <v-card-title class="tabla tabla1">
          <v-spacer></v-spacer>
          <v-text-field
            color="#12a19b"
            v-model="search"
            append-icon="search"
            label="Search"
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
            <td class="text-xs-center tabla">{{ props.item.name }}</td>
            <td class="text-xs-center tabla">{{ props.item.sector }}</td>
            <td class="text-xs-center tabla">{{ props.item.lote }}</td>
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
        { text: "NOMBRE DEL FALLECIDO", align: "center", sortable: false, value: "name" },
        { text: "SECTOR", align: "center", sortable: false, value: "sector" },
        { text: "LOTE", align: "center", sortable: false, value: "lote" }
      ],
      desserts: [
        {
          fecha: "19/06/2019",
          name: "JOSE JESUS MONTOYA SALGADO",
          sector: 17,
          lote: 80
        },
        {
          fecha: "19/06/2019",
          name: "AURELIO DE JESUS MONTOYA",
          sector: 13,
          lote: 128
        },
        {
          fecha: "19/06/2019",
          name: "MARIA NOHEMY OROZCO DE ALZATE",
          sector: 13,
          lote: 544
        },
        {
          fecha: "20/06/2019",
          name: "JOHN FABER DUQUE MORALES",
          sector: 13,
          lote: 55
        },
        {
          fecha: "20/06/2019",
          name: "JOSE NORBEY DE LA PAVA",
          sector: 13,
          lote: 61
        },
        {
          fecha: "20/06/2019",
          name: "JOHAN JAVIER TORRES GOMEZ",
          sector: 21,
          lote: 163
        },
        {
          fecha: "25/06/2019",
          name: "JUAN NEPOMUCENO PAVA GUERRERO",
          sector: 13,
          lote: 133
        },
        {
          fecha: "25/06/2019",
          name: "EVER CORREA OSPINA",
          sector: 13,
          lote: 685
        },
        {
          fecha: "25/06/2019",
          name: "MARTHA LUCIA QUINTERO MONTOYA",
          sector: 19,
          lote: "577A"
        },
        {
          fecha: "25/06/2019",
          name: "FAUSTO LOPEZ HINCAPIE",
          sector: 19,
          lote: "557A"
        },
        {
          fecha: "26/06/2019",
          name: "WILMER ADOLFO CORTES RAMIREZ",
          sector: 13,
          lote: 135
        },
        {
          fecha: "26/06/2019",
          name: "ADOLFO CORTES RAMIREZ",
          sector: 13,
          lote: 135
        },
        {
          fecha: "25/06/2019",
          name: "FAUSTO LOPEZ HINCAPIE",
          sector: 19,
          lote: "557A"
        },
        {
          fecha: "26/06/2019",
          name: "WILMER ADOLFO CORTES RAMIREZ",
          sector: 13,
          lote: 135
        },
        {
          fecha: "26/06/2019",
          name: "ADOLFO CORTES RAMIREZ",
          sector: 13,
          lote: 135
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
