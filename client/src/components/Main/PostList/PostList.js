import { Component } from 'react'

import Post from './Post';
import style from './PostList.module.css';
import * as postService from '../../../services/postService'

// const PostList = () => {
//   return (
//     <div className={style.posts}>
//       <Post />
//       <Post />
//       <Post />
//       <Post />
//       <Post />
//       <Post />
//       <Post />
//       <Post />
//       <Post />
//     </div>
//   );
// }

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    postService.getAll().then(posts => {
      this.setState({ posts })
    });
  }

  render() {
    return (
      <div className={style.posts}>
        {this.state.posts.map(post => {
          return <Post description={post.description} author={post.author} title={post.title}/>
        })}
      </div>
    )
  }
}


export default PostList;