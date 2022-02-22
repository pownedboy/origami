import Post from './Post';
import style from './PostList.module.css';

const PostList = () => {
  return (
    <div className={style.posts}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default PostList;