<template>
    <div>
        <h2>Get all keyboards</h2>
        <p><button v-on:click="logout">Logout</button></p>
        <h4>จำนวน keyboards {{ keyboards.length }}</h4>
        <p><button v-on:click="navigateTo('/keyboard/create')">สร้าง keyboard</button></p>
        <div v-for="keyboard in keyboards" v-bind:key="keyboard.id">
            <p>id: {{ keyboard.id }}</p>
            <p>name: {{ keyboard.keyboard }}</p>
            <p>type: {{ keyboard.keyboardtype }}</p>
            <p>price: {{ keyboard.price }}</p>
            <p>status: {{ keyboard.status }}</p>
            <div v-if="keyboard.thumbnail">
                <img :src="BASE_URL + keyboard.thumbnail" alt="thumbnail" style="width: 100px; height: auto;" />
            </div>
            <p>
              <button v-on:click="navigateTo('/keyboard/'+ keyboard.id)">ดู keyboard</button>
              <button v-on:click="navigateTo('/keyboard/edit/'+ keyboard.id)">แก้ไข keyboard</button>
              <button v-on:click="deleteKeyboard(keyboard)">ลบข้อมูล</button>
            </p>
            <hr>
        </div>
    </div>
</template>

<script>
import KeyboardsService from '@/services/KeyboardsService'
export default {
    data() {
        return {
            keyboards: [],
            BASE_URL: "http://localhost:8081/assets/uploads/" // URL ที่เก็บรูปภาพที่อัปโหลด
        }
    },
    async created() {
        this.keyboards = (await KeyboardsService.index()).data
    },
    methods: {
        logout() {
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setKeyboard', null)
            this.$router.push({
                name: 'login'
            })
        },
        navigateTo(route) {
            this.$router.push(route)
        },
        async deleteKeyboard(keyboard) {
            let result = confirm("Want to delete?")
            if (result) {
                try {
                    await KeyboardsService.delete(keyboard)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },
        async refreshData() {
            this.keyboards = (await KeyboardsService.index()).data
        }
    }
}
</script>

<style scoped>
</style>
