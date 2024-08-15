<template>
    <div class="page-clients">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="title">{{ client.name}}</h1>
                <router-link :to="{ name: 'EditClient', params: { id: client.id}}" class="button is-light mt-4">Edit</router-link>
            </div>
            <div class="column is-12">
                <h2 class="subtitle">Contact details</h2>
                <p><strong>{{ client.name }}</strong></p>
                <p v-if="client.adress1">{{ client.adress1 }}</p>
                <p v-if="client.adress2">{{ client.adress2 }}</p>
                <p v-if="client.zipcode || client.place">{{ client.zipcode }} {{ client.place }}</p>
                <p v-if="client.country">{{ client.country }}</p>
            </div>
        </div>
    </div>
</template>
    
<script>
import axios from "axios"

export default {
    name: 'Client',
    data() {
        return {
            client: {

            }
        }
    },
    mounted() {
        this.getClients()
    },
    methods: {
        getClients() {
            const clientID = this.$route.params.id
            axios
                .get(`/api/v1/clients/${clientID}`)
                .then(response => {
                    this.client = response.data
                })
                .catch(error => {
                    console.log(JSON.stringify(error))
                })
        }
    }
}  
</script>
    
    
<style>

</style>