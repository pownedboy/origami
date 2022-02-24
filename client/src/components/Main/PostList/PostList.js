import Post from './Post';
import style from './PostList.module.css';


const PostList = (props) => {
  return (
    <div className={style.posts}>
      {props.posts.map(x=>
        <Post key={x.id} content={x.content} author={x.author}/>)}
    </div>
  );
}

// class PostList extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       posts: []
//     };
//   }

//   componentDidMount() {
//     postService.getAll().then(posts => {
//       this.setState({ posts })
//     });
//   }

//   render() {
//     return (
//       <div className={style.posts}>
//         {this.state.posts.map(post => {
//           return <Post key={post.id} content={post.content} author={post.author} title={post.title}/>
//         })}
//       </div>
//     )
//   }
// }


export default PostList;