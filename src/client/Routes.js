import App from './App'
import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage';
import NotFoundPage from './pages/NotFoundPages'
import AdminsPage from './pages/AdminsPage'

export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...AdminsPage,
                path:'/admins'
            },
            {
                ...UsersPage,
                path: '/users'
            },
            {
                ...NotFoundPage
            }
        ]

    }
];

