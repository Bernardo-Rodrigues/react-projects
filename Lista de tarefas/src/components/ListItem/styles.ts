import styled from 'styled-components';

type ContainerProps  = {
    priority: number;
    done: boolean;
}

export const Container = styled.div(({priority, done}: ContainerProps) => (
`
    display: flex;
    background-color: #20212c;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;
    border: ${
        priority === 1 ? '3px solid blue' : 
        priority === 2 ? '3px solid green' :
        priority === 3 ? '3px solid yellow' :
        priority === 4 ? '3px solid orangered' :
        priority === 5 ? '3px solid red' :
        '0px'};

    input {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }
`
));

