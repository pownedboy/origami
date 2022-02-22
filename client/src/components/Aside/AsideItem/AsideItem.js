import style from './AsideItem.module.css'

const AsideItem = ({children}) => {
    return (
        <li className={style.asideItem}><a href="#">{children}</a></li>
    );
}

export default AsideItem;