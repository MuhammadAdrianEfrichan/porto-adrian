import { useEffect, useRef } from "react";

interface PropTypes {
    children?: React.ReactNode;
}

export default function ScrollFadein({ children }: PropTypes) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && ref.current) {
                ref.current.style.opacity = '1';
                ref.current.style.transform = 'translateY(0)';
            }
        }, { threshold: 0.1 });

        if (ref.current) {
            observer.observe(ref.current);
            return () => observer.disconnect();
        }
    }, []);

    return (
        <div
            ref={ref}
            style={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            }}
        >
            {children}
        </div>
    );
}