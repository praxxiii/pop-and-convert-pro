import { createHashRouter } from "react-router-dom";
import NotifiList from "./pages/Notifications/NotifiList";
import { QueryClient } from "@tanstack/react-query";
import Welcome from "./pages/Welcome";
import Layout from "./pages/Layout";


const queryClient = new QueryClient();
const hashRouter = createHashRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {path: "/", element: <Welcome/>},
            {path: "/notifications", element: <NotifiList/>}
            // {path: "/notifications/id", element: <Notification/>, loader: getNotificationLoader()}
        ]
    }
])

export { hashRouter as default, queryClient }