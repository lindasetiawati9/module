<template>
    <div>
        <h2><u>Create User</u></h2><br>
        <form @submit.prevent="createUser">
            <label>Email : </label>
            <input v-model="newUser.email" type="email" required> <br> <br>
            <label>Username : </label>
            <input v-model="newUser.username" type="text" required> <br> <br>
            <label>Password : </label>
            <input v-model="newUser.password" type="password" required> <br> <br>
            <label>First Name : </label>
            <input v-model="newUser.name.firstname" type="text" required> <br> <br>
            <label>Last Name : </label>
            <input v-model="newUser.name.lastname" type="text" required> <br> <br>
            <label>City : </label>
            <input v-model="newUser.address.city" type="text" required> <br> <br>
            <label>Street : </label>
            <input v-model="newUser.address.street" type="text" required> <br> <br>
            <label>Number : </label>
            <input v-model="newUser.address.number" type="number" required> <br> <br>
            <label>Zip Code : </label>
            <input v-model="newUser.address.zipcode" type="text" required> <br> <br>
            <label>Latitude : </label>
            <input v-model="newUser.address.geolocation.lat" type="text" required> <br> <br>
            <label>Longitude : </label>
            <input v-model="newUser.address.geolocation.long" type="text" required> <br> <br>
            <label>Phone : </label>
            <input v-model="newUser.phone" type="text" required> <br> <br>
            <button type="submit" class="grid cursor-pointer select-none rounded-md border border-indigo-500 bg-indigo-500 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none">
                Create User
            </button>
        </form>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    data() {
        return {
            newUser: {
                email: "",
                username: "",
                password: "",
                name: {
                    firstname: "",
                    lastname: "",
                },
                address: {
                    city: "",
                    street: "",
                    number: null,
                    zipcode: "",
                    geolocation: {
                        lat: "",
                        long: "",
                    },
                },
                phone: "",
            },
        };
    },
    computed: {
        ...mapState("notification", ["notification"]),
    },
    methods: {
        ...mapActions("users", ["createUser", "setNotification"]),
        async createUser() {
            try {
                const newUser = await this.createUser(this.userData);
                this.$router.push({ name: "User"});
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>