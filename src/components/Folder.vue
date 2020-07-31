<template>
   <li class="folder" disable-select :data-level="folder.level"> 
            <span>{{folder.level}}</span>
            <span 
            :class="{'selected-folder': folders.selectFolderId === folder.id }"
            :data-id="folder.id"
            class="folder-caption"
            @click="selectFolder(folder.id)"
            >{{folder.caption}}</span>
            <ul>
                <li is="folder" 
                    :index="index" 
                    v-for="(subfolder, index) in folder.subfolder"
                    :folder="subfolder"     
                    :key="subfolder.id"                          
                ></li>
            </ul>
    </li>
</template>
<script>
import {mapState} from 'vuex'

export default {
    name: 'Folder',
    props:{
        'folder':{
            type: Object
        }
    },
    computed: {
        ...mapState ([
            'folders'
        ]),
    },
    methods:{
        selectFolder(folderId){
            this.$store.commit('updateSelectFolders', folderId)
        }
    }
}
</script>