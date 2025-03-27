import { createContext } from "react";

const initialState = {
    activeTab: 'dashboard'
}

const sidebarContext = createContext(initialState); 
