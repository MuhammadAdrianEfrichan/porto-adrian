

interface PropsTypes{
    href : string;
    children : string;
    className? : string;

}


const Link = (props : PropsTypes) => {
    const{href, children, className} = props;
    return (
        <a href={href} className={className}>{children}</a>
    )
}

export default Link;