import Admin from './pages/Admin'
import Auth from './pages/Auth'
import Catalog from './pages/Catalog'
import Compilation from './pages/Compilation'
import Material from './pages/Material'
import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, HOME_ROUTE, THEME_ROUTE, MATERIAL_ROUTE } from './utils/consts'

export const authRoutes= [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]
export const publicRoutes =[
    {
        path: THEME_ROUTE + '/:id',
        Component: Compilation
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: HOME_ROUTE,
        Component: Catalog
    },
    {
        path: MATERIAL_ROUTE + '/:id',
        Component: Material
    }      

]
