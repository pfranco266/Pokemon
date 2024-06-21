import React from "react";
import { SingleCommentContainer, SingleCommentCard, SingleCommentAuthor, SingleCommentTime } from './CommentSection.styled'

function Comments({ comments }) {



    return (
        <SingleCommentContainer>
            COMMENTS: 
            <ul>
                {comments?.length > 0 && comments?.map((comment, index) => {
                    return (
                        <SingleCommentCard key={comment?.id}>
                            <SingleCommentAuthor>{index + 1}: {comment?.author}<SingleCommentTime>(says)</SingleCommentTime> * <SingleCommentTime>{comment.createdAt}</SingleCommentTime></SingleCommentAuthor>
                            <li > {comment?.content}</li>
                        </SingleCommentCard>
                    )
                })}
            </ul>
        </SingleCommentContainer>
    )
}
export default Comments



