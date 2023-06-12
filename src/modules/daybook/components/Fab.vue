<template>
    <button class="btn btn-primary">
        <i class="fa fa-1x " :class="icon"> </i>
    </button>
</template>
<script>
export default{
    name: 'FabComponent',
    props: {
        icon: {
            type: String,
            required: true
        }
    }
}

</script>
<style lang="scss" scoped>
    button{
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 100%;
    }

</style>



