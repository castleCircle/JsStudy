import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import createListView from '../view/CreateListView';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/",
            redirect: '/news',
        },
        {
            //url 주소
            path: '/news',
            // component: url 주소로 갔을 대 표시될 컴포넌트
            name: 'news',
            // component: NewsView,
            component: createListView('NewsView'),
        },
		{
            //url 주소
            path: '/ask',
            // component: url 주소로 갔을 대 표시될 컴포넌트
            name: 'ask',
            // component: AskView,
            component: createListView('AskView'),
        },
		{
            //url 주소
            path: '/jobs',
            // component: url 주소로 갔을 대 표시될 컴포넌트
            name: 'jobs',
            // component: JobsView,
            component: createListView('JobsView'),
        },
        {
            path: '/user/:id',
            component: UserView,
        },
        {
            path: '/item/:id',
            component: ItemView
        }
    ]
})
