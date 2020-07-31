import * as fb from 'firebase'

export default {
    state:{
        modal: null
    },
    mutations:{
        updateModalInformation(state, payload){
           state.modal = payload.modalInfo
        }
    },
    actions:{
        async fetchModalInfo ({commit}){
            try{
                const fbVal = await fb.database().ref('modal').once('value')
                const modalInfo = fbVal.val()

                commit('updateModalInformation', {
                    modalInfo
                })

                
            }catch(err){
                console.log(err)
            }
        }
    },
    getters: {
        getModalInfo(state){
            return state.modal
        }
    }
}