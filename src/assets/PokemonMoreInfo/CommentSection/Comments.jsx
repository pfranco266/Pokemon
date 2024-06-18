import React from "react";

function Comments({comments}) {
    console.log('heee', comments)
    return (
        <div>
            <ul>
                {comments?.length > 0 && comments?.map((comment, index) => {
                    return <li key={comment.id}>{index}: {comment.description}</li>
                })}
            </ul>
        </div>
    )
}
export default Comments