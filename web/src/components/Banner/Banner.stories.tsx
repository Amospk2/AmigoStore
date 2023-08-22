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

import Banner from './Banner'

const meta: Meta<typeof Banner> = {
  component: Banner,
}

export default meta

type Story = StoryObj<typeof Banner>

export const Primary: Story = {}
