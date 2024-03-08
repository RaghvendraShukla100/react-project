import { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    item: []
  }
  add = (e) => {
    if (e.keyCode === 13) {
      this.setState({
        item: [...this.state.item,
        {
          name: e.target.value,
          id: new Date().getTime()
        }]
      })
    }
    
  }
  render() {
    return (

      <div className='app'>
        <div className='input-holder'>
          <input type="text"
            placeholder='Type an item and press enter'
            id='input-field'
            onKeyUp={this.add} />
        </div>
        <div className='item-holder'>
          {/* <div className='item'>ddfghg</div> */}
          {
            this.state.item.map(i => <div className='item'>{i.name}</div>)
          }


        </div>
      </div>
    )
  }
}


export default App;
