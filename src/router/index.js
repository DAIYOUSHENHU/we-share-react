import Home from '../App';
import NotFound from '../NotFound';

export const routes = [
  {
    path: 'home',
    component: Home
  },
  {
    path: '/404',
    component: NotFound
  },
]