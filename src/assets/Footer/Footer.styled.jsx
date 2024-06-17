import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: baseline; /* Align items to the baseline */
    justify-content: flex-end; /* Align items to the right */
    background: #333; 
    padding-bottom: 10px;
    `;



export const FooterTextContainer = styled.div`
    display: flex; /* Ensure this container is a flex container */
    align-items: flex-end; /* Align items to the baseline */
    justify-content: flex-end; /* Align items to the right */
    width: 100%;
    height: 100%;
`;

export const FooterIconContainer = styled.div`
    display: flex; /* Ensure this container is a flex container */
    align-items: baseline; /* Align items to the baseline */
    justify-content: center; /* Align items to the right */
    gap: 2em;
    width: 100%;
`;

export const SocialsIcons = styled.img`
    width: 3em;
    height: 3em;
    &:hover {
        background: #444; 
        border-radius: 10px;

      }

`;
