import { useEffect, useState } from "react";

const useMediaQuery = (query : string) => {
    const [matchces, setMatchces] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matchces) {
            setMatchces(media.matches);
         }
         const listener = () => setMatchces(media.matches);
         window.addEventListener("resize",listener);
         return () => 
         window.removeEventListener("resize", listener);
    }, [matchces,query]);
    return matchces;
};

export default useMediaQuery;