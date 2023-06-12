<template>
    <div class="entry-container mb-3 pointer p-2" @click="$router.push({name: 'entryview', params : {id: 1}})">
        <div class="entry-tite">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">julio</span>
            <span class="mx-2 fw-light">2023</span>
        </div>
        <div class="entry-descripcion">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quidem dolorem nostrum eos voluptates aliquid.
        </div>
    </div>

</template>
<script>

export default{
    name: 'EntryContainer',
    data(){
        return{}
    },

    
}

</script>

<style lang="scss" scoped>
    .pointer {
        cursor: pointer;
    }

    .entry-container{
        border-bottom: 1px solid #2c3e50;
        transition: 0.2s all ease-in;
        &:hover{
            background-color: lighten($color: grey, $amount: 45);
            transition: 0.2s all ease-in;
        }
        .entry-tite{
    
        }
        .entry-descripcion{
            font-size: 12px;
        }
    }

</style>


