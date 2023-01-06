import { type RefObject, useEffect } from 'react';

export const useClickOutside = (ref: RefObject<ValidRefTarget>, onClickOutside: () => void) => {
    useEffect(() => {
        function handleClickOutside (event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
};