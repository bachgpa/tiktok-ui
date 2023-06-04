import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';

// PUBLIC ROUTES
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
];
// PRIVATE ROUTES
const privateRoutes = [];

export { publicRoutes, privateRoutes };
