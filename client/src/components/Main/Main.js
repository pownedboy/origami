import PostList from './PostList';
import style from './Main.module.css';


const Main = () => {
  return (
    <main className={style.main}>
      <h1>Sooooooooooooome Heading</h1>
      <PostList />
    </main>
  );
}

export default Main;