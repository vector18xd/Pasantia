<template>
  <div>
    <Toolbar/>
    <main>
    <Tab />
    <br>
    <center>
      <router-view to="children"></router-view>
    </center>

    </main>
    <hr size="8" color="#E8AC09">
    <Footer/>
  </div>
</template>

<script>
import Toolbar from "../components/Toolbar";
import Footer from "../components/Footer";
import Contenido from "../components/Contenido";
import Tab from "../components/Tab";

export default {
  components: {
    Toolbar,
    Tab,
    Footer
  }
};
</script>

<style >
main{
  background: url(../assets/imagenfondo.png) no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;

  -webkit-background-size: cover;
  -moz-background-size: cover;
  -moz-background-size: cover;

}




</style>