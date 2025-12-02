"use-client";

import { useContext } from "react";
import { MessageContext } from "./messageContext";

export function useMessageContext() {
    return useContext(MessageContext)
}