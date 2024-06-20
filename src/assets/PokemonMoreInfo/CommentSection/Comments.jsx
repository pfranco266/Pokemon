import React from "react";
import { SingleCommentContainer, SingleCommentCard, SingleCommentAuthor, SingleCommentTime } from './CommentSection.styled'

function Comments({ comments }) {

    console.log('heee', comments.data) // this logs  an array(2) with correct details
    console.log(Array.isArray(comments.data));


    return (
        <SingleCommentContainer>
            COMMENTS: 
            <ul>
                {comments?.data?.length > 0 && comments?.data.map((comment, index) => {
                    return (
                        <SingleCommentCard>
                            <SingleCommentAuthor>{index + 1}: {comment?.author}<SingleCommentTime>(says)</SingleCommentTime> * <SingleCommentTime>{comment.createdAt}</SingleCommentTime></SingleCommentAuthor>
                            <li key={comment?.id}> {comment?.content}</li>
                        </SingleCommentCard>
                    )
                })}
            </ul>
        </SingleCommentContainer>
    )
}
export default Comments