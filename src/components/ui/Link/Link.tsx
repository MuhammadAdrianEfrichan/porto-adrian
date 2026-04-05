import type React from "react";


interface PropsTypes{
    href : string;
    children : React.ReactNode;
    className? : string;
    element? : React.ReactNode;

}


const Link = (props : PropsTypes) => {
    const{href, children, className,element} = props;
    return (
        <a href={href} className={className}>{children} {element}</a>
    )
}

export default Link;