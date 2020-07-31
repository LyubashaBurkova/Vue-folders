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
        selectFolder: null
    },
    mutations:{
        updateFolders(state, payload){        
            state.folders = payload.resultFolders
        },
        updateSelectFolders(state, payload){        
            state.selectFolder = payload
        }
    },
    actions:{
        async fetchFolders ({commit}){
            const resultFolders = []
            try{
                const fbVal = await fb.database().ref('folders').once('value')
                const folders = fbVal.val()
 console.log('folders', folders)
                Object.keys(folders).forEach(key => {
                    const folder = folders[key]
                    console.log()
                    resultFolders.push(
                        new Folder(folder.caption, folder.level, folder.subfolder, key)
                    )
                })

                console.log('resultFolders', resultFolders)
                commit('updateFolders', {
                    resultFolders
                })

                
            }catch(err){
                console.log(err)
            }
        },
        //async selectFolders ({commit}){
            //const resultFolders = []
            // try{
            //     const fbVal = await fb.database().ref('folders').once('value')
            //     const folders = fbVal.val()

            //     Object.keys(folders).forEach(key => {
            //         const folder = folders[key]
            //         resultFolders.push(
            //             new Folder(folder.caption, folder.level, key)
            //         )
            //     })

            //     commit('updateFolders', {
            //         resultFolders
            //     })

                
            // }catch(err){
            //     console.log(err)
            // }
        //}
    },
    getters: {
        getFolders(state){
            console.log(state)
            return state.folders
        }
    }
}