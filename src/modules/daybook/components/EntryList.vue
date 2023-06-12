<template>

    <div class="entry-list-container">
        <div class="px-2 pt-2">
            <input type="text" class="form-control" placeholder="Buscar Entrada">
        </div>

        <div class="entry-scroll-area">
            <Entry v-for="item in 15" :key="item" />
        </div>


    </div>

</template>
<script>
    import { defineAsyncComponent } from 'vue';

    export  default{
        name: 'EntryList',
        data(){
            return{
                
            }
        },
        components: { 
            Entry: defineAsyncComponent(() => import('./Entry'))
        }
    }

</script>

<style lang="scss" scoped>

.entry-list-container{
    border-radius: 1px solid #2c3e50;
    height: calc(100vh - 56px);
}
.entry-scroll-area{
    height: calc(100vh - 150px);
    overflow: scroll;
}



</style>


