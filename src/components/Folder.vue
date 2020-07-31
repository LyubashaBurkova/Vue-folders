<template>
   <li class="folder" :class="folder.level" disable-select :data-level="folder.level"> 
            <span>{{folder.level}}</span>
            <span class="folder-caption" :data-id="folder.id">{{folder.caption}}</span>
            <folder 
                :index="index" 
                v-for="(subfolder, index) in folder.subfolder"
                :folder="subfolder"     
                :key="subfolder.id"                          
            ></folder>
    </li>
</template>
<script>

export default {
    name: 'Folder',
    data(){
        return{

        }
    },
    props:{
        'folder':{
            type: Object
        }
    },
    // components: {
    //     'folder': Folder
    // }
}
</script>
<style scoped>
.folder {
    margin: 10px 0;
}
</style>