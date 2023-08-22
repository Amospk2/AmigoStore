// Pass props to your component by passing an `args` object to your story
//
// ```jsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import GroupProducts from './GroupProducts'

const meta: Meta<typeof GroupProducts> = {
  component: GroupProducts,
}

export default meta

type Story = StoryObj<typeof GroupProducts>

export const Primary: Story = {}
