import Detail from '../views/pages/detail';
import Home from '../views/pages/home';
import TodayPickup from '../views/pages/today-pickup';

const routes = {
  '/': Home,
  '/today-pickup': TodayPickup,
  '/detail/:id': Detail,
};

export default routes;
