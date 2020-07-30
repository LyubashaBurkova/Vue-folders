import * as fb from 'firebase'

class Folder{
    constructor (caption, level, id){
        this.caption = caption
        this.level = level
        this.id = id
    }
}

export default {
    state:{
        folders: null
    },
    mutations:{
        updateFolders(state, payload){        
            state.folders = payload.resultFolders
        }
    },
    actions:{
        async fetchFolders ({commit}){
            const resultFolders = []
            try{
                const fbVal = await fb.database().ref('folders').once('value')
                const folders = fbVal.val()

                Object.keys(folders).forEach(key => {
                    const folder = folders[key]
                    resultFolders.push(
                        new Folder(folder.caption, folder.level, key)
                    )
                })

                commit('updateFolders', {
                    resultFolders
                })

                
            }catch(err){
                console.log(err)
            }
        }
    },
    getters: {
        getFolders(state){
            console.log(state)
            return state.folders
        }
    }
}