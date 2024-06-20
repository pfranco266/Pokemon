import styled from "styled-components";


export const CommentSectionContainer = styled.section`
    width: 80%;
    display: flex;
    flex-direction: column;
`

export const CommentForm = styled.form`
    display: flex;
    flex-direction: column;

`

export const CommentLabel = styled.label`
    font-size: 24px;
`

export const CommentTextField = styled.textarea`
    width: 400px;
    height: 100px;
`

export const CommentSubmitButton = styled.button`
width: 200px;
height: 48px;
padding: 10px;
border: 4px solid #3b4cca;
background-color: #ffcc00;
color: #3b4cca;
border-radius: 5px;
font-size: 16px;
font-weight: bold;
outline: none;
margin-left: 1em;
transition: border-color 0.3s ease;


&:focus {
  border-color: #007bff;
}
&: hover{
  cursor: pointer;
}

@media(max-width: 768px) {
  font-size: 14px;
  padding: 8px;
  margin-left: 0;

}

`

export const SingleCommentContainer = styled.section`
  width: 500px;
  display: flex;
  flex-direction: column;

`

export const SingleCommentCard = styled.div`
  text-wrap: wrap;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  background-color: #050404;
  margin: 15px 0;



`

export const SingleCommentAuthor = styled.h3`

`

export const SingleCommentTime = styled.span`
  font-size: 12px;
  opacity: .7;
  text-decoration: italic;
`