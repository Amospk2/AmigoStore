import { render } from '@redwoodjs/testing/web'

import GroupProducts from './GroupProducts'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GroupProducts', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GroupProducts />)
    }).not.toThrow()
  })
})
