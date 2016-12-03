'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultText = 'Heading\n' + '=======\n ' + '\n' + 'Sub-heading\n ' + '-----------\n ' + '\n' + '### Another deeper heading\n ' + '\n ' + 'Paragraphs are separated\n ' + 'by a blank line.\n ' + '\n ' + 'Leave 2 spaces at the end of a line to do a  \n ' + 'line break\n ' + '\n ' + 'Text attributes *italic*, **bold**, \n ' + 'monospace`, ~~strikethrough~~ .\n ' + '\n ' + 'Shopping list:\n ' + '\n ' + '  * apples\n ' + '  * oranges\n ' + '  * pears\n ' + '\n ' + 'Numbered list:\n ' + '\n ' + '  1. apples\n ' + '  2. oranges\n ' + '  3. pears\n ' + '\n ' + 'The rain---not the reign---in\n ' + 'Spain.\n ' + '\n ' + '*[Donald Furnival](https://freecodecamp.com/defurni)*';

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.state = {
      input: defaultText,
      output: marked(defaultText),
      err: ''
    };
    _this.update = _this.update.bind(_this);
    return _this;
  }

  App.prototype.update = function update(e) {
    var code = e.target.value;
    try {
      this.setState({ output: marked(code),
        err: ''
      });
    } catch (err) {
      this.setState({ err: err.message });
    }
  };

  App.prototype.render = function render() {
    var text = this.state.output;
    console.log(text);
    return React.createElement(
      'div',
      null,
      React.createElement(
        'header',
        null,
        'MarkDown Previewer',
        React.createElement('br', null),
        React.createElement(
          'h5',
          null,
          React.createElement(
            'a',
            { href: 'https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet', target: '_blank' },
            'markdown reference'
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement('textarea', {
          id: 'textarea',
          onChange: this.update.bind(this),
          defaultValue: this.state.input }),
        React.createElement('div', { id: 'markdown', dangerouslySetInnerHTML: { __html: this.state.output } })
      )
    );
  };

  return App;
}(React.Component);

React.render(React.createElement(App, null), document.getElementById('app'));