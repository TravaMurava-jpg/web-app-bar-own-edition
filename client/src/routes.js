import {ABOUTUS_ROUTE, BOOKPAGE_ROUTE, CONTACTS_ROUTE} from "./utils/consts";
import bookPage from "./pages/bookPage";
import aboutUs from "./pages/aboutUs";
import contacts from "./pages/contacts"

export const allRoutes = [
    {
        path: ABOUTUS_ROUTE,
        Component: aboutUs
    },
    {
        path: BOOKPAGE_ROUTE,
        Component: bookPage
    },
    {
        path: CONTACTS_ROUTE,
        Component: contacts
    }
]

export default allRoutes