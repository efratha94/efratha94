const Renderer = function() {
        const renderPosts = function(posts){
        $("#posts").empty()
        for (post in posts){
            const postIdNewDiv = $("#posts").append(`<div class="post" data-id=${posts[post].id}></div>`)
            const postTextNewPost =  $(`[data-id=${posts[post].id}]`).append(`<div class="post-text" data-id=${posts[post].id}>${posts[post].text}</div>`)
            const thePostItself = $(`[data-id=${posts[post].id}]`)
            
            for (comment in posts[post].comments){
            const postNewComments = $(`[data-id=${posts[post].id}] .post-text`).append(`<p class="comments" data-idComment=${posts[post].comments[comment].id}>${posts[post].comments[comment].text}</p>`)
            const theCommentId = $(`[data-idComment=${posts[post].comments[comment].id}]`)
            // console.log(posts[post].comments[comment].id)
            }
        }
    }

    return {
        renderPosts,
    }
}

