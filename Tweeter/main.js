const renderer = Renderer()
const tweeter = Tweeter();
renderer.renderPosts(tweeter.getPosts())

$("#post").on("click", function(){
    tweeter.addPosts()
    renderer.renderPosts(tweeter.getPosts())
})


$("#posts").on("click", ".delete", function(){
    const deleteThis = $(this).closest("[data-id]").data().id
    tweeter.removePost(deleteThis)
    renderer.renderPosts(tweeter.getPosts())
})

$("#posts").on("click", "#commentButton", function(){
    const inputValue = $(this).siblings("#commentInput").val()
    const postId = $(this).closest(".post-text[data-id]").data().id
    tweeter.addComment(postId, inputValue);
    $(this).siblings("#commentInput").val("")
    renderer.renderPosts(tweeter.getPosts())
})

$("#posts").on("click", ".delete-comment", function(){
    const deleteCommentFromThisPost = $(this).closest(".post-text[data-id]").data().id
    const deleteThisComment = $(this).closest("[data-idcomment]").data().idcomment
    tweeter.removeComment(deleteCommentFromThisPost ,deleteThisComment)
    renderer.renderPosts(tweeter.getPosts())
})
