<template>
  <table class="table">
    <thead>
    <tr style="width: 50%">
      <th>
        Оригинальный урл
      </th>
      <th style="width: 50%">
        Укороченный урл
      </th>
    </tr>
    </thead>
    <tbody>
      <tr v-for="url in urls">
        <td>
          {{url.url}}
        </td>
        <td>
          {{url.short}}
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
  export default {
    name: 'short-url-list',
    computed: {
      urls: function () {
        return this.$store.state.urls
      }
    }
  }
</script>
