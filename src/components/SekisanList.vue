<template>
    <div>

        <v-toolbar dark color="indigo">
            <v-toolbar-title class="white--text">Sekisan List</v-toolbar-title>
        </v-toolbar>

        <v-list>
            <template v-for="(seki, idx) in sekisan">
                <v-list-tile v-bind:key="idx + '-todo'">
                    <v-list-tile-content>
                        {{ seki }}
                    </v-list-tile-content>
                </v-list-tile>

                <v-divider v-bind:key="idx + '-div'"></v-divider>
            </template>
        </v-list>

        <div class="bottom-right">
            <v-btn fab color="indigo" v-on:click="addTodo">
                <v-icon color="white">add</v-icon>
            </v-btn>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                sekisan: []
            };
        },
        created() {
            this.sekisan = this.$store.getters.values;
        },
        methods: {
            deleteTodo(idx) {
                this.sekisan.splice(idx, 1);
                this.$store.commit("setValues", this.sekisan);
            },
            addTodo() {
                console.log("debug");
                this.$axios.get('http://127.0.0.1:5000/sekisan')
                    .then(response => (this.sekisan = response))
                    .catch(error => console.log(error))

                //this.$store.commit("setValues", this.sekisan);
                //this.$router.push("/sekisan");
            }
        }
    };
</script>

<style scoped>
    .bottom-right {
        position: fixed;
        bottom: 0px;
        right: 0px;
    }
</style>