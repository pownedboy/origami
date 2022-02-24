import { useState } from 'react';
import style from './Aside.module.css';
import AsideItem from './AsideItem/AsideItem';
import { ASIDE_ITEMS } from './AsideConstants';

const Aside = ({onMenuItemClick}) => {
    const [currentItem, setCurrentItem] = useState();
    console.log(currentItem);
    const menuItemClickHandler = (id) => {
        setCurrentItem(id);
        onMenuItemClick(id);
    }

    return (
        <aside className={style.aside}>
            <ul>                
                {ASIDE_ITEMS.map(x=>
                    <AsideItem 
                        key={x.id} 
                        id={x.id}
                        isSelected = {x.id == currentItem} 
                        onClick={menuItemClickHandler}
                    >
                        {x.text}
                    </AsideItem>
                    )} 
            </ul>
        </aside>
    );
}

export default Aside;