import Vue from "vue";
import Router from "vue-router";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import SekisanList from "./components/SekisanList";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/sekisan",
            component: SekisanList
        },
        {
            path: "/",
            component: TodoList
        },
        {
            path: "/sekisan/add",
            component: TodoForm
        }
    ]
});
