'use strict'

const Component = require('preact').Component
const h = require('preact').h

const Leaf = (props) => {
  return h('div', null, 'abcdefghij')
}

class App extends Component {
  render(props, state) {
    const depth = props.depth
    const breadth = props.breadth

    if (depth <= 0) {
      return h(Leaf)
    }

    let children = []

    for (let i = 0; i < breadth; i++) {
      children.push(h(App, {
        depth: depth - 1,
        breadth: breadth
      }))
    }

    return h('div', null, children)
  }
}

module.exports = App