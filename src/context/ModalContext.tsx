import React, { Children, createContext, useState } from "react";

interface IModalContext {
    modal: boolean
    open: () => void
    close: () => void
}

export const ModalCotext = createContext<IModalContext>({
    modal: false,
    open: () => {},
    close: () => {}
})

export const ModalState = ({children}: {children: React.ReactNode}) => {

    const [modal, setModal] = useState(false)

    const open = () => setModal(true)

    const close = () => setModal(false)

    return (
     <ModalCotext.Provider value={{modal, open, close}}>
        {children}
     </ModalCotext.Provider>   
    )
}