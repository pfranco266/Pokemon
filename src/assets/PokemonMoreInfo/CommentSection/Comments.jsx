import React from "react";
import { SingleCommentContainer, SingleCommentCard, SingleCommentAuthor, SingleCommentTime, EditOrDeleteContainer, EditButton, DeleteButton } from './CommentSection.styled'

function Comments({ comments, handleDelete }) {

    

    return (
        <SingleCommentContainer>
            COMMENTS: 
            <ul>
                {comments?.length > 0 && comments?.map((comment, index) => {
                    return (
                        <SingleCommentCard key={comment?.id}>
                            <SingleCommentAuthor>{index + 1}: {comment?.author}<SingleCommentTime>(says)</SingleCommentTime> * <SingleCommentTime>{comment.createdAt}</SingleCommentTime></SingleCommentAuthor>
                            <li > {comment?.content}</li>
                            <EditOrDeleteContainer>
                                <EditButton>Edit Comment</EditButton>
                                <DeleteButton onClick={() => handleDelete(comment?.id)}>Delete Comment</DeleteButton>

                            </EditOrDeleteContainer>
                        </SingleCommentCard>
                    )
                })}
            </ul>
        </SingleCommentContainer>
    )
}
export default Comments



