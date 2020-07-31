import * as fb from 'firebase'

class Folder{
    constructor (caption, level, subfolder, id){
        this.caption = caption
        this.level = level        
        this.subfolder = subfolder
        this.id = id
    }
}

export default {
    state:{
        folders: null,
        selectFolderId: null
    },
    mutations:{
        updateFolders(state, payload){
            state.folders = payload.resultFolders
        },
        updateSelectFolders(state, payload){  
            state.selectFolderId = payload
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
                        new Folder(folder.caption, folder.level, folder.subfolder, folder.id)
                    )
                })

                commit('updateFolders', {
                    resultFolders
                })

                
            }catch(err){
                console.log(err)
            }
        },
    },
    getters: {
        getFolders(state){
            return state.folders
        },
        getSelectFolderId(state){
            return state.selectFolderId
        }
    }
}