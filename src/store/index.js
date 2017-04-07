import Vue from 'vue'
import Vuex from 'vuex'
import crypto from 'crypto'

Vue.use(Vuex)

const URL = 'http://localhost:8080/'

export default new Vuex.Store({
  state: {
    urls: []
  },
  mutations: {
    MINIMIZE_URL (state, url) {
      let hash = crypto.randomBytes(10).toString('hex')
      state.urls.push({
        url: url,
        short: `${URL}${hash}`
      })
    }
  }
})

