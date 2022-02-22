import style from './NavigationItem.module.css';

const NavigationItem = (props) => {
  if (!props.src && !props.alt) {
    return (
      <li className={style.navItem}>
        <a href="#">{props.children}</a>
      </li>
    );
  }
  return (
    <li className={style.navItem}>
      <img src={props.src} alt={props.alt}></img>
    </li>
  );

}


export default NavigationItem;