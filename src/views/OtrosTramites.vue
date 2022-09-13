<template>
  <div>
    <v-layout style="width: 85%!important">
      <v-img class="img" :src="require('@/assets/tramites.png')"></v-img>
    </v-layout>

    <!-- ACTUALIZAR DATOS -->
    <div class="container">
      <p style="font-size: 18px; color: #666666;">
        <span>Si tiene sugerencias, dudas o quejas de alguno de nuestros servicios, no dude en contactarnos y con gusto le atenderemos y resolveremos todas sus inquietudes.</span>
      </p>

      <!-- FORMULARIO -->
      <v-card flat class="formstyle">
        <v-snackbar v-model="snackbar" absolute top right color="success">
          <span>Envío exitoso!</span>
          <v-icon dark>check_circle</v-icon>
        </v-snackbar>
        <div id="formtop" style="margin: 30px">
          <v-form ref="form" @submit.prevent="submit" v-model="valid">
            <v-container grid-list-xl fluid>
              <v-layout wrap>
                <v-flex xs12 sm6>
                  <v-text-field
                    v-model="form.nombre"
                    :rules="rules.nombre"
                    color="#12a19b"
                    label="Nombre completo *"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field
                    v-model="form.cedula"
                    :rules="rules.cedula"
                    color="#12a19b"
                    label="Cédula *"
                    mask="##########"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field
                    v-model="form.correo"
                    :rules="rules.correo"
                    color="#12a19b"
                    label="E-mail *"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field
                    v-model="form.telefono"
                    :rules="rules.telefono"
                    color="#12a19b"
                    label="Celular *"
                    mask="phone"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-textarea
                    v-model="form.observaciones"
                    :rules="rules.observaciones"
                    color="#12a19b"
                    required
                  >
                    <template v-slot:label>
                      <div>Escriba aquí su mensaje</div>
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
                <v-btn
                  :disabled="!this.form.nombre ||
              !this.form.cedula ||
              !this.form.correo ||
              !this.form.telefono ||
              !this.form.observaciones ||
              !this.form.terms"
                  type="submit"
                  class="fboton"
                >ENVIAR</v-btn>
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
import axios from "axios";
import env from "../env.js";
export default {
  data() {
    const defaultForm = Object.freeze({
      nombre: "",
      cedula: "",
      correo: "",
      telefono: "",
      obervaciones: "",
      terms: false
    });

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        correo: [
          v => !!v || "Este campo es requerido",
          v => /.+@.+/.test(v) || "El email debe ser válido"
        ],
        nombre: [val => (val || "").length > 0 || "Este campo es requerido"],
        cedula: [val => (val || "").length > 0 || "Este campo es requerido"],
        telefono: [val => (val || "").length > 0 || "Este campo es requerido"],
        obervaciones: [
          val => (val || "").length > 0 || "Este campo es requerido"
        ]
      },
      conditions: false,
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.`,
      snackbar: false,
      terms: false,
      defaultForm
    };
  },

  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },
    submit() {
      this.loader = true;
      axios
        .post(`${env.endpoint}tramites`, {
          nombre: this.form.nombre,
          cedula: this.form.cedula,
          email: this.form.correo,
          telefono: this.form.telefono,
          mensaje: this.form.observaciones
        })
        .then(res => {
          if (res.data.mensaje === "email enviado") {
            this.snackbar = true;
            this.$vuetify.goTo('#formtop', 0);
            this.loader = false;
          } else {
            this.loader = false;
            this.$vuetify.goTo('#formtop', 0);
            console.log("error");
          }
        });

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
@media screen and (max-width: 1000px) {
  .enter {
    margin-left: 40%;
  }
}
</style>
