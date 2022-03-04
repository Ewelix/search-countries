import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 260px;
    border-radius: 10px;
    overflow: hidden;
  
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
`

export const Content = styled.div`
  padding: 0 0 30px 25px;
  
    h5 {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
`;

export const ContentDetails = styled.div`
  p {
    margin: 5px 0;
  }
`;
