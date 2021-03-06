import styled, { css } from 'styled-components';

const TableBody = styled.div`
  display: flex;
  flex-direction: column;
  ${props => props.fixedHeader && css`
    max-height: ${props.hasOffset ? `calc(100vh - ${props.offset || 0})` : '100vh'};
    overflow: scroll;
  `};
`;

export default TableBody;
