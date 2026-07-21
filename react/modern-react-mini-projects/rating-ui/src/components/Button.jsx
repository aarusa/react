const button = ({children, className, disabled, onClick}) => {
    return ( 
        <button className={className} disabled={disabled} onClick={onClick}>{children}</button>
     );
}
 
export default button;