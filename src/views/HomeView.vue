<template>
  <div class="container pt-3">
    <h1> REST API <span v-if="loading" style="font-size: 12px" class="text-white">Loading please wait...</span></h1>
    <p></p>

    <div class="row">
      <div class="col-12">
        <form action="">

          <div class="row">
            <div class="col-6">

              <h3> Info Stazione </h3>
              <div class="mb-3">
                <label for="Operatore" class="form-label">Operatore</label>
                <input type="text" class="form-control" id="Operatore" v-model="operatore" placeholder="Example input placeholder">
              </div>
              <div class="mb-3">
                <label for="Sito Operatore" class="form-label">Sito Operatore</label>
                <input type="url" class="form-control" id="Sito Operatore" v-model="sito_operatore" placeholder="Another input placeholder">
              </div>
              <div class="mb-3">
                <label for="ID_Stazione" class="form-label">ID Stazione</label>
                <input type="number" class="form-control" id="ID Stazione" v-model="id_stazione" placeholder="Another input placeholder">
              </div>
              <div class="mb-3">
                <label for="Nome_Stazione" class="form-label">Nome Stazione</label>
                <input type="text" class="form-control" id="Nome_Stazione" v-model="stations.nome_stazione" placeholder="Another input placeholder">
              </div>
              <div class="mb-3">
                <label for="CAP" class="form-label">CAP</label>
                <input type="text" class="form-control" id="CAP" v-model="stations.cap" placeholder="Example input placeholder">
              </div>
              <div class="mb-3">
                <label for="LAT" class="form-label">LAT</label>
                <input type="text" class="form-control" id="LAT" v-model="stations.lat" placeholder="Another input placeholder">
              </div>
              <div class="mb-3">
                <label for="LNG" class="form-label">LNG</label>
                <input type="text" class="form-control" id="LNG" v-model="stations.lng" placeholder="Example input placeholder">
              </div>
              <div class="mb-3">
                <label for="Tipo_Indirizzo" class="form-label">Tipo Indirizzo</label>
                <input type="text" class="form-control" id="Tipo Indirizzo" v-model="stations[0].tipo_indirizzo" placeholder="Another input placeholder">
              </div>
              <div class="mb-3">
                <label for="Indirizzo" class="form-label">Indirizzo</label>
                <input type="text" class="form-control" id="Indirizzo" v-model="stations[0].indirizzo" placeholder="Example input placeholder">
              </div>
              <div class="mb-3">
                <label for="Comune" class="form-label">Comune</label>
                <input type="text" class="form-control" id="Comune" v-model="stations[0].comune" placeholder="Another input placeholder">
              </div>
              <div class="mb-3">
                <label for="Regione" class="form-label">Regione</label>
                <input type="text" class="form-control" id="Regione" v-model="stations[0].regione" placeholder="Example input placeholder">
              </div>
               <div class="mb-3">
                <label for="Provincia" class="form-label">Provincia</label>
                <input type="text" class="form-control" id="Provincia" v-model="stations[0].Provincia" placeholder="Example input placeholder">
              </div>
              <div class="mb-3">
                <label for="Sostenibilita" class="form-label">Sostenibilita</label>
                <input type="text" class="form-control" id="Sostenibilita" placeholder="Another input placeholder">
              </div>
              <div class="mb-3">
                <label for="Disponibilita_Stazione" class="form-label">Disponibilita Stazione</label>
                <input type="text" class="form-control" id="Disponibilità Stazione" placeholder="Example input placeholder">
              </div>
              <div class="mb-3">
                <label for="Accessibilita_Stazione" class="form-label">Accessibilita Stazione</label>
                <input type="text" class="form-control" id="Accessibilita Stazione" placeholder="Another input placeholder">
              </div>

            </div>
            <div class="col-6">
              <div class="mb-3">
                <h3> Punti Prelievo </h3>
                <label for="ID_Punto_Prelievo" class="form-label">ID Punto Prelievo</label>
                <input type="text" class="form-control" id="ID Punto Prelievo" v-model="stations[0].punti_prelievo[0].id_punto_prelievo" placeholder="Example input placeholder">
              </div>
              <div class="mb-3">
                <label for="Tipologia_Punto_Prelievo_Energia" class="form-label">Tipologia Punto Prelievo Energia</label>
                <input type="text" class="form-control" id="Tipologia Punto Prelievo Energia" v-model="stations[0].punti_prelievo[0].Tipologia_Punto_Prelievo_Energia" placeholder="Another input placeholder">
              </div>
              <div class="mb-3">
                <label for="Potenza_Punto_Prelievo_Energia" class="form-label">Potenza Punto Prelievo Energia</label>
                <input type="text" class="form-control" id="Potenza Punto Prelievo Energia"
                       placeholder="Example input placeholder">

              </div>
            </div>
          </div>

        </form>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'HomeView',
  data() {
    return {
      loading:false,
      operatore: "",
      sito_operatore: "",
      stations: [
        {
          id_stazione: "",
          nome_stazione: "",
          cap: "",
          lat: "",
          lng: "",
          tipo_indirizzo: "",
          indirizzo: "",
          comune: "",
          regione: "",
          provincia: "",
          sostenibilita: "",
          disponibilità_stazione: "",
          accessibilità_stazione: "",
          punti_prelievo: [
            {
              id_punto_prelievo: "",
              tipologia_punto_prelievo_energia: "",
              potenza_punto_prelievo_energia: ""
            },
            {
              id_punto_prelievo: "",
              tipologia_punto_prelievo_energia: "",
              potenza_punto_prelievo_energia: ""
            }
          ]
        }
      ]
    }
  },
  created() {

  },
  async mounted() {
    this.loading = true
    //let key = 'AIzaSyBxHDaCvAVicJ58EnSc7viLNE9SVJhD9L0'
    //let id_file = '13lIPOGH3Wm3VEOqp7UbubBTCL3nE24gY'

    try{
     // await axios.get('https://www.googleapis.com/drive/v3/files/' + id_file + '/?alt=media&key=' + key ).then(async (response) => {
        await axios.get('https://api-campione.ioncordun.workers.dev' ).then(async (response) => {
        let data = response.data
        console.log(data)
        this.operatore = data.operatore
        this.sito_operatore = data.sito_operatore
        
        this.stations[0].id_stazione = data.stations[0].id_stazione
        this.stations[0].nome_stazione = data.stations[0].nome_stazione
        this.stations[0].cap = data.stations[0].cap
        this.stations[0].lat = data.stations[0].lat
        this.stations[0].lng = data.stations[0].lng
        this.stations[0].tipo_indirizzo = data.stations[0].tipo_indirizzo
        this.stations[0].indirizzo = data.stations[0].indirizzo
        this.stations[0].comune = data.stations[0].comune
        this.stations[0].regione = data.stations[0].regione
        this.stations[0].provincia = data.stations[0].provincia
        this.stations[0].sostenibilita = data.stations[0].sostenibilita
        this.stations[0].disponibilita_stazione = data.stations[0].disponibilita_stazione
        this.stations[0].accessibilita_stazione = data.stations[0].accessibilita_stazione

          
          
          
          
          
          
          

        console.log(data.stations[0].punti_prelievo[0]);
        this.stations[0].punti_prelievo[0].id_punto_prelievo = data.stations[0].punti_prelievo[0].id_punto_prelievo
        console.log(data.stations[0].punti_prelievo[0].tipologia_punto_prelievo_energia);
        this.stations[0].punti_prelievo[0].tipologia_punto_prelievo_energia = data.stations[0].punti_prelievo[0].tipologia_punto_prelievo_energia
        console.log(data.stations[0].punti_prelievo[0].potenza_punto_prelievo_energia);
        this.stations[0].punti_prelievo[0].potenza_punto_prelievo_energia = data.stations[0].punti_prelievo[0].potenza_punto_prelievo_energia


        this.loading = false
      })
    }catch(e){
      console.log(e)
    }

    //await axios.get(ip_url).then(async (response) => {
    console.log('mounted')
  },
  setup() {
    console.log('setup')
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
