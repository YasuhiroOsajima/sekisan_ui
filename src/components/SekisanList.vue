<template>
    <div>

        <v-toolbar dark color="indigo">
            <v-toolbar-title class="white--text">Sekisan List</v-toolbar-title>
        </v-toolbar>

        <v-list>
            <template v-for="(seki, idx) in sekisan">
                <v-list-tile v-bind:key="idx + '-seki'">
                    <v-list-tile-content>
                        <div>{{ seki.id }}</div>
                        <div>{{ seki.employee_num }}</div>
                        <div>{{ seki.sekisan }}</div>
                    </v-list-tile-content>
                </v-list-tile>

                <v-divider v-bind:key="idx + '-div'"></v-divider>
            </template>
        </v-list>

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
            this.addTodo()
        },
        methods: {
            deleteTodo(idx) {
                this.sekisan.splice(idx, 1);
                this.$store.commit("setValues", this.sekisan);
            },
            addTodo() {
                console.log("debug");
                this.$axios.get('http://127.0.0.1:5000/sekisan')
                    .then(response => {
                        console.log(response.data['Sekisan']);
                        this.sekisan = response.data['Sekisan'];
                        this.$store.commit("setValues", this.sekisan);
                    })
                    .catch(error => console.log(error))

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