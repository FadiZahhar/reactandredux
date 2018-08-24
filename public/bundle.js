(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cards = function cards(state, action) {
    switch (action.type) {
        case 'ADD_CARD':
            var newCard = Object.assign({}, action.data, {
                score: 1,
                id: +new Date()
            });
            return state.concat([newCard]);
        default:
            return state || [];
    }
};

var store = Redux.createStore(Redux.combineReducers({
    cards: cards
}));

var App = function App(props) {
    return React.createElement(
        'div',
        { className: 'app' },
        React.createElement(
            'h1',
            null,
            props.children
        )
    );
};

var Sidebar = function (_React$Component) {
    _inherits(Sidebar, _React$Component);

    function Sidebar() {
        _classCallCheck(this, Sidebar);

        return _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).apply(this, arguments));
    }

    _createClass(Sidebar, [{
        key: 'render',
        value: function render() {
            var props = this.props;
            return React.createElement(
                'div',
                { className: 'sidebar' },
                React.createElement(
                    'h2',
                    null,
                    ' All Decks '
                ),
                React.createElement(
                    'ul',
                    null,
                    props.decks.map(function (deck, i) {
                        return React.createElement(
                            'li',
                            { key: i },
                            ' ',
                            deck.name,
                            ' '
                        );
                    })
                ),
                props.addingDeck && React.createElement('input', { ref: 'add' })
            );
        }
    }]);

    return Sidebar;
}(React.Component);

;

ReactDOM.render(React.createElement(
    App,
    null,
    React.createElement(Sidebar, { decks: [{ name: 'Deck 1' }], addingDeck: true })
), document.getElementById('root'));

},{}]},{},[1]);
