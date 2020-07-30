<template>
<div>
{{folder}}
</div>
   <!-- <div class="level" :class="folder.level" disable-select :data-level="folder.level">  -->
         <!-- data-hasChild='{{HasChild}}'> -->
            <!-- <span class='folder-imgs'>
                <img src='/img/svg/folder-close.svg' class='folder-close' />
                <span class='plus'>+</span>
                <img src='/img/svg/folder-open.svg' class='folder-open' />
            </span> -->
            <!-- <span class="folder-caption" :data-id="folder.id">{{folder.caption}}</span>
    </div> -->
</template>
<script>
// import fontawesome from '@fortawesome/fontawesome'
//import fontawesome from '../assets/font-awesome.min.css'

export default {
    data(){
        return{

        }
    },
    props:{
        'folder':{
            type: Object
        }
    }
}
</script>
<style scoped>

</style>