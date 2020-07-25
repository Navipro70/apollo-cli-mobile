import React, {FC, useState} from 'react'
import {Providers} from "./Providers";
import {Auth} from "../Auth/Auth";
import {Tabs} from "./Tabs";

export const App = () => {
    return (
        <Providers>
            <AppBase/>
        </Providers>
    )
}

const AppBase: FC = () => {
    const [authorized, setAuthorized] = useState(false)
    return (
        <>
            {!authorized && <Auth />}
            {authorized && <Tabs/>}
        </>
    )
}
