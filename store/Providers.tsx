'use client'
import { Provider } from "react-redux";
import { store } from ".";

interface Props {
    children: React.ReactNode;
}


// el Provider de redux necesita ejecutarse en la parte del cliente (use client)
export const Providers = ({ children }: Props) => {
    return (
        <Provider store={ store }>
            { children }
        </Provider>
    )
}
