<template>
    <div>

        <v-toolbar dark color="indigo">
            <v-toolbar-title class="white--text">My Todo</v-toolbar-title>
        </v-toolbar>

        <v-list>
            <template v-for="(todo, idx) in todos">
                <v-list-tile v-bind:key="idx + '-todo'">
                    <v-list-tile-content>
                        {{ todo }}
                    </v-list-tile-content>

                    <v-list-tile-action>
                        <v-btn flat icon v-on:click="deleteTodo(idx)">
                            <v-icon>delete</v-icon>
                        </v-btn>
                    </v-list-tile-action>
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
            this.todos = this.$store.getters.values;
            //this.sekisan = JSON.parse(localStorage.getItem("sekisan")) || [];
        },
        methods: {
            deleteTodo(idx) {
                this.sekisan.splice(idx, 1);
                this.$store.commit("setValues", this.sekisan);
                //localStorage.setItem("sekisan", JSON.stringify(this.sekisan));
            },
            addTodo() {
                this.$router.push("/sekisan/add");
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