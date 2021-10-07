import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;

    .image{
        margin-right: 5px;
    }
    .inputs{
        display:flex;
        width:100%
    }
    .text{
        flex:7;
    }
    label{
        font-size: 18px;
    }
    .number{
        padding-left:10px;
        margin-left:10px;
        border-left: 3px solid #555;
    }
    input{
        border: 0px;
        background: transparent;
        outline: 0;
        color: #fff;
        font-size: 18px;
        flex: 1;
    }
`;