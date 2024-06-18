import React, {useEffect, useState} from "react";
import { CommentSectionContainer, CommentForm, CommentLabel, CommentTextField, CommentSubmitButton } from "./CommentSection.styled";
import Comments from "./Comments.jsx"

function CommentSection ({id}) {

    const [comments, setComments] = useState([]);
    const [textField, setTextField] = useState('')

    async function fetchComments(id) {
        try {
            const res = await fetch(`http://localhost:3000/collection/${id}`);
           
            const data = await res.json();
            console.log(data);
            ;
        } catch (error) {
            console.error('Fetch error:', error); // Log the error for debugging
        }
    }


    useEffect(() => {
        fetchComments(id);
    }, [])


    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setComments(prev=> [
                ...prev,
                {
                    id: Date.now(),
                    description: e.target.elements.comment.value,
                }
            ])

        } catch (error) {
            
        }
    }

    function handleChange (e) {
        setTextField(e.target.value)
    }


        console.log(comments)
    return (
        <CommentSectionContainer>
            <CommentForm onSubmit={handleSubmit} >
                <CommentLabel htmlFor="Comments">Add a Comment:</CommentLabel>
                <CommentTextField name="comment" value={textField} onChange={handleChange} />
                <CommentSubmitButton type="submit">Submit Comment</CommentSubmitButton>
            </CommentForm>
            <Comments comments={comments}/>
        </CommentSectionContainer>
    )
}

export default CommentSection