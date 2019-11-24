const Renderer = function() {
    const renderPosts = function(posts){
        $("#posts").empty()
        for (post in posts){
            const chosenPost = posts[post]
            const postIdNewDiv = $("#posts").append(`<div class="post" data-id=${chosenPost.id}></div>`)
            const postTextNewPost =  $(`[data-id=${posts[post].id}]`).append(`<div class="post-text" data-id=${chosenPost.id}>${chosenPost.text}</div>`)
            const thePostItself = $(`[data-id=${chosenPost.id}] .post-text`)
            
            
            for (comment in posts[post].comments){
                let chosenComment = posts[post].comments[comment]
                const postNewComments = $(thePostItself).append(`<p class="comments" data-idComment=${chosenComment.id}>${chosenComment.text}</p>`)
            }
        }
        $(".post-text").prepend("<span class='delete'>X</span>")
        $(".comments").prepend("<span class='delete-comment'>X</span>")
        const commentSection = $("#posts").find(".post-text").append("<div class='newComment'></div>")
        const newComment = $("<input type='text' placeholder='Add comment' id='commentInput'></input><span id='commentButton'>Comment</span>")
        $(".newComment").append(newComment)

    }

    return {
        renderPosts
    }
}
