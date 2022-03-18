import styled from 'styled-components';

export const CardWrapper = styled.div`
  padding: 10% 10px 0 10px;

  @media (${({ theme }) => theme.device.m}) {
    padding-top: 6%;
  }

  a {
    color: inherit;
    background: ${(props) => (props.mode === 'dark' ? '#2b3945' : '#fff')};
    box-shadow: ${({ theme }) => theme.shadow};
    border-radius: 5px;

    @media (${({ theme }) => theme.device.m}) {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }
`;

export const ImageWrapper = styled.div`
  max-width: 560px;

  @media (${({ theme }) => theme.device.s}) {
    width: 50%;
  }

  @media (${({ theme }) => theme.device.m}) {
    flex-basis: 50%;
  }

  img {
    border-radius: 10px;
  }
`;

export const Content = styled.div`
  margin-top: 6%;
  padding-bottom: 2%;

  @media (${({ theme }) => theme.device.m}) {
    display: flex;
    gap: 50px;
    justify-content: space-between;
  }

  p {
    padding: 5px 0;

    @media (${({ theme }) => theme.device.m}) {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }

  h5 {
    font-size: ${({ theme }) => theme.fontSize.l};
    padding: 15px 0 0;

    @media (${({ theme }) => theme.device.m}) {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }

    @media (${({ theme }) => theme.device.l}) {
      flex-basis: 100%;
    }
  }

  strong {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  a {
    padding: 5px 15px;
  }
`;