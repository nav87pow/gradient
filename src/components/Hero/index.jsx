import React from 'react'
import {Hero, H1, H2} from './styles'
import SearchBar from './SearchBar'
import ExtraInfo from './ExtraInfo'

const HeroComponent = () => (
  <Hero>
    <H1>
      Find promising clinical trials
      <br />
      for Breast Cancer
    </H1>
    <H2>Browse medical trials by condition, location, and treatment.</H2>
    <SearchBar />
    <ExtraInfo />
  </Hero>
)
export default HeroComponent
