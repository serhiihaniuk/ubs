import { RefObject, useEffect } from 'react';

export const useClickOutside = (ref: RefObject<ValidRefTarget>, onClickOutside: () => void) => {
    useEffect(() => {
        function handleClickOutside (event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside();
            }
        }

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
};