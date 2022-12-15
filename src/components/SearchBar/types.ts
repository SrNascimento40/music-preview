import { ReactNode } from "react";

export interface iSearchBar {
    handleSetTerm: (value: string) => void;
    searchTerm: string|undefined
}