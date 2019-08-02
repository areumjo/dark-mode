import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState( () => {
        const item = localStorage.getItem(key);
        // console.log('checking useLocalStorage', key, initialValue, item);
        return item ? JSON.parse(item) : initialValue;
    });
    const setValue = value => {
        setStoredValue(value);
        // console.log('checking setState', value);
        localStorage.setItem(key, JSON.stringify(value));
    };
    return [storedValue, setValue];
}

export default useLocalStorage;