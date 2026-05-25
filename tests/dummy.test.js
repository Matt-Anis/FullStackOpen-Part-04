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