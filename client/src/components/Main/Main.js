import PostList from './PostList';
import style from './Main.module.css';


const Main = (props) => {
  return (
    <main className={style.main}>
      <h1>Sooooooooooooome Heading</h1>
      <PostList posts={props.posts}/>
    </main>
  );
}

export default Main;