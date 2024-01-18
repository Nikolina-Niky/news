import { createContext, useContext, Dispatch, useState } from "react";

interface SelectedPostContextValue {
    selectedPostId: string;
    setSelectedPostId: Dispatch<React.SetStateAction<string>>;
}

const SelectedPostContext = createContext<SelectedPostContextValue>({
    selectedPostId: "",
    setSelectedPostId: (s:React.SetStateAction<string>) => {}
});

interface SelectedPostProviderProps {
    children: React.ReactNode;
}

export const SelectedPostProvider: React.FC<SelectedPostProviderProps> = ({ children }) => {
    const [selectedPostId, setSelectedPostId] = useState("");
    return (
        <SelectedPostContext.Provider value={{ selectedPostId, setSelectedPostId }}>
            {children}
        </SelectedPostContext.Provider>
    );
};

export const useSelectedPostContext = () => {
    const selectedPostContext = useContext(SelectedPostContext);
    if (!selectedPostContext) {
        throw new Error("context SelectedPostContext is not created");
    }
    return selectedPostContext;
};
