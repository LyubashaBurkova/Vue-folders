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
            console.log('payload2',payload)
            state.selectFolderId = payload
        }
    },
    actions:{
        async fetchFolders ({commit}){
            const resultFolders = []
            try{
                const fbVal = await fb.database().ref('folders').once('value')
                const folders = fbVal.val()
 //console.log('folders', folders)
                Object.keys(folders).forEach(key => {
                    const folder = folders[key]
                    //console.log()
                    resultFolders.push(
                        new Folder(folder.caption, folder.level, folder.subfolder, folder.id)
                    )
                })

               // console.log('resultFolders', resultFolders)
                commit('updateFolders', {
                    resultFolders
                })

                
            }catch(err){
                console.log(err)
            }
        },
        // async selectFolders ({commit}, payload){
        //     console.log('payload1', payload)
        //     commit('updateSelectFolders', payload)
           
        // }
    },
    getters: {
        getFolders(state){
            console.log('state', state)
            return state.folders
        },
        // getSelectFolderId(state){
        //     console.log('getSelectFolderId state', state)
        //     return state.selectFolderId
        // }
    }
}