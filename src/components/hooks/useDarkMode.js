import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage.js";

const useDarkMode = () => {
    const [isDarkMode, setDarkMode] = useLocalStorage(false);
    useEffect( () => {
        if (isDarkMode === true) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [isDarkMode]);
    return [isDarkMode, setDarkMode];
};

export default useDarkMode;