import styled from "styled-components";

export const Table = styled.table<{ area:number }>`
    ${props => props.area === 1 || props.area === 3 ? "" : "display: none"};
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 10px;
    margin-top: 20px;
`;
export const TableHeadColumn = styled.th<{ width?: number }>`
    width: ${props => props.width ? `${props.width}px` : 'auto'};
    padding: 10px 0px;
    text-align: left;
`;