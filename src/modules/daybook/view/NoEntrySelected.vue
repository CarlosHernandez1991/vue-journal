<template>
    <div class="d-flex justify-content-center">
        <h1 class="align-self-center text-center">NO HAY NADA SELECCIONADO</h1>
    </div>
    <Fab :icon="'fa-plus'"/>
</template>

<script>
    import { defineAsyncComponent } from 'vue';
    export default{
        name: 'NoEntrySelected',
        data(){
            return{

            }
        },
        components: {
            Fab: defineAsyncComponent(() => import('@/modules/daybook/components/Fab.vue'))
        }
    }

</script>

<style lang="scss" scoped>
    div{
        height: 100%;
    }
</style>