import styled from 'styled-components'
import {ReactComponent as HospitalSVG} from './Hospital.svg'
import {ReactComponent as MedkitSVG} from './Medkit.svg'
import {ReactComponent as StethoscopeSVG} from './Stethoscope.svg'

export const HospitalIcon = styled(HospitalSVG)`
  height: auto;
  max-width: var(--font-size--medium);
  width: 100%;
`
export const MedkitIcon = styled(MedkitSVG)`
  height: auto;
  max-width: var(--font-size--medium);
  width: 100%;
`
export const StethoscopeIcon = styled(StethoscopeSVG)`
  height: auto;
  max-width: var(--font-size--medium);
  width: 100%;
`

export const ExtraInfoArea = styled.section`
  display: flex;
  pointer-events: none;
  justify-content: space-between;
`
export const ExtraInfoTag = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.4rem;
`
export const H6 = styled.h6`
  font-size: var(--font-size--normal);
  margin-left: 4px;
  font-weight: var(--font-weight-samibold);
`
