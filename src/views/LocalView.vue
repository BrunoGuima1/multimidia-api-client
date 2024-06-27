<template>
  <div>
  <h1 class="head">Personagens Dragon Ball</h1>

  <h4 class="type">Cartões</h4>

  <div class="container">
    <div v-for="wise in wises" :key="wise.id">
      <card-local :wise="wise"></card-local>
    </div>
  </div>

</div>
</template>

<script>
import CardLocal from '@/components/CardLocal.vue'


const API_URL = `http://localhost:3333/wise`

export default {
  data: () => ({
    name: '',
    wise: []


  }),
  methods: {
    async getWaywise () {
      const response = await fetch(API_URL)
      const data = await response.json()

      this.wise = data
    }
  },
  created() {
    this.getWaywise()
  },
  components: {
    CardLocal
  }
}
</script>

<style>
body {
  background-color: black;
}

.head {
  color: white
}


.type {
  color: red;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: center;
  text-shadow: 3px 3px 15px orange;
}


.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.card {
  background-color: orange;
  border-radius: 10px;
  margin: 20px;
  height: 250px;
  width: 250px;
  text-align: center;
  align-content: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.card-title {
  color: red;
  font-size: 20px;
  font-weight: bold;
  text-shadow: 1px 1px 5px black;
}

.card-description {
  font-size: 14px;
  text-align: start;
  padding-left: 50px;
}
</style>
