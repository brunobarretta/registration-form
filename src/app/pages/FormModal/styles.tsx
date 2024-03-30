import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
`

export const Header = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FinishedContent = styled.div`
    display: flex;
    gap: 20px;
    padding: 0px 20px;
`

export const Title = styled.div`
    font-weight: bold;
    max-width: 700px;
    font-size: 22px;
`;

export const SubTitle = styled.div`
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 15px;
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