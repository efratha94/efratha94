// const Tweeter = function() {
//     const posts = [
//         {
//             text: "First post!",
//             id: "p1",
//             comments: [
//                 { id: "c1", text: "First comment on first post!" },
//                 { id: "c2", text: "Second comment on first post!!" },
//                 { id: "c3", text: "Third comment on first post!!!" }
//             ]
//         },
//         {
//             text: "Aw man, I wanted to be first",
//             id: "p2",
//             comments: [
//                 { id: "c4", text: "Don't wory second poster, you'll be first one day." },
//                 { id: "c5", text: "Yeah, believe in yourself!" },
//                 { id: "c6", text: "Haha second place what a joke." }
//             ]
//         }
//     ];
    
//     // let postIdCounter = posts.length;
//     // let commentIdCounter = 0;  //yoni's modification - much easier!!!!! for each comment of the post comments the counter goes up by 1.
//     // for (post of posts){
//     //     for (comment of post.comments){
//     //         commentIdCounter++
//     //     }
//     // }
       
//     // const addPosts = function(text){
//     //   postIdCounter += 1
//     //   posts.push({text, id:"p"+postIdCounter, comments: []})
//     // }

//     // const addComment = function (postId, text){
//     //     commentIdCounter++
//     //     for(let post in posts){
//     //         if (posts[post].id == postId){
                
//     //             posts[post]["comments"].push({id: "c"+commentIdCounter, text})
//     //             console.log(posts[post].comments)
//     //         }
//     //     }
//     // }

    // const getPosts = function(){
    //     return posts
    // }

// //     const removePost = function (postId) {
// //         for (let post in posts){
// //         if (posts[post].id == postId){
// //             posts.splice(post, 1)
// //             return posts[post].comments
// //         }
// //     }
// // }

// //     const removeComment = function(postId, commentId){
// //         for (let post in posts){
// //             if (posts[post].id === postId){
// //                 for(comment in posts[post].comments){
// //                         if(posts[post].comments[comment].id === commentId){
// //                             posts[post].comments.splice([comment], 1)
                            
// //                     }
// //                 }
// //             }
// //         }
// //     }

    // return {
        // postIdCounter,
        // commentIdCounter,
        // getPosts,
        // addPosts,
        // removePost,
        // addComment,
        // removeComment,
//     }
// }
// const tweeter = Tweeter();
// const tweeterPosts = tweeter.getPosts()


// tweeter.addPosts("Hurray")
// tweeter.addPosts("It's a holiday")
// tweeter.removePost("p3")
// tweeter.addComment("p2", "hey you")
// tweeter.addComment("p4", "please let it work")

// tweeter.removeComment("p1", "c2")
// console.log(tweeter.getPosts())

const Renderer = function() {
        const renderPosts = function(posts){
        $("#posts").empty()
        for (post in posts){
            const postIdNewDiv = $("#posts").append(`<div data-id=${posts[post].id}></div>`)
            const postTextNewPost =  $(`[data-id=${posts[post].id}]`).append(`<div class="post-text" data-id=${posts[post].id}>${posts[post].text}</div>`)
            const thePostItself = $(`[data-id=${posts[post].id}]`)

            for (comment in posts[post].comments){
            const postNewComments = $(`[data-id=${posts[post].id}] .post-text`).append(`<p class="comments" comment-data-id=${posts[post].comments[comment].id}>${posts[post].comments[comment].text}</p>`)
            const theCommentId = $(`[data-id=${posts[post].comments[comment].id}]`)
            console.log(theCommentId)
            }
        }
    }

    return {
        renderPosts,
    }
}

// const renderer = Renderer();
// renderer.renderPosts(tweeterPosts)