import styled from 'styled-components';

export const Container = styled.div<{ area: number }>`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: ${props => props.area === 1 ? "flex" : "none"};
    align-items: center;
`;
export const InputLabel = styled.label`
    flex: 1;
    margin: 10px;
`;
export const Button = styled.button<{ color: string }>`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid ${props => props.color};
    border-radius: 5px;
    background-color: ${props => props.color};
    color: white;
    cursor: pointer;

    &:hover {
        background-color: dark${props => props.color};
    }
`;