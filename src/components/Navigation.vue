<template>
    <div id="Navigation">
        <v-navigation-drawer 
        v-model="drawer" 
        app>

            <ul>
                <router-link tag="li" to="/"><v-icon x-large class="mb-2" color="green">mdi-home</v-icon>Home</router-link>
                <router-link tag="li" to="/clothes"><v-icon x-large class="mb-2" color="blue">mdi-tshirt-crew</v-icon>Clothes</router-link>
                <router-link tag="li" to="/about"><v-icon x-large class="mb-2" color="orange">mdi-alert-circle</v-icon>About</router-link>
                <router-link tag="li" to="/login"><v-icon x-large class="mb-2" color="red">mdi-lock</v-icon>Login</router-link>
                <router-link tag="li" to="/admin"><v-icon x-large class="mb-2" color="black">mdi-lock</v-icon>Admin</router-link>
            </ul>

        </v-navigation-drawer>


    <v-app-bar app>

    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title class="headline"> 

        <span class="font-weight-bold">MERCH STORE</span><br>
        <span class="font-weight-light">by SIR RALZIK</span>

    </v-toolbar-title>

    </v-app-bar>

    </div>
</template>

<script>
    export default {
        data: () => ({
            drawer: null,
        }),
    }
</script>

<style>
    nav ul{
        padding: 0;
        margin-top: 20px;
        text-decoration: none;
    }

    nav li {
        color: black;
        margin-left: 10%;
        padding: 5px;
        list-style-type: none;
        cursor: pointer;
    }

    nav li i {
        margin-right: 10px;
    }

    nav li:last-child{
        position: absolute;
        bottom: 20px;
    }

</style>