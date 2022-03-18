import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 260px;
  margin-bottom: 5%;
  color: ${(props) => (props.mode === 'dark' ? '#fff' : '#111517')};
  border-radius: 10px;
  overflow: hidden;
  background: ${(props) => (props.mode === 'dark' ? '#2b3945' : '#fff')};
  box-shadow: ${({ theme }) => theme.shadow};

  a {
    color: inherit;
  }

  img {
    max-width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  img {
    width: 260px;
    height: 160px;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  padding: 0 10px 30px 25px;

  h5 {
    padding: 25px 0 15px;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const ContentDetails = styled.div`
  p {
    margin: 5px 0;
    font-weight: ${({ theme }) => theme.fontWeight.light};

    strong {
      font-weight: ${({ theme }) => theme.fontWeight.medium};
    }
  }
`;
