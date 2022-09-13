import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import goTo from 'vuetify/lib/components/Vuetify/goTo'

import productsandservices from './views/productsandservices';
import Contenido from './components/Contenido';
import AboutUs from './views/AboutUs';
import Information from './views/Information';
import Inhumacion from './views/Inhumacion';
import ServiciosParque from './views/ServiciosParque';
import planesPrevision from './views/planesPrevision';
import PuntosDePago from './views/PuntosDePago';
import ServicioExequial from './views/ServicioExequial';
import InfoUniduelo from './views/InfoUniduelo';
import TitulosPrevision from './views/TitulosPrevision';
import Exhumacion from './views/Exhumacion';
import Psicologos from './views/Psicologos';
import Memorial from './views/Memorial';
import InformacionInteres from './views/InformacionInteres';
import usuarioniño from './views/usuarioniño';
import usuarioadultojoven from './views/usuarioadultojoven';
import usuarioadulto from './views/usuarioadulto';
import planmargarita from './views/planmargarita';
import planrosa from './views/planrosa';
import plangirasol from './views/plangirasol';
import planorquidea from './views/planorquidea';
import plansacerdotal from './views/plansacerdotal';
import plandiocesanasyparroquias from './views/plandiocesanasyparroquias';
import planmultiplan from './views/planmultiplan';
import planpermanencia from './views/planpermanencia';
import plangardenia from './views/plangardenia';
import planaleli from './views/planaleli';
import plancamelia from './views/plancamelia';
import titulotulipan from './views/titulotulipan';
import tituloazucena from './views/tituloazucena';
import tituloazalea from './views/tituloazalea';
import titulosservicios from './views/titulosservicios';
import beneficiosadicionales from './views/beneficiosadicionales'
import repatriacionxfallecimiento from './views/repatriacionxfallecimiento'
import segurodevida from './views/segurodevida'
import proteccionexequialmascotas from './views/proteccionexequialmascotas'
import asomavialiados from './views/asomavialiados'
import trasladonacional from './views/trasladonacional'
import cremacionderestos from './views/cremacionderestos'
import Cremacion from './views/Cremacion';
import Capilla from './views/Capilla';
import Capellania from './views/Capellania';
import ServicioCava from './views/ServicioCava';
import LaboratorioTanato from './views/LaboratorioTanato';
import MemorialAno from './views/MemorialAno';
import MemorialMes from './views/MemorialMes';
import InfoPrevia from './views/InfoPrevia';
import InfoPosterior from './views/InfoPosterior';
import MemorialInstitucional from './views/MemorialInstitucional';
import kiddeduelo from './views/kiddeduelo';
import articulo from './views/articulo';
import emisora from './views/emisora';
import Exhumaciones from './views/Exhumaciones';
import SedeAdministrativa from './views/SedeAdministrativa';
import SalaVelacion from './views/SalaVelacion';
import ParqueCementerio from './views/ParqueCementerio';
import PlanesPrevisionInfo from './views/PlanesPrevisionInfo';
import TitulosPrevisionInfo from './views/TitulosPrevisionInfo';
import ActualizarDatos from './views/ActualizarDatos';
import OtrosTramites from './views/OtrosTramites';
import Encuesta from './views/Encuesta';
import ObituariosSala from './views/ObituariosSala';
import ObituariosParque from './views/ObituariosParque';
import Sector1 from './views/sectores/Sector1';
import Sector2 from './views/sectores/Sector2';
import Sector3 from './views/sectores/Sector3';
import Sector4 from './views/sectores/Sector4';
import Sector5 from './views/sectores/Sector5';
import Sector6 from './views/sectores/Sector6';
import Sector7 from './views/sectores/Sector7';
import Sector8 from './views/sectores/Sector8';
import Sector9 from './views/sectores/Sector9';
import Sector10 from './views/sectores/Sector10';
import Sector11 from './views/sectores/Sector11';
import Sector12 from './views/sectores/Sector12';
import Sector13 from './views/sectores/Sector13';
import Sector14 from './views/sectores/Sector14';
import Sector15 from './views/sectores/Sector15';
import Sector16 from './views/sectores/Sector16';
import Sector17 from './views/sectores/Sector17';
import Sector18 from './views/sectores/Sector18';
import Sector19 from './views/sectores/Sector19';
import Sector20 from './views/sectores/Sector20';
import Sector21 from './views/sectores/Sector21';

Vue.use(Router)

const router= new Router({
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0

    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition){
      scrollTo = savedPosition.y
    }
    return goTo(scrollTo)
  },
  mode: 'history',
  routes: [
    {
      path: '/',
      // name: 'Home',
      component: Home,
      children: [
        {
          path: '/',
          component: Contenido,
        },
        {
          path: 'AboutUs',
          component: AboutUs
        },
        {
            path: 'productsandservices',
            component: productsandservices
        },
        {
          path: 'Planes-prevision_info',
          component: PlanesPrevisionInfo
        },
        {
          path: 'Information',
          component: Information
        },
        // servicio de inhumacion
        {
          path: 'Servicio_Inhumacion',
          component: Inhumacion
        },
        {
          path: 'Psicologos',
          component: Psicologos
        },
        {
          path: 'Memorial',
          component: Memorial
        },
        {
          path: 'usuarioniño',
          component: usuarioniño
        },
        {
          path: 'usuarioadultojoven',
          component: usuarioadultojoven
        },
        {
          path: 'usuarioadulto',
          component: usuarioadulto
        },
        {
          path: 'planmargarita',
          component: planmargarita
        },
        {
          path: 'planrosa',
          component: planrosa
        },
        {
          path: 'plangirasol',
          component: plangirasol
        },
        {
          path: 'planorquidea',
          component: planorquidea
        },
        {
          path: 'plansacerdotal',
          component: plansacerdotal
        },
        {
          path: 'plandiocesanasyparroquias',
          component: plandiocesanasyparroquias
        },
        {
          path: 'planmultiplan',
          component: planmultiplan
        },
        {
          path: 'planpermanencia',
          component: planpermanencia
        },
        {
          path: 'plangardenia',
          component: plangardenia
        },
        {
          path: 'planaleli',
          component: planaleli
        },
        {
          path: 'plancamelia',
          component: plancamelia
        },
        {
          path: 'titulotulipan',
          component: titulotulipan
        },
        {
          path: 'tituloazucena',
          component: tituloazucena
        },
        {
          path: 'tituloazalea',
          component: tituloazalea
        },
        {
          path: 'titulosservicios',
          component: titulosservicios
        },
        {
          path: 'beneficiosadicionales',
          component: beneficiosadicionales
        },
        {
          path: 'repatriacionxfallecimiento',
          component: repatriacionxfallecimiento
        },
        {
          path: 'segurodevida',
          component: segurodevida
        },
        {
          path: 'proteccionexequialmascotas',
          component: proteccionexequialmascotas
        },
        {
          path: 'asomavialiados',
          component: asomavialiados
        },
        {
          path: 'trasladonacional',
          component: trasladonacional
        },
        {
          path: 'cremacionderestos',
          component: cremacionderestos
        },
        {
          path: 'InformacionInteres',
          component: InformacionInteres
        },
        {
          path: 'ServiciosParque',
          component: ServiciosParque
        },
        {
          path: 'Planes-prevision',
          component: planesPrevision
        },
        {
          path: 'Puntos_De_Pago',
          component: PuntosDePago
        },
        {
          path: 'Servicios_Exequiales',
          component: ServicioExequial
        },
        {
          path: 'Info-Uniduelo',
          component: InfoUniduelo
        },
        {
          path: 'Titulos-prevision',
          component: TitulosPrevision
        },
        {
          path: 'servicio_Cremacion',
          component: Cremacion
        },
        {
          path: 'servicio_Exhumacion',
          component: Exhumacion
        },
        {
          path: 'Capilla_celebracion_SantaMisa',
          component: Capilla
        },
        {
          path: 'Servicio_Capellania',
          component: Capellania
        },
        {
          path: 'Servicio_Laboratorio-tanatopraxia',
          component: LaboratorioTanato
        },
        {
          path: 'Servicio-de-Cava',
          component: ServicioCava
        },
        {
          path: 'Memorial-del-a!o2019',
          component: MemorialAno
        },
        {
          path: 'Memorial-del-mes',
          component: MemorialMes
        },
        {
          path: 'Info-Previa-al-Fallecimiento',
          component: InfoPrevia
        },
        {
          path: 'Info-Posterior-al-Fallecimiento',
          component: InfoPosterior
        },
        {
          path: 'MemorialInstitucional',
          component: MemorialInstitucional
        },
        {
          path: 'kiddeduelo',
          component: kiddeduelo
        },
        {
          path: 'articulo',
          component: articulo
        },
        {
          path: 'emisora',
          component: emisora
        },
        // tabla exhumaciones del mes 
        {
          path: 'Exhumaciones-del-Mes',
          component: Exhumaciones
        },
        {
          path: 'Sede-administrativa',
          component: SedeAdministrativa
        },
        {
          path: 'Sede-Parque-cementerio',
          component: ParqueCementerio
        },
        {
          path: 'Sede-Sala-Velacion',
          component: SalaVelacion
        },
        {
          path: 'Actualizar-datos',
          component: ActualizarDatos
        },
        {
          path: 'Otros-tramites',
          component: OtrosTramites
        },
        {
          path: 'Encuesta-satisfaccion',
          component: Encuesta
        },
        {
          path: 'Servicios-Sala-Velacion',
          component: ObituariosSala
        },
        {
          path: 'Servicios-Parque-Cementerio',
          component: ObituariosParque
        },
        {
          path: 'Titulos-prevision_info',
          component: TitulosPrevisionInfo
        },
        {
          path: 'Sector_Achiras',
          component: Sector1
        },
        {
          path: 'Sector_Anturios',
          component: Sector2
        },
        {
          path: 'Sector_Azaleas',
          component: Sector3
        },
        {
          path: 'Sector_Calendulas',
          component: Sector4
        },
        {
          path: 'Sector_EspinaDe_Cristo',
          component: Sector5
        },
        {
          path: 'Sector_Lirios',
          component: Sector6
        },
        {
          path: 'Sector_Alelies',
          component: Sector7
        },
        {
          path: 'Sector_Ginger',
          component: Sector8
        },
        {
          path: 'Sector_Heliconias',
          component: Sector9
        },
        {
          path: 'Sector_Hibiscus',
          component: Sector10
        },
        {
          path: 'Sector_Hortensias',
          component: Sector11
        },
        {
          path: 'Sector_Lantanas',
          component: Sector12
        },
        {
          path: 'Sector_Rosas',
          component: Sector13
        },
        {
          path: 'Sector_Toscanas',
          component: Sector14
        },
        {
          path: 'Sector_Orquideas',
          component: Sector15
        },
        {
          path: 'Sector_Veraneras',
          component: Sector16
        },
        {
          path: 'Sector_Camelias',
          component: Sector17
        },
        {
          path: 'Sector_Vincas',
          component: Sector18
        },
        {
          path: 'Sector_Girasoles',
          component: Sector19
        },
        {
          path: 'Sector_Margaritas',
          component: Sector20
        },
        {
          path: 'Sector_Gardenias',
          component: Sector21
        },
      ]
    },
    
  ]
});

export default (router)