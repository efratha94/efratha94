const renderer = Renderer()
renderer.renderPosts(tweeter.getPosts())

$("#container").find(".post-text").prepend("<span class='delete'>X</span>")
$("#posts").find(".post-text").append("<div class='newComment'></div>") 
const newComment = $("<div><input type='text' placeholder='Add comment' id='commentInput'></input><span id='commentButton'>Comment</span></div>")
$(".newComment").append(newComment)
const deleteComment = $("<span class='delete-comment'>X</span>")
$("#container").find(".comments").prepend(deleteComment)

//sat on this one for quite a while!!! 
$("#post").on("click", function(){
    tweeter.addPosts()
    renderer.renderPosts(tweeter.getPosts())
    const deleteButton = $("#container").find(".post-text").prepend("<span class='delete'>X</span>")
    const addComment = $("#posts").find(".post-text").append(newComment)
    $("#container").find(".comments").prepend(deleteComment)
})


$("#posts").on("click", ".delete", function(){
    const deleteThis = $(this).closest("[data-id]").data().id
    tweeter.removePost(deleteThis)
    renderer.renderPosts(tweeter.getPosts())
    const deleteButton = $("#container").find(".post-text").prepend("<span class='delete'>X</span>")
    const addComment = $("#posts").find(".post-text").append(newComment)
    $("#container").find(".comments").prepend(deleteComment)
})

$("#posts").on("click", "#commentButton", function(){
    const inputValue = $(this).siblings("#commentInput").val()
    tweeter.addComment($(this).closest(".post-text[data-id]").data().id, inputValue);
    $(this).siblings("#commentInput").val("")
    
    renderer.renderPosts(tweeter.getPosts())
    const deleteButton = $("#container").find(".post-text").prepend("<span class='delete'>X</span>")
    const addComment = $("#posts").find(".post-text").append(newComment)
    $("#container").find(".comments").prepend(deleteComment)
})

$("#posts").on("click", ".delete-comment", function(){
    const deleteCommentFromThisPost = $(this).closest(".post-text[data-id]").data().id
    const deleteThisComment = $(this).closest("[data-idcomment]").data().idcomment
    tweeter.removeComment(deleteCommentFromThisPost ,deleteThisComment)

    renderer.renderPosts(tweeter.getPosts())
    const deleteButton = $("#container").find(".post-text").prepend("<span class='delete'>X</span>")
    const addComment = $("#posts").find(".post-text").append(newComment)
    $("#container").find(".comments").prepend(deleteComment)

})

// $("#posts").on("click", "[data-idcomment]", function(){
//     console.log($(this).data().idcomment)
    // let commentId = $(this).closest("[data-idcomment]").data().idcomment.slice(1)
    // console.log(commentId)
    // const newCommentId = `c${commentId++}`
    // console.log(newCommentId)

//     renderer.renderPosts(tweeter.getPosts())
//     const deleteButton = $("#container").find(".post-text").prepend("<span class='delete'>X</span>")
//     const addComment = $("#posts").find(".post-text").append(newComment)
//     $("#container").find(".comments").prepend(deleteComment)
// })

