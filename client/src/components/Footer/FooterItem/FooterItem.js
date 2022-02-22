import style from './FooterItem.module.css'

const FooterItem = (props) => {
    if (!props.src && !props.alt) {
        return (
            <li className={style.footerItem}>
                <a href="#">{props.children}</a>
            </li>
        ); 
    }
    return (
        <li className={style.footerItem}>
            <img src={props.src} alt={props.alt}></img>
        </li>
    );
}

export default FooterItem;