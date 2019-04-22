<template>
  <div>
    <h1>Sports API</h1>
    <button type="button" @click="fetchStandings">Get sports API data</button><br>
    <div>{{ standings }}</div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "sportsapi",
    data() {
      return {
        standings: [],
      }
    },
    methods: {
      fetchStandings(){
        axios.get('https://api.mysportsfeeds.com/v1.1/pull/nfl/2018-regular/overall_team_standings.json',
          {
            auth: {
              username: 'c5fa253b-b758-4a63-b92f-7edc6e',
              password: '4i)JhNC6bdn2Gj'
            }
          }
        )
          .then(response => {
            this.standings = response.data
          })
          .catch(e => {
            console.log(e)
          })
      }
    }
  }
</script>


