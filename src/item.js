import styled from 'styled-components';
import is from 'styled-is';

const FlexItem = styled.div`
  ${is('order')`
    order: ${props => props.order}
  `};

  ${is('basis')`
    flex-basis: ${props => props.basis}
  `};

  ${is('grow')`
    flex-grow: 1;
  `};

  ${is('shrink')`
    flex-shrink: 1;
  `};

  ${is('noShrink')`
    flex-shrink: 0;
  `};
`;

export default FlexItem;