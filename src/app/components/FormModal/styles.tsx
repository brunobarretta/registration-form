import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
`

export const Title = styled.div`
    font-weight: bold;
    width: 700px;
`;

export const Progress = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px;
    box-sizing: border-box;
`;

export const Button = styled.button`
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;