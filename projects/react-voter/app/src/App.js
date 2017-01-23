import React from 'react';

class Clock extends React.Component{
  constructor(props){
    super(props)
    this.state = {time: new Date().toLocaleTimeString()}
  }
  componentDidMount(){
    this.timerID = setInterval(
      () => {return this.tick()},
      1000
    );
  }
  componentWillUnmount(){
    clearInterval(this.timerId);
  }
  tick(){
    this.setState({time: new Date() .toLocaleTimeString() + +this.props.words});
  }


  render(){
    return(
      <div>
        <h2 name="clock">time meow: {this.state.time}</h2>
        <h2> and this too: {this.props.words}</h2>
      </div>
    );
  }

}


function Doodoo(){
  return (
    <div>
      <Clock words={1}/>
      <Clock words={2}/>
      <Clock />
    </div>
  );
}
//setInterval(tick, 1000);

class App extends React.Component {
//set initial state with constructot
  constructor(){
    //call super to make 'this' context from caller, not react.compenent class
    super();
    this.state = {
      txt: null,
      cat: 0,
      currentEvent: '---'
    }
  }

  update(e){
    this.setState({txt: e.target.value, currentEvent: e.type})
  }

  render() {
    let txt = this.props.txt
    return (
      <Big name="derp">
      <div className="App">
        <h1>HelloWorld</h1>
      <input type="text" onChange={this.update.bind(this)}/>
      <Thing>thingies</Thing>
      <h1>{this.state.txt}</h1>
      <textarea onKeyPress={this.update.bind(this)}
        onCopy={this.update.bind(this)}
        onFocus={this.update.bind(this)}
        cols="30"
        rows="20"
      />
      <h1>{this.state.currentEvent}</h1>
      </div>
    </Big>
    );
  }
}



const Big = (props) => <div>{props.name}thissisisoi{props.children}</div>

const Thing = (props) => <p>{props.children}</p>

App.propTypes = {
  txt: React.PropTypes.string,
  cat(props, propName, component){
    //this function can be for validation of proptypes associated with this component
      (props[propName])
    }


}

App.defaultProps = {
  txt: "defaultText",
  cat: 6
}

// const App = () => <h1>JSX</h1>
let Yot = "thisstuff"
export { Doodoo, App, Clock, Yot };
