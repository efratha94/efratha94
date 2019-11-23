const Tweeter = function() {
    const posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ];
    
    let postIdCounter = posts.length;
    let commentIdCounter = 0;  //yoni's modification - much easier!!!!! for each comment of the post comments the counter goes up by 1.
    for (post in posts){
        for (comment in post){
            
            // console.log(commentIdCounter = CommentIdSliced)
            // commentIdCounter = CommentIdSliced  
        }
    }
    
    // my try to do a comment id counter. worked blah. keeping it here anyway just to be able to see what i did
    // console.log(commentIdCounter) 
    // let commentIdCounter = (postId) => { //maybe an if..else if array is empty
    //     for (post in posts){
    //         if (posts[post].id === postId){
    //             for (comment in post){
    //             let commentId = posts[post].comments
    //             console.log(commentId)
                // let lastCommentId = commentId[commentId.length-1]
    //             let lastCommentIdNum = lastCommentId.id.slice(1)
    //             lastCommentIdNum++
    //             return lastCommentIdNum
    //             }
    //         }
    //     }
    // }
   
    const addPosts = function(){
      postIdCounter += 1
      posts.push({text: $("#input").val(), id:"p"+postIdCounter, comments: []})
    }

    const addComment = function (postId, text){
        // commentIdCounter++
        for(let post in posts){
            if (posts[post].id == postId){
                if (posts[post].comments.length > 0){
                let CommentIdSliced = posts[post].comments.slice(-1)[0].id.slice(1)
                CommentIdSliced++
                posts[post]["comments"].push({id: "c"+CommentIdSliced, text})
                } else {
                    let commentIdNewPost = posts.slice(-2)[0].comments.slice(-1)[0].id.slice(1)
                    commentIdNewPost++
                    posts[post]["comments"].push({id: "c"+commentIdNewPost, text})
                }
                
            }
        }
    }

    const getPosts = function(){
        return posts
    }

    const removePost = function (postId) {
        for (let post in posts){
        if (posts[post].id == postId){
            posts.splice(post, 1)
            return posts[post]
        }
    }
}

    const removeComment = function(postId, commentId){
        for (let post in posts){
            if (posts[post].id === postId){
                for(comment in posts[post].comments){
                        if(posts[post].comments[comment].id === commentId){
                            posts[post].comments.splice([comment], 1)
                            
                    }
                }
            }
        }
    }

    return {
        // postIdCounter,
        // commentIdCounter,
        getPosts,
        addPosts,
        removePost,
        addComment,
        removeComment,
    }
}

const tweeter = Tweeter();
// tweeter.addPosts("Hurray")
// tweeter.addPosts("It's a holiday")
// tweeter.removePost("p3")
// tweeter.addComment("p2", "hey you")
// tweeter.addComment("p1", "goodness")
// tweeter.addComment("p4", "please let it work")
// tweeter.removeComment("p1", "c2")
// console.log(tweeter.getPosts())