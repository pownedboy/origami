import style from './Post.module.css';
import PostAuthor from './PostAuthor';

const Post = () => {
  return (
    <div className={style.post}>
      <img src="blue-origami-bird.png" alt="origami" />
      <p className={style.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Ac tortor vitae purus faucibus ornare suspendisse. Risus ultricies tristique nulla aliquet. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Massa vitae tortor condimentum lacinia. Egestas integer eget aliquet nibh praesent tristique. Sit amet mauris commodo quis. A lacus vestibulum sed arcu. Sed cras ornare arcu dui vivamus arcu felis. Curabitur vitae nunc sed velit dignissim sodales ut eu sem.
      </p>
      <PostAuthor />
    </div>
  );
}

export default Post;