import { LOGIN_ROUTE, PERSON_ROUTE, CRYPTO_ROUTE, CURRENCY_ROUTE, SHARES_ROUTE,MESSAGES_ROUTE, FRIENDS_ROUTE, SEARCH_ROUTE, UPLOAD_ROUTE, DOWNLOAD_ROUTE } from "./consts"
import Authorization from "./Pages/Authorization/Authorization"
import Chat from "./Pages/Chat/Chat"
import Files from "./Pages/Files/Files"
import Person from "./Pages/Person/Person"
import Crypto from "./Pages/Statistics/Crypto"

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Authorization
    }
]


export const privateRoutes = [
    {
        path: PERSON_ROUTE,
        Component: Person
    },
    {
        path: CRYPTO_ROUTE,
        Component: Crypto
    },
    {
        path: CURRENCY_ROUTE,
        Component: Crypto
    },
    {
        path: SHARES_ROUTE,
        Component: Crypto
    },
    {
        path: MESSAGES_ROUTE,
        Component: Chat
    },
    {
        path: FRIENDS_ROUTE,
        Component: Chat
    },
    {
        path: SEARCH_ROUTE,
        Component: Chat
    },
    {
        path: UPLOAD_ROUTE,
        Component: Files
    },
    {
        path: DOWNLOAD_ROUTE,
        Component: Files
    }
]