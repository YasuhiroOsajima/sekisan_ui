<template>
    <div>
        <v-toolbar dark color="indigo">
            <router-link to="/">
                <v-icon>arrow_back</v-icon>
            </router-link>

            <v-toolbar-title class="white--text">My Todo</v-toolbar-title>
        </v-toolbar>

        <v-text-field v-model="newTodo" placeholder="Input here..."></v-text-field>
        <v-btn dark color="indigo" v-on:click="addTodo()" class="white--text">ADD</v-btn>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newTodo: ""
            };
        },
        methods: {
            addTodo() {
                if (this.newTodo === "") return;

                //const sekisan = JSON.parse(localStorage.getItem("sekisan")) || [];
                const todos = this.$store.getters.values;
                todos.push(this.newTodo);
                //localStorage.setItem("sekisan", JSON.stringify(sekisan));
                this.$store.commit("setValues", todos);
                this.newTodo = "";
                this.$router.push("/");
            }
        }
    };
</script>

<style scoped>
    a {
        text-decoration: none;
    }
</style>