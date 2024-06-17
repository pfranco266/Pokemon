import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    height: 15vh;
    display: flex;
    align-items: baseline; /* Align items to the baseline */
    justify-content: flex-end; /* Align items to the right */
    background: #333; 
    padding-bottom: 10px;
    `;

export const FooterIconContainer = styled.div`
    display: flex; /* Ensure this container is a flex container */
    align-items: baseline; /* Align items to the baseline */
    justify-content: space-evenly; /* Align items to the right */
    width: 100%;
`;

export const FooterTextContainer = styled.div`
    display: flex; /* Ensure this container is a flex container */
    align-items: flex-end; /* Align items to the baseline */
    justify-content: flex-end; /* Align items to the right */
    width: 100%;
    height: 100%;
`;

export const SocialsIcons = styled.img`
    width: 5em;
    height: 5em;

`;
