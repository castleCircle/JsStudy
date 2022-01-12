import Vue from "vue";
import VueRouter from "vue-router";
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import CreateListView from '../views/CreateListView.js';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import bus from '../utils/bus.js';
import {store} from '../store/index'

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
            component: NewsView,
            beforeEnter: (to,from,next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST',to.name).then(()=> {
                    console.log('fetched')
                    bus.$emit('end:spinner')
                    next()
                })
                .catch((error)=>{
                    console.log(error)
                })
            }

            // component: CreateListView('NewsView'),
        },
		{
            //url 주소
            path: '/ask',
            // component: url 주소로 갔을 대 표시될 컴포넌트
            name: 'ask',
            component: AskView,
            // component: CreateListView('AskView'),
        },
		{
            //url 주소
            path: '/jobs',
            // component: url 주소로 갔을 대 표시될 컴포넌트
            name: 'jobs',
            component: JobsView,
            // component: CreateListView('JobsView'),
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
