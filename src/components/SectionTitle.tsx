import styled from 'styled-components';

export const SectionTitle: any = styled.div`
  font-size: ${props => props.theme.fontSize.big};
  font-family: ${props => props.theme.fontFamily.heading};
  font-weight: 600;
  text-transform: ${(props: any) => (props.uppercase ? 'uppercase' : 'normal')};
  text-align: left;
  position: relative;
  line-height: 1.25;
  padding: 1rem 0 0;
  margin-bottom: 1rem;
  &:after {
    content: '';
    height: 1px;
    width: 50px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -25px;
    background: ${props => props.theme.colors.white};
  }
`;
