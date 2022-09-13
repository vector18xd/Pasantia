<template>
  <div>
    <!-- PLANES DE PREVISION -->
    <div>
      <h1 class="large-font" style="color:#12A19B;">
        <h4>Sede Administrativa de la Fundación</h4>
      </h1>
    </div>

    <br>
    
    <v-carousel interval="4500" class="slider1" hide-controls>
      <v-carousel-item  v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>
   
    <div class="text-xs-right">
      <v-btn class="fboton elevation-8 positionbtn" to="AboutUs">
        <strong>REGRESAR</strong>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("@/assets/admin.png")
        },
        {
          src: require("@/assets/admin2.png")
        },
        {
          src: require("@/assets/admin2.png")
        },
        {
          src: require("@/assets/admin2.png")
        },
        {
          src: require("@/assets/admin1.png")
        }
      ]
    };
  }
};
</script>

<style>
.positionbtn {
  margin-right: 45px;
  margin-bottom: 30px;
  margin-top: 25px;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.87;
  position: absolute;
  width: 100%;
}
.estilohover {
  height: 100%;
  font-size: 25px;
}
.column-6 {
  float: left;
  width: 33.33333%;
  padding: 10px;
}
.img2 {
  width: 380px !important;
  height: auto !important;
  border-radius: 10px !important;
  margin-bottom: 8px !important;
}
.img2:hover {
  transform: scale(1.02);
  -webkit-box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.36);
  -moz-box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.36);
  box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.36);
}
.positionbtn {
  margin-right: 45px;
  margin-bottom: 45px;
}
.widthCard {
  width: 90% !important;
}
.slider1{
  width: 1200px !important;
  height: 500px !important;
   border-radius: 5px;
}
@media screen and (max-width: 1000px) {
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
}
</style>
