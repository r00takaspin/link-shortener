<template>
  <div class="col-lg-6">
    <div class="input-group">
      <input type="text" class="form-control" v-model="url" placeholder="Ссылка">
      <span class="input-group-btn">
        <button class="btn btn-primary" type="button" v-on:click="minimizeUrl">Укротить</button>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'short-link-url',
    data () {
      return {
        url: ''
      }
    },
    methods: {
      minimizeUrl () {
        this.$store.commit('MINIMIZE_URL', this.url)
      }
    }
  }
</script>
