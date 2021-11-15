import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from '../view/NewsView.vue';
import JobsView from '../view/JobsView.vue';
import AskView from '../view/AskView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        {
            //url 주소
            path: '/news',
            // component: url 주소로 갔을 대 표시될 컴포넌트
            component: NewsView,
        },
        {
            paht: '/ask',
            component: AskView,
        },
        {
            path: '/jobs',
            component: JobsView,
        }

    ]
})
