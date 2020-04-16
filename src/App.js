import React, { Component } from 'react';
import { VideoList } from './data/response_NhipSongDongBang_CDIQAA';
import { VideoCardList } from './components/videolist/videocardlist.component';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      nhipsongdongbangvideos: []
     }
  }

  componentDidMount(){
    this.setState({nhipsongdongbangvideos: VideoList.items})
  }
  render() { 
    return ( 
      <div className="App">
        <h1>Nhịp Sống Đồng Bằng</h1>
        <VideoCardList videolist={this.state.nhipsongdongbangvideos}/>
      </div>
     );
  }
}
 
export default App;