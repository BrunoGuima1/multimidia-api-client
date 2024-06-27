<template>

    <div class="card">
        <img :src="person.image" width="50" height="70">
        <p class="card-title">{{ wise.name }}</p>
        <ul class="card-description">
          <li>Ki Base: {{ wise.ki }}</li>
          <li>Ki Total: {{ wise.maxKi }}</li>
          <li>Raça: {{ wise.race }}</li>
          <li>Gênero: {{ wise.gender }}</li>            
        </ul>
    </div>
</template>

<script>
 export default {
    name: 'CardLocal',
    props: {
        wise: {
            type:   Object,
            required: true
        }
    },
   
}

</script>

<style>

</style>