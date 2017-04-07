<template>
  <div>
    <div class="offset-4" style="margin-bottom: 60px">
      <short-link-form></short-link-form>
    </div>


    <div clas="col-md-8">
      <short-url-list></short-url-list>
    </div>
  </div>

</template>

<script>
import Vue from 'vue'
import ShortLinkForm from './ShortLinkForm.vue'
import ShortUrlList from './index/List'

Vue.component('short-link-form', ShortLinkForm)

export default {
  name: 'Index',
  components: {ShortUrlList, ShortLinkForm},
  mounted () {
    let urls = ['http://ya.ru/', 'http://google.com', 'http://koenig-rb.ru/']

    for (let i = 0; i < urls.length; i++) {
      this.$store.commit('MINIMIZE_URL', urls[i])
    }
  }
}
</script>
