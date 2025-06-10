let posts;
const postsContainer = document.getElementById("postsContainer")

axios({
    method: "get",
    url: "/posts"
}).then( value => {
    console.log("%c++","background:green", value);
    posts = value.data.data;

    posts.forEach( (post) => {
        const postcard = document.createElement("div");
        postcard.classList.add("post");
        postcard.innerHTML = `
            <div class="innerContainer">
                <div class="postTop">
                    <img src=${post.thumbnail} class="postImg"/>
                    <div style="overflow: hidden">
                            <span class="postTitle">Title: ${post.title}</span>
                        
                            <span class="postTitle">Date: ${post.publishedAt}</span>
                    </div>
                </div>
                <div>
                    <span>${post.content}</span>
                </div>
            </div>`

        postsContainer.append(postcard)
    })
})
