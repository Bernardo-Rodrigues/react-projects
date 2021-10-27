import styled from "styled-components";

export const Table = styled.table<{ area: number }>`
    ${props => props.area === 2 ? "" : "display: none"};    
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

export const Container = styled.div<{ area: number }>`
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: ${props => props.area === 2 ? "flex" : "none"};
    align-items: center;
`;
export const Titulo = styled.div`
    align-items: center;
    font-weight: bold;
    flex: 6;
`;
export const Total = styled.div`
    align-items: center;
    font-weight: bold;
    flex: 1;
`;
export const Invisivel = styled.p`
    display: none;
`;