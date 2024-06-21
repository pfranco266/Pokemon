import React, {useEffect, useState, useReducer} from "react";
import { CommentSectionContainer, CommentForm, CommentLabel, CommentTextField, CommentSubmitButton } from "./CommentSection.styled";
import { v4 as uuid } from 'uuid';
import Comments from "./Comments"
import { initialComments, commentReducer } from "../../Reducers/commentsReducer";

function CommentSection ({id}) {



    const [textField, setTextField] = useState('')
    const [comments, setComments] = useReducer(commentReducer, initialComments);


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
    }, [id])

  


    async function handleSubmit(e) {
        e.preventDefault();
        const commentData = {
            id: uuid(),
            content: e.target.elements.comment.value,
            pokemonId: id, 
            author: 'some dude'
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
            } );

            setTextField('')

        } catch (error) {
            console.log(error.message)
        }
    }

    function handleChange (e) {
        setTextField(e.target.value)
    }

    return (
        <CommentSectionContainer>
            <CommentForm onSubmit={handleSubmit} >
                <CommentLabel htmlFor="Comments">Add a Comment:</CommentLabel>
                <CommentTextField name="comment" value={textField} onChange={handleChange} />
                <CommentSubmitButton type="submit">Submit Comment</CommentSubmitButton>
            </CommentForm>
            <Comments comments={comments?.commentsList}/>
        </CommentSectionContainer>
    )
}

export default CommentSection