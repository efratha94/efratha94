const Tweeter = function() {
    const posts = [
        {
            text: "First post",
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
                { id: "c4", text: "Don't worry second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ];
    
    let postIdCounter = posts.length;
       
    const addPosts = function(){
      postIdCounter += 1
      posts.push({text: $("#input").val(), id:"p"+postIdCounter, comments: []})
    }

    const addComment = function (postId, text){
        for(let post in posts){
            if (posts[post].id == postId){
                if (posts[post].comments.length > 0){
                let commentSliced = posts[post].comments.slice(-1)[0] 
                let commentIdSliced = commentSliced.id.slice(1)
                commentIdSliced++
                posts[post]["comments"].push({id: "c"+commentIdSliced, text})
                } else {
                    let previousPost = posts.slice(-2)[0]
                    let lastCommentinPreviosPost = previousPost.comments.slice(-1)[0]
                    let lastCommentinPreviosPostId = lastCommentinPreviosPost.id.slice(1)
                    lastCommentinPreviosPostId++
                    posts[post]["comments"].push({id: "c"+lastCommentinPreviosPostId, text})
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
        getPosts,
        addPosts,
        removePost,
        addComment,
        removeComment,
    }
}

const tweeter = Tweeter();
