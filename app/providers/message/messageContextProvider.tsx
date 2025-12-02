"use client";

import { useState } from "react"
import { initialState } from "./initialState"
import { MessageContext } from "./messageContext"

type MessageProviderProps = {
    children: React.ReactNode
}
export function MessageProvider({ children }: MessageProviderProps) {
    const [msgs, setMsgs] = useState(initialState)
    return (
        <MessageContext.Provider value={{ msgs, setMsgs }}>
            {children}
        </MessageContext.Provider>
    )
}