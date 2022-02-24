import style from './Post.module.css';
import PostAuthor from './PostAuthor';

const Post = (props) => {
  return (
    <div className={style.post}>
      <img src="blue-origami-bird.png" alt="origami" />
      <p className={style.description}>{props.content}
      </p>
      <PostAuthor author={props.author}/>
    </div>
  );
}

export default Post;