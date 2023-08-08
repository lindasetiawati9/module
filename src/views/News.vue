<template>
    <div class="container mx-auto sm:px-4">
        <h1 class="text-center b">Fetch News</h1>
        <table class="table-auto">
            <thead>
                <tr>
                    <th class="px-4 py-2">Data</th>
                    <th class="px-4 py-2">Info</th>
                    <th class="px-4 py-2">Id</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="news in getNews" :key="news.data">
                <td class="border px-4 py-2">{{ news.data }}</td>
                <td class="border px-4 py-2">{{ news.info }}</td>
                <td class="border px-4 py-2">{{ news.id }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('News', ['getNews']),
    },
    methods: {
        ...mapActions('News', ['fetchNews']),
    },
    created() {
        this.fetchNews();
    },
}
</script>

<style></style>