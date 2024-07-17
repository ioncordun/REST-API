<template>
  <div class="container pt-3">
    <h1> REST API <span v-if="loading" style="font-size: 12px" class="text-white">Loading please wait...</span></h1>
    <p></p>

    <div class="row">
      <div class="col-12">
        <form action="">

          <div class="row">
            <div class="col-6">

              <h3> Info Statione </h3>
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
                <input type="text" class="form-control" id="ID_Stazione" v-model="stations.id_stazione" placeholder="Another input placeholder">
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
                <input type="text" class="form-control" id="Tipo Indirizzo" v-model="stations.tipo_indirizzo" placeholder="Another input placeholder">
              </div>
              <div class="mb-3">
                <label for="Indirizzo" class="form-label">Indirizzo</label>
                <input type="text" class="form-control" id="Indirizzo" placeholder="Example input placeholder">
              </div>
              <div class="mb-3">
                <label for="Comune" class="form-label">Comune</label>
                <input type="text" class="form-control" id="Comune" placeholder="Another input placeholder">
              </div>
              <div class="mb-3">
                <label for="Regione" class="form-label">Regione</label>
                <input type="text" class="form-control" id="Regione" placeholder="Example input placeholder">
              </div>
              <div class="mb-3">
                <label for="Sostenibilita" class="form-label">Sostenibilita</label>
                <input type="text" class="form-control" id="Sostenibilita" placeholder="Another input placeholder">
              </div>
              <div class="mb-3">
                <label for="Disponibilità_Stazione" class="form-label">Disponibilità Stazione</label>
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
                <input type="text" class="form-control" id="ID Punto Prelievo" placeholder="Example input placeholder">
              </div>
              <div class="mb-3">
                <label for="Tipologia_Punto_Prelievo_Energia" class="form-label">Tipologia Punto Prelievo Energia</label>
                <input type="text" class="form-control" id="Tipologia Punto Prelievo Energia"
                       placeholder="Another input placeholder">
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
    try{
    await axios.get('https://www.googleapis.com/drive/v3/files/1FLZ-VAQ2-hZWF7F0jG2PjkYbmAO0Q9ad/?alt=media&key=AIzaSyAtrAauy0Bta4uFJ26-cAl6EYojzQ8V4O8').then(async (response) => {
      let data = response.data
      console.log(data)
      this.operatore = data.operatore
      this.sito_operatore = data.sito_operatore

      this.stations.id_stazione = data.id_stazione
      this.stations.nome_stazione = data.nome_stazione
      this.stations.tipo_indirizzo = data.stations.tipo_indirizzo??'missing'
      this.stations.cap = data.cap
      this.stations.lat = data.lat
      this.stations.lng = data.lng

      /*
          stations: [
        {
          id_stazione: "*********",
          nome_stazione: "*********",
          cap: " *********",
          lat: "*********",
          lng: "*********",
          tipo_indirizzo: "via",
          indirizzo: "*********",
          comune: "*********",
          regione: "Lombardia",
          provincia: "** ",
          sostenibilita: "*********",
          disponibilità_stazione: "*********",
          accessibilità_stazione: " *********",
          punti_prelievo: [
            {
              id_punto_prelievo: "*********",
              tipologia_punto_prelievo_energia: "**",
              potenza_punto_prelievo_energia: "*"
            },
            {
              id_punto_prelievo: "*********",
              tipologia_punto_prelievo_energia: "**",
              potenza_punto_prelievo_energia: "**"
            }
          ]
        }
        */
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
