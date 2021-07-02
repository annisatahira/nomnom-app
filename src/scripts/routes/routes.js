import Detail from '../views/pages/detail';
import Home from '../views/pages/home';
import Favorite from '../views/pages/favorite';
import TodayPickup from '../views/pages/today-pickup';

const routes = {
  '/': Home,
  '/today-pickup': TodayPickup,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
