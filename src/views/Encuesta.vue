<template>
  <div>
    <div>
      <h1 class="large-font" style="color:#12A19B;">
        <h4>Encuesta de Satisfacción</h4>
      </h1>
      <div class="container3">
        <p align=" justify" style="font-size: 18px; color: #70706e">
          <span><p>Reconocemos la importancia de la opinión de cada uno de nuestros clientes, por este motivo nos interesa que califique la calidad de nuestros servicios.</p></span>
        </p>
      </div>
    </div>
    <!-- FORMULARIO -->
    <div class="container">
      <v-card flat class="formstyle">
        <v-snackbar v-model="snackbar" absolute top right color="success">
          <span>Envío exitoso!</span>
          <v-icon dark>check_circle</v-icon>
        </v-snackbar>
        <div style="margin: 30px">
        <v-form ref="form" @submit.prevent="submit" v-model="valid">
          <v-container grid-list-xl fluid>
            <v-layout wrap>
              <!-- date picker -->
              <v-flex xs12 sm6>
                <v-dialog
                  ref="dialog"
                  v-model="modal"
                  :return-value.sync="date"
                  persistent
                  lazy
                  full-width
                  width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="form.date"
                      label="Fecha del servicio"
                      prepend-icon="event"
                      readonly
                      color="#12A19B"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="form.date" scrollable color="#12A19B" locale="es-col">
                    <v-spacer></v-spacer>
                    <v-btn flat color="#12A19B" @click="modal = false">Cancel</v-btn>
                    <v-btn flat color="#12A19B" @click="$refs.dialog.save(form.date)">OK</v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-flex>
              <!-- campos -->
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="form.nombre"
                  :rules="rules.nombre"
                  color="#12a19b"
                  label="Nombre del fallecido"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="form.nombre1"
                  :rules="rules.nombre1"
                  color="#12a19b"
                  label="Nombre de quien realiza la encuesta"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="form.parentezco"
                  :rules="rules.parentezco"
                  color="#12a19b"
                  label="Parentezco"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="form.telefono"
                  :rules="rules.telefono"
                  color="#12a19b"
                  label="Teléfono"
                  mask="social"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="form.ciudad"
                  :rules="rules.ciudad"
                  color="#12a19b"
                  label="Ciudad"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <p style="font-size: 20px; color: #666666">
                  <span>A continuación seleccione regular <b>(R)</b>, bueno <b>(B)</b> o excelente <b>(E)</b>, según considere:</span>
                </p>
              </v-flex>
              <!-- ATENCION INICIAL -->
              <v-flex xs12>
                <div class="questions">
                  <p align="justify" style="font-size: 20px; color: #666666">
                    <span>
                      <b>Atención inicial</b>
                    </span>
                  </p>
                  <v-radio-group v-model="inicial1" column>
                    <a
                      align="justify"
                      style="font-size: 20px; color: #666666;"
                    >¿Traslado del fallecido?</a>

                    <b>
                      <v-radio label="R" value="Regular" class="radio"></v-radio>
                    </b>
                    <b>
                      <v-radio label="B" value="Bueno" class="radio"></v-radio>
                    </b>
                    <b>
                      <v-radio label="E" value="Excelente" class="radio"></v-radio>
                    </b>
                  </v-radio-group>
                  <v-radio-group v-model="inicial2" column>
                    <a
                      align="justify"
                      style="font-size: 20px; color: #666666;"
                    >¿Preservación del cuerpo?</a>

                    <b>
                      <v-radio label="R" value="Regular" class="radio"></v-radio>
                    </b>
                    <b>
                      <v-radio label="B" value="Bueno" class="radio"></v-radio>
                    </b>
                    <b>
                      <v-radio label="E" value="Excelente" class="radio"></v-radio>
                    </b>
                  </v-radio-group>
                  <v-divider color="#666666"></v-divider>
                </div>
              </v-flex>
              <!-- FAMILIARES -->
              <v-flex xs12>
                <div class="questions">
                  <p align="justify" style="font-size: 20px; color: #666666">
                    <span>
                      <b>Atención a familiares y amigos</b>
                    </span>
                  </p>
                  <v-radio-group v-model="familiares1" column>
                    <a
                      align="justify"
                      style="font-size: 20px; color: #666666;"
                    >¿En la cafetería?</a>

                    <b>
                      <v-radio label="R" value="Regular" class="radio"></v-radio>
                    </b>
                    <b>
                      <v-radio label="B" value="Bueno" class="radio"></v-radio>
                    </b>
                    <b>
                      <v-radio label="E" value="Excelente" class="radio"></v-radio>
                    </b>
                  </v-radio-group>
                  <v-radio-group v-model="familiares2" column>
                    <a
                      align="justify"
                      style="font-size: 20px; color: #666666;"
                    >¿En la administración?</a>

                    <b>
                      <v-radio label="R" value="Regular" class="radio"></v-radio>
                    </b>
                    <b>
                      <v-radio label="B" value="Bueno" class="radio"></v-radio>
                    </b>
                    <b>
                      <v-radio label="E" value="Excelente" class="radio"></v-radio>
                    </b>
                  </v-radio-group>
                  <v-radio-group v-model="familiares3" column>
                    <a
                      align="justify"
                      style="font-size: 20px; color: #666666;"
                    >¿Del asesor?</a>

                    <b>
                      <v-radio label="R" value="Regular" class="radio"></v-radio>
                    </b>
                    <b>
                      <v-radio label="B" value="Bueno" class="radio"></v-radio>
                    </b>
                    <b>
                      <v-radio label="E" value="Excelente" class="radio"></v-radio>
                    </b>
                  </v-radio-group>
                  <v-divider color="#70706e"></v-divider>
                </div>
              </v-flex>
              <!-- LIMPIEZA INSTALACIONES -->
              <v-flex xs12>
                <div class="questions">
                  <p align="justify" style="font-size: 20px; color: #666666">
                    <span>
                      <b>Estado de limpieza en las instalaciones</b>
                    </span>
                  </p>
                  <v-radio-group v-model="instalaciones1" column>
                    <a
                      align="justify"
                      style="font-size: 20px; color: #666666;"
                    >¿En la sala?</a>

                    <b>
                      <v-radio label="R" value="Regular" class="radio"></v-radio>
                    </b>
                    <b>
                      <v-radio label="B" value="Bueno" class="radio"></v-radio>
                    </b>
                    <b>
                      <v-radio label="E" value="Excelente" class="radio"></v-radio>
                    </b>
                  </v-radio-group>
                  <v-radio-group v-model="instalaciones2" column>
                    <a
                      align="justify"
                      style="font-size: 20px; color: #666666; "
                    >¿En los baños?</a>

                    <b>
                      <v-radio label="R" value="Regular" class="radio"></v-radio>
                    </b>
                    <b>
                      <v-radio label="B" value="Bueno" class="radio"></v-radio>
                    </b>
                    <b>
                      <v-radio label="E" value="Excelente" class="radio"></v-radio>
                    </b>
                  </v-radio-group>
                  <v-radio-group v-model="instalaciones3" column>
                    <a
                      align="justify"
                      style="font-size: 20px; color: #666666;"
                    >¿En las áreas comunes?</a>

                    <b>
                      <v-radio label="R" value="Regular" class="radio"></v-radio>
                    </b>
                    <b>
                      <v-radio label="B" value="Bueno" class="radio"></v-radio>
                    </b>
                    <b>
                      <v-radio label="E" value="Excelente" class="radio"></v-radio>
                    </b>
                  </v-radio-group>
                  <v-divider color="#70706e"></v-divider>
                </div>
              </v-flex>
              <v-flex xs12>
                <v-textarea
                  v-model="form.observaciones"
                  :rules="rules.observaciones"
                  color="#12a19b"
                  required
                >
                  <template v-slot:label>
                    <div><b>Observaciones</b><small> (Escriba aquí su mensaje)</small>
                    </div>
                  </template>
                </v-textarea>
              </v-flex>
              <v-flex xs12>
                <v-checkbox v-model="form.terms" color="green">
                  <template v-slot:label>
                    <div @click.stop>
                      Al enviar la actualización de sus datos acepta los términos de nuestra
                      <a
                        href="https://75077623.000webhostapp.com/POLITICA%20DE%20TRATAMIENTO%20DE%20DATOS%20PERSONALES-PARA%20LINK.pdf" target="_blank"
                        class="fe"
                      >política de protección de datos personales.</a>
                    </div>
                  </template>
                </v-checkbox>
              </v-flex>
            </v-layout>
          </v-container>

          <v-card-actions>
            <div class="enter">
              <v-btn :enabled="!this.form.nombre ||
        !this.form.barrio ||
        !this.form.cedula ||
        !this.form.correo ||
        !this.form.ciudad ||
        !this.form.direccion ||
        !this.form.celular ||
        !this.form.telefono ||
        !this.form.terms " type="submit" class="fboton">ENVIAR</v-btn>
            </div>
          </v-card-actions>
        </v-form>
        </div>
        <v-dialog v-model="terms" width="70%">
          <v-card>
            <v-card-title class="title">Terms</v-card-title>
            <v-card-text v-for="n in 5" :key="n">{{ content }}</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat color="purple" @click="terms = false">Ok</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="conditions" width="70%">
          <v-card>
            <v-card-title class="title">Conditions</v-card-title>
            <v-card-text v-for="n in 5" :key="n">{{ content }}</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat color="purple" @click="conditions = false">Ok</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card>
    </div>
    <v-dialog
      v-model="loader"
      hide-overlay
      persistent
      width="300"
    >
      <v-card
        color="#12a19b"
        dark
      >
        <v-card-text>
          Por favor espere...
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
 
  </div>
</template>

<script>
import axios from 'axios';
import env from '../env.js';
export default {
  data() {
    const defaultForm = Object.freeze({
      nombre: "",
      nombre1: "",
      parentezco: "",
      ciudad: "",
      telefono: "",
      observaciones: ""
    });

    return {
      loader: false,
      form: Object.assign({}, defaultForm),
      rules: {
        nombre: [val => (val || "").length > 0 || "Este campo es requerido"],
        nombre1: [val => (val || "").length > 0 || "Este campo es requerido"],
        parentezco: [
          val => (val || "").length > 0 || "Este campo es requerido"
        ],
        ciudad: [val => (val || "").length > 0 || "Este campo es requerido"],
        telefono: [val => (val || "").length > 0 || "Este campo es requerido"]
      },
      conditions: false,
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.`,
      snackbar: false,
      terms: false,
      date: new Date().toISOString().substr(0, 10),
      modal: false,
      inicial1: null,
      inicial2: null,
      familiares1: null,
      familiares2: null,
      familiares3: null,
      instalaciones1: null,
      instalaciones2: null,
      instalaciones3: null,
      defaultForm
    };
  },

  computed: {
    formIsValid() {
      return (
        this.form.nombre &&
        this.form.cedula &&
        this.form.correo &&
        this.form.telefono &&
        this.form.terms
      );
    }
  },

  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },
    submit() {
      this.loader = true;
      axios.post(`${env.endpoint}encuesta`, {
        fecha: this.date,
        nombreFallecido: this.form.nombre,
        nombre: this.form.nombre1,
        parentezco: this.form.parentezco,
        telefono: this.form.telefono,
        ciudad: this.form.ciudad,
        traslado: this.inicial1,
        preservacion: this.inicial2,
        cafeteria: this.familiares1,
        administracion: this.familiares2,
        asesor: this.familiares3,
        sala: this.instalaciones1,
        banos: this.instalaciones2,
        areasComunes: this.instalaciones3,
        observaciones: this.form.observaciones
      })
      .then( res => {
        
        if(res.data.mensaje === "email enviado"){
          this.snackbar = true;
          this.$vuetify.goTo(0, 0);
          this.loader = false;
        }
        else {
          this.loader = false;
          this.$vuetify.goTo(0, 0);
          console.log('error')
        }
      })
      this.resetForm();
    }
  }
};
</script>

<style>
.formstyle {
  border: solid 2px;
  border-color: #e8ac09 !important;
  border-radius: 25px;
  opacity: 0.8;
}
.formstyle:hover {
  border-color: #12a19b !important;
}
.enter {
  margin-left: 46%;
}
.fe {
  text-decoration-color: #12a19b !important;
  color: #12a19b !important;
}
.radio {
  margin-top: 5px;
}
.container3 {
  margin-top: 20px;
  width: 68%;
}
.questions{
  margin-left: 90px;
}
@media screen and (max-width: 1000px) {
  .enter {
    margin-left: 40%;
  }
  .questions{
    margin-left: 8px;
  }
}
</style>
