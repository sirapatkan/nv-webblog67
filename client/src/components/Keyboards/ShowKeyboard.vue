<template>
    <div>
        <h1>Show Keyboard</h1>
        <p>id: {{ keyboard.id }}</p>
        <p>name: {{ keyboard.keyboard }}</p>
        <p>type: {{ keyboard.keyboardtype }}</p>
        <p>price: {{ keyboard.price }}</p>
        <p>status: {{ keyboard.status }}</p>
        <p>
          <button v-on:click="navigateTo('/keyboard/edit/'+ keyboard.id)">แก้ไข Keyboard</button>
          <button v-on:click="navigateTo('/keyboards')">กลับ</button>
        </p>
    </div>
</template>

<script>
import KeyboardsService from '@/services/KeyboardsService'
export default {
    data() {
        return {
            keyboard: null
        }
    },
    async created() {
        try {
            let keyboardId = this.$route.params.keyboardId
            this.keyboard = (await KeyboardsService.show(keyboardId)).data
        } catch (error) {
            console.log(error)
        }
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
    }
}
</script>

<style scoped>
</style>
