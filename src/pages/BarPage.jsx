import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react";

export const BarPage = () => {

    useEffect(() => {
        Aos.init({ once: true });
    }, []);

    return(
        <div className="bar-page-wrapper">
            {/* TODO USE AOS FOR THIS PAGE */}
        </div>
    )
}