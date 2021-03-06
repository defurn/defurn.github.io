import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

var defaultText = 'Heading\n' +
'=======\n '+
'\n' +
'Sub-heading\n ' +
'-----------\n ' +
 '\n' +
'### Another deeper heading\n ' +
'\n ' +
'Paragraphs are separated\n ' +
'by a blank line.\n ' +
'\n ' +
'Leave 2 spaces at the end of a line to do a  \n ' +
'line break\n ' +
'\n ' +
'Text attributes *italic*, **bold**, \n ' +
'monospace`, ~~strikethrough~~ .\n ' +
'\n ' +
'Shopping list:\n ' +
'\n ' +
'  * apples\n ' +
'  * oranges\n ' +
'  * pears\n ' +
'\n ' +
'Numbered list:\n ' +
'\n ' +
'  1. apples\n ' +
'  2. oranges\n ' +
'  3. pears\n ' +
'\n ' +
'The rain---not the reign---in\n ' +
'Spain.\n ' +
'\n ' +
 '*[Donald Furnival](https://freecodecamp.com/defurni)*';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      input : defaultText,
      output : marked(defaultText),
      err:''
    }
    this.update = this.update.bind(this);
  }
  update(e){
    let code = e.target.value;
    try{
      this.setState({output : (marked(code)),
      err:''
      })
    }
    catch(err){
      this.setState({err:err.message})

    }
  }

  render() {
    var text = this.state.output;
    console.log(text);
    return (
      <div>
        <header>MarkDown Previewer<br/><h5><a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet" target="_blank">markdown reference</a></h5></header>

        <div className="container">
          <textarea
            id="textarea"
            onChange={this.update.bind(this)}
            defaultValue={this.state.input}>
          </textarea>
          <div id="markdown" dangerouslySetInnerHTML={{__html: this.state.output}} />
        </div>
          <div id="oncodepen"> <a href="http://codepen.io/defurni/full/pydyrp/"><h4>on codepen</h4></a></div>
      </div>
    )
  }
}


export default App;
