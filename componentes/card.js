export default {
    name: 'Card',
    props: {
        person: {
            type:   Object,
            required: true
        }
    },
    template: `
    <div class="card">
        <img :src="person.image" width="50" height="70">
        <p class="card-title">{{ person.name }}</p>
        <ul class="card-description">
          <li>Ki Base: {{ person.ki }}</li>
          <li>Ki Total: {{ person.maxKi }}</li>
          <li>Raça: {{ person.race }}</li>
          <li>Gênero: {{ person.gender }}</li>            
        </ul>
    </div>
    `
}
