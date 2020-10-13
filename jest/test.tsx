import 'react-native'
import React from 'react'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'
import { Home } from '../src/modules/App/Home'

it('renders correctly', () => {
  const snap = renderer.create(<Home />).toJSON()
  expect(snap).toMatchSnapshot()
})
