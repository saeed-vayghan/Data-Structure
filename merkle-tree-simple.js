'user strict'

const _    = require('lodash')
const sha1 = require('sha1')


const A = [
  {
    id: 'root',
    text: 'text-root',
    parent: 'Array-A',
    childNum: 2
  },
    {
      id: 'A-1',
      text: 'text-1',
      parent: 'root',
      childNum: 2
    },
      {
        id: 'A-1.1',
        text: 'text-1.1',
        parent: 'A-1',
        childNum: 0
      },
      {
        id: 'A-1.2',
        text: 'text-1.2',
        parent: 'A-1',
        childNum: 3
      },
        {
          id: 'A-1.2.1',
          text: 'text-1.2.1',
          parent: 'A-1.2',
          childNum: 0
        },
        {
          id: 'A-1.2.2',
          text: 'text-1.2.1',
          parent: 'A-1.2',
          childNum: 2
        },
          {
            id: 'A-1.2.2.1',
            text: 'text-1.2.2.1',
            parent: 'A-1.2.2',
            childNum: 0
          },
            {
              id: 'A-1.2.2.2',
              text: 'text-1.2.2.2',
              parent: 'A-1.2.2',
              childNum: 0
            },
        {
          id: 'A-1.2.3',
          text: 'text-1.2.3',
          parent: 'A-1.2',
          childNum: 0
        },

    {
      id: 'A-2',
      text: 'text-2',
      parent: 'root',
      childNum: 1
    },
      {
        id: 'A-2.1',
        text: 'text-2.1',
        parent: 'A-2',
        childNum: 1
      },
        {
          id: 'A-2.1.1',
          text: 'text-2.1.1',
          parent: 'A-2.1',
          childNum: 0
        }
]

const A_Clone = [
  {
    id: 'root',
    text: 'text-root',
    parent: 'Array-A',
    childNum: 2
  },
    {
      id: 'A-1',
      text: 'text-1',
      parent: 'root',
      childNum: 2
    },
      {
        id: 'A-1.1',
        text: 'text-1.1',
        parent: 'A-1',
        childNum: 0
      },
      {
        id: 'A-1.2',
        text: 'text-1.2',
        parent: 'A-1',
        childNum: 3
      },
        {
          id: 'A-1.2.1',
          text: 'text-1.2.1',
          parent: 'A-1.2',
          childNum: 0
        },
        {
          id: 'A-1.2.2',
          text: 'text-1.2.1',
          parent: 'A-1.2',
          childNum: 2
        },
          {
            id: 'A-1.2.2.1',
            text: 'text-1.2.2.1',
            parent: 'A-1.2.2',
            childNum: 0
          },
            {
              id: 'A-1.2.2.2',
              text: 'text-1.2.2.2',
              parent: 'A-1.2.2',
              childNum: 0
            },
        {
          id: 'A-1.2.3',
          text: 'text-1.2.3',
          parent: 'A-1.2',
          childNum: 0
        },

    {
      id: 'A-2',
      text: 'text-2',
      parent: 'root',
      childNum: 1
    },
      {
        id: 'A-2.1',
        text: 'text-2.1',
        parent: 'A-2',
        childNum: 1
      },
        {
          id: 'A-2.1.1',
          text: 'text-2.1.1',
          parent: 'A-2.1',
          childNum: 0
        }
]


const hashFunc = function (str) {
  return sha1(str)
}

const traverse = function(input) {
  const hashMap = {}

  for (key in input) {
    if ( typeof input[key] === 'object' ) {
      hashMap[key] = []

      const temp = []

      input[key].forEach(leaf => {
        temp.push(hashFunc(`${leaf.text}-${leaf.childNum}`))
      })

      hashMap[key] = hashFunc(temp.join(';'))
    }
  }

  return hashFunc(Object.values(hashMap).join(';'))
}


const tree_a       = _.groupBy(A, 'parent')
const tree_a_clone = _.groupBy(A_Clone, 'parent')

const hash_a       = traverse(tree_a)
const hash_a_clone = traverse(tree_a_clone)


if (hash_a === hash_a_clone) {
  console.log('Arrays are equal.')
}
