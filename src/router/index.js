import Vue from 'vue';
import VueRouter from 'vue-router';
import BoardList from "@/components/board/BoardList";
import BoardDetail from "@/components/board/BoardDetail";
import BoardCreate from "@/compoents/board/BoardCreate";

import NotFound from "@/compoents/NotFound";

Vue.use(VueRouter);     //  뷰 에플리케이션에 라우터 플러그인을 추가

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "BoardList",
            component: BoardList
        },
        {
            path: "/board/detail/:contentId",
            name: "BoardDetail",
            component: BoardDetail
        },
        {
            path: "/board/create/:contentId?",
            name: "BoardCreate",
            component: BoardCreate
        },
        {
            path: "*",
            component: NotFound
        }
    ]
});