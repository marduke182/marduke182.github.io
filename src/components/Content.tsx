import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 9000;
  max-width: 40rem;
  form {
    p {
      label,
      input {
        display: block;
      }
      input {
        min-width: 275px;
      }
      textarea {
        resize: vertical;
        min-height: 150px;
        width: 100%;
      }
    }
  }
`;
