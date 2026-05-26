const { test, describe } = require('node:test')
const assert = require('assert')
const listHelper = require('../utils/list_helper')

describe('dummy returns one', () => {
    const blogs = []

    test('dummy returns one', () => {
        const result = listHelper.dummy(blogs)
        assert.strictEqual(result, 1)
    })
})

describe('total likes', () => {
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
      likes: 5,
      __v: 0
    }
  ]

  const emptyList = []

  const biggerList = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f9',
      title: 'Python for Beginners',
      author: 'John Doe',
      url: 'https://example.com/python-for-beginners',
      likes: 10,
      __v: 0
    }
  ]


  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    assert.strictEqual(result, 5)
  })

  test('when list is empty, equals zero', () => {
    const result = listHelper.totalLikes(emptyList)
    assert.strictEqual(result, 0)
  })

  test('when list has multiple blogs, equals the sum of their likes', () => {
    const result = listHelper.totalLikes(biggerList)
    assert.strictEqual(result, 15)
  })

  test('favorite blog', () => {
    const result = listHelper.favoriteBlog(biggerList)
    assert.deepStrictEqual(result, biggerList[1])
  })

  test('most blogs', () => {
    const result = listHelper.mostBlogs(biggerList)
    assert.deepStrictEqual(result, { author: 'Edsger W. Dijkstra', blogs: 1 })

})
})