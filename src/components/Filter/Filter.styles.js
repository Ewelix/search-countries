import styled from 'styled-components';

export const SelectWrapper = styled.div`
  .select {
    width: 200px;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: ${({theme}) => theme.shadow};
    
    &__control {
      padding: 5px 5px 5px 10px;
      font-size: ${({theme}) => theme.fontSize.xs};
      font-weight: ${({theme}) => theme.fontWeight.medium};
      background: ${props => props.mode === 'dark' ? '#2b3945' : '#fff'};
      border: none;
    }
    
    &__indicator-separator {
      display: none;
    }
    
    &__menu {
      background: ${props => props.mode === 'dark' ? '#2b3945' : '#fff'};
    }

    &__option {
      padding-left: 20px;
      font-weight: ${({theme}) => theme.fontWeight.medium};
      font-size: ${({theme}) => theme.fontSize.xs};
      
      &:hover {
        // color: ${props => props.mode === 'dark' ? '#111517' : '#fff'};
        background: ${props => props.mode === 'dark' ? '#365472' : '#fff71'};
      }
    }
    
    &__single-value {
      color: inherit;
    }

    &__placeholder {
      color: inherit;
    }
    
    svg {
      fill: ${props => props.mode === 'dark' ? '#fff' : '#111517'};
    }
  }
`;