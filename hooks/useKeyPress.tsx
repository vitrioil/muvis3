import { useEffect } from 'react';

const useKeyPress = (callback: () => void): void => {

    useEffect(() => {
        const downHandler = () => callback && callback();
        window.addEventListener("keydown", downHandler);
        return () => {
            window.removeEventListener("keydown", downHandler);
        };
    }, [callback]);
}

export default useKeyPress