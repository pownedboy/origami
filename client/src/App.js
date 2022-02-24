import { Component } from 'react';
import Navigation from './components/Navigation';
import Aside from './components/Aside';
import style from './App.module.css';
import Main from './components/Main';
import Footer from './components/Footer';
import * as postService from './services/postService';


// function App() {
//   return (
//     <div className={style.app}>
//       <Navigation />
//       <div className={style.container}> 
//         <Aside />
//         <Main />
        
//       </div>
//       <Footer />
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      selectedPost: null
    };
  }

  componentDidMount() {
    postService.getAll().then(posts => {
      this.setState({ posts })
    });
  }

  onMenuItemClick(id){
    this.setState({selectedPost: id})
  }

  getPosts(){
    if (!this.state.selectedPost) {
      return this.state.posts;
    } else {
      return [this.state.posts.find(x=>x.id == this.state.selectedPost)];
    }
    
  }

  render() {
    return (
      <div className={style.app}>
        <Navigation />
        <div className={style.container}> 
          <Aside onMenuItemClick={this.onMenuItemClick.bind(this)}/>
          <Main posts={this.getPosts()}/>
       
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;

/*TO DO: Make container component for aside and main*/