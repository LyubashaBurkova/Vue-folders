import Vue from 'vue'
import Vuex from 'vuex'
import folders from './folders'
import modal from './modal'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        folders,
        modal
    }
})
