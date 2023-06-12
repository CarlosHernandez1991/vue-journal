<template>
    <NavBar />
    <div class="d-flex">
        <div class="col-4">
            <EntryList />
        </div>
        <div class="col">
            <RouterView />
        </div>
    </div>



</template>
<script>
import { defineAsyncComponent } from 'vue';

export default{
    name: 'DayBookLayout',
    data(){
        return {

        }
    },
    components: {
        NavBar: defineAsyncComponent(() => import('@/modules/daybook/components/NavBar.vue')),
        EntryList: defineAsyncComponent(() => import('@/modules/daybook/components/EntryList.vue')),
    }
}

</script>