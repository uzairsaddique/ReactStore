import styled from 'styled-components';
 


export const ButtonContainer = styled.button`
text-transfrom: capitalized !important;
font-size: 1.4rem !important;
background: transparent !important;
border: 0.05rem solid var(--lightBlue) !important;
border-color:${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
border-radius: o.5rem !important;
padding: 0.2rem o.5rem !important;
cursor: pointer !important;
margin: 0.2rem 0.5rem 0.2rem 0 !important;
transition:all 0.5s ease-in-out !important;
&hove{
    background: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainBlue) !important;
}
&:focus{
    outline: none !important;
}

`;