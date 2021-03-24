import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import UsersList from './components/users/UsersList.vue';

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // { path: '/', redirect: '/teams' },
    { name: 'teams', path: '/teams', component: TeamsList, alias: '/' },
    { path: '/users', component: UsersList },
    {
      name: 'team-members',
      path: '/teams/:teamId',
      component: TeamMembers,
      props: true
    },
    { path: '/:Notfound(.*)', redirect: '/' }
  ]
});

app.use(router);

app.mount('#app');
