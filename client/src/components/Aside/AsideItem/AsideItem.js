import style from './AsideItem.module.css'

const AsideItem = 
    ({ 
        children,
        id, 
        isSelected,
        onClick 
    }) => {
    let classes = [ style.asideItem ];

    if (isSelected) {
        classes.push(style.asideItemSelected);
    }
    return (
        <li className={classes.join(' ')}>
            <a href="#" onClick={onClick.bind(null, id)}>
                {children}
            </a>
        </li>
    );
}

export default AsideItem;