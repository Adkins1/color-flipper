import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
`;
export const Navbar = styled.nav`
    display: flex;
    background: #33d6ff;
    height: 10vh;
    width: 100vw;
    justify-content: space-around;
    align-items: center;
`;
export const NavButton = styled.button`
    height: 80%;
    width: 20%;
    margin: auto;
    border: none;
    background: white;
    color: #33d6ff;
    font-size: 1.5rem;
    cursor: pointer;
    &.active{
        border-bottom: 5px solid #0000ff;
    }
    &:hover{
        background: #b3f0ff;
        color: #00a3cc;
    }
`;
export const NavLogo = styled.div`
    display: flex;
    align-items: center;
    height: 80%;
    width: 20%;
    margin: auto;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    &:hover{
        color: #ccf5ff;
    }
`;
export const MainSection = styled.section`
    background: ${({ color }) => ( color )};
    display: flex;
    height: 90vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const ColorCode = styled.div`
    font-size: 2rem;
    padding: 20px;
    background: #005266;
    color: white;
    width: 40%;
    text-align: center;
    margin: 20px;
    border-radius: 40px;
`;
export const Button = styled.button`
    font-size: 1.2rem;
    background: #33d6ff;
    height: 10%;
    width: 15%;
    border: 4px solid black;
    border-radius: 30px;
    transition: 0.4s;
    cursor: pointer;
    &:hover{
        background: #00b8e6;
        transform: scale(110%);
        transition: 0.4s;
    }
`;