    <template>
  <div>
    <!-- TABLA EXHUMACIONES -->
    <div class="container">
      <v-card>
        <v-card-title class="tabla tabla1">
          <v-spacer>
              <h2 style="color: #12a19b">Memorial Institucional Año 2020</h2>
          </v-spacer>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="desserts"
          hide-actions
          class="elevation-6 tabla tabla1"
        >
          <template v-slot:items="props">
            <td class="text-xs-center tabla">{{ props.item.Numero}}</td>
            <td class="text-xs-center tabla">{{ props.item.Fecha}}</td>
            <td class="text-xs-center tabla">{{ props.item.Hora}}</td>
            <td class="text-xs-center tabla">{{ props.item.Tema}}</td>
            <td class="text-xs-center tabla">{{ props.item.Santo}}</td>
          </template>
        </v-data-table>
      </v-card>
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
        { text: "NUMERO", align: "center", sortable: false, value: "numero" },
        { text: "FECHA", align: "center", sortable: false, value: "fecha" },
        { text: "HORA", align: "center", sortable: false, value: "hora" },
        { text: "TEMA", align: "center", sortable: false, value: "tema" },
        { text: "SANTO", align: "center", sortable: false, value: "santo" }
      ],
      desserts: [
        {
          Numero: 1,
          Fecha: "25/01/2020",
          Hora: "11:00 AM",
          Tema: "MEMORIAL A LAS VICTIMAS DEL TERREMOTO",
          Santo: "SAN PABLO EL APÓSTOL"
        },
        {
          Numero: 2,
          Fecha: "23/02/2020",
          Hora: "11:00 AM",
          Tema: "MEMORIAL A LOS MIGRANTES",
          Santo: "SAN TORIBIO ROMO GONZÁLEZ"
        },
        {
          Numero: 3,
          Fecha: "29/03/2020",
          Hora: "11:00 AM",
          Tema: "MEMORIAL A LAS VICTIMAS DEL ABORTO",
          Santo: "NUESTRA SEÑORA DE LA DULCE ESPERA"
        },
        {
          Numero: 4,
          Fecha: "26/04/2020",
          Hora: "11:00 AM",
          Tema: "MEMORIAL A LOS PROFESIONALES DE LA SALUD",
          Santo: "SAN CAMILO DE LELIS"
        },
        {
          Numero: 5,
          Fecha: "10/05/20",
          Hora: "11:00 AM",
          Tema: "MEMORIAL A LAS MADRES",
          Santo: "SANTA ISABEL "
        },
        {
          Numero: 6,
          Fecha: "14/06/20",
          Hora: "11:00 AM",
          Tema: "MEMORIAL A LOS PADRES",
          Santo: "SAN JOSÉ "
        },
        {
          Numero: 7,
          Fecha: "26/07/2020",
          Hora: "11:00 AM",
          Tema: "MEMORIAL A LOS SACERDOTES Y A LOS RELIGIOSOS",
          Santo: "SAN JUAN MARÍA VIANNEY"
        },
        {
          Numero: 8,
          Fecha: "30/08/2020",
          Hora: "11:00 AM",
          Tema: "MEMORIAL A LOS ADULTOS MAYORES",
          Santo: "SAN JOAQUÍN Y SANTA ANA"
        },
        {
          Numero: 9,
          Fecha: "13/09/2020",
          Hora: "11:00 AM",
          Tema: "MEMORIAL A LAS VICTIMAS DEL SUICIDIO",
          Santo: "PAPA SAN JUAN PABLO SEGUNDO "
        },
        {
          Numero: 10,
          Fecha: "18/10/2020",
          Hora: "11:00 AM",
          Tema: "MEMORIAL A LOS HABITANTES DE LA CALLE",
          Santo: "SAN BENIRO JOSÉ LABRE "
        },
        {
          Numero: 11,
          Fecha: "02/11/2020",
          Hora: "04:00 PM",
          Tema: "MEMORIAL A LOS FIELES DIFUNTOS",
          Santo: "SAN NICOLÁS DE TOLENTINO "
        },
        {
          Numero: 12,
          Fecha: "07/12/2020",
          Hora: "06:00 PM",
          Tema: "MEMORIAL A LA INMACULADA CONCEPCIÓN DE MARÍA ",
          Santo: "VIRGEN MARÍA "
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
  border-collapse: collapse;
}
.tabla1 {
  border-right: solid 1px;
  border-color: #12a19b;
}
.lidecoration {
  list-style: decimal;
}
</style>
