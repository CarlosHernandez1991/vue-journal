<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <div class="text-success fs-3 fw-bold">15</div>
            <div class="mx-1 fs-3">Junio</div>
            <div class="mx-2 fs-4 fw-light">2023</div>
        </div>
        <div>
            <button class="btn btn-danger mx-2">
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>
            <button class="btn btn-primary mx-2">
                <i class="fa fa-upload"></i>
                Subir Foto
            </button>
        </div>
    </div>
    
    <br>

    <div class="d-flex flex-column px-3 h-75">
        <textarea class="form-control" placeholder="Que sucedio hoy?"></textarea>
    </div>

    <Fab :icon="'fa-check'"/>

    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="entry picture " class="img-thumbnail">

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

<style lang="scss" scopep>
    textarea{
        font-size: 20px;
        border: none;
        height: 100%;
        &:focus{
            outline: none;
        }
    }
    img{
        width: 150px;
        position: fixed;
        bottom: 100px;
        right: 20px;
        box-shadow: 0px 5px 10px rgba($color: #000, $alpha: 0.2);
    }
</style>