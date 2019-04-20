import styled from 'styled-components';

export const Wrapper: any = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: ${(props: any) => (props.fullWidth ? '100%' : '40')};
  padding: ${(props: any) => (props.fullWidth ? '0' : '0 1rem')};
`;
