import React from 'react'
import {
  HospitalIcon,
  MedkitIcon,
  StethoscopeIcon,
  ExtraInfoArea,
  ExtraInfoTag,
  H6
} from './styles'

const ExtraInfoTagComponent = () => (
  <ExtraInfoArea>
    <ExtraInfoTag>
      <MedkitIcon /> <H6>31k+ clinical trials</H6>
    </ExtraInfoTag>

    <ExtraInfoTag>
      <HospitalIcon /> <H6>100k Researchers</H6>
    </ExtraInfoTag>

    <ExtraInfoTag>
      <StethoscopeIcon /> <H6>200+ medical conditions</H6>
    </ExtraInfoTag>
  </ExtraInfoArea>
)

export default ExtraInfoTagComponent
