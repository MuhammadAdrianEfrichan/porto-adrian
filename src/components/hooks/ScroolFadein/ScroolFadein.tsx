
import { useEffect, useRef } from "react";

interface PropTypes{
    children? :React.ReactNode
}

export default function ScrollFadein({ children }: PropTypes){
    const ref = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if(entry.isIntersecting && ref.current){
                ref.current.classList.add('animate-fadein');
            }
        }, {threshold:0.5}
    )
    if(ref.current){
        observer.observe(ref.current);
        return ()=> observer.disconnect();
    }
    }, [])

    return <div ref={ref} className="opacity-0">{children}</div>
}