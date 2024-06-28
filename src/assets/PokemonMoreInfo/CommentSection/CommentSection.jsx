import React, {useEffect, useState, useReducer} from "react";
import { CommentSectionContainer, CommentForm, CommentLabel, AuthorInput, CommentTextField, CommentSubmitButton } from "./CommentSection.styled";
import { v4 as uuid } from 'uuid';
import Comments from "./Comments"
import { initialComments, commentReducer } from "../../Reducers/commentsReducer";

function CommentSection ({id}) {



    const [textField, setTextField] = useState('')
    const [inputField, setInputField] = useState('')

    const [comments, setComments] = useReducer(commentReducer, initialComments);

    //fetch initial comments
    async function fetchComments(id) {
        try {
            const res = await fetch(`http://localhost:3000/collection/${id}`);
            const data = await res.json();

            setComments({
                type: 'fetchComments',
                payload: data.data
            })

            console.log(comments)



        } catch (error) {
            console.error('Fetch error:', error); 
        }
    }



    useEffect(() => {
        fetchComments(id);
        setTextField('')
    }, [id])

  

    //handle the submission 
    async function handleSubmit(e) {
        e.preventDefault();
        const commentData = {
            id: uuid(),
            content: e.target.elements.comment.value,
            pokemonId: id, 
            author: e.target.elements.author.value
        }
        try {
        
            const res = await fetch(`http://localhost:3000/collection/${id}`, {
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'application/json',
                      },
                    body: JSON.stringify(commentData),
                })
     
            if(!res.ok) {
                throw new Error('error posting comment')
            }
            const data = await res.json()
                   
            setComments({
                type: 'submitComment',
                payload: data.comment,
            });

            setTextField('')

        } catch (error) {
            console.log(error.message)
        }
    }

   async function handleDelete(commentId) {


        try {
            const res = await fetch(`http://localhost:3000/collection/${id}`, {
                    method: 'DELETE', 
                    headers: {
                        'Content-Type': 'application/json',
                      },
                    body: JSON.stringify({ commentId }),
                })
                console.log(res)
     
            if(!res.ok) {
                const errorText = await res.text();
                console.error('Failed to delete comment:', errorText);
                throw new Error('Failed to delete comment');
            }
            const data = await res.json()
            setComments({
                type: 'deleteComment',
                payload: commentId,
            });

        } catch (error) {
            console.log(error.message)
        }
    }

    function handleUsernameChange(e) {
        setInputField(e.target.value);
      }
    
      function handleCommentChange(e) {
        setTextField(e.target.value);
      }

    return (
        <CommentSectionContainer>
            <CommentForm onSubmit={handleSubmit} >
                <CommentLabel htmlFor="Comments">Add a Comment:</CommentLabel>
                <AuthorInput
                placeholder="add your username"
                value={inputField}
                name="author"
                onChange={handleUsernameChange}
                />
                <CommentTextField 
                placeholder="Bulbasaur is way better than the other starter Pokemon..."
                 name="comment" 
                 value={textField} onChange={handleCommentChange} />
                <CommentSubmitButton type="submit">Submit Comment</CommentSubmitButton>
            </CommentForm>
            <Comments handleDelete={handleDelete} comments={comments?.commentsList}/>
        </CommentSectionContainer>
    )
}

export default CommentSection