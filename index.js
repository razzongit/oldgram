const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const sectionEl = document.getElementById("section-el")

function renderPosts() {
    sectionEl.innerHTML = ''
    for (let i = 0; i < posts.length; i++) {
        sectionEl.innerHTML += `
        <div class="post-container">
                    <div class="profile-detail padding">
                        <img class="profile-pic" src="${posts[i].avatar}" alt="van gogh profile pic">
                        <div class="profile-name-loc padding">
                            <h2>${posts[i].name}</h2>
                            <p>${posts[i].location}</p>
                        </div>
                    </div>
                    <img class="post-img" id="post-click-${i}" src="${posts[i].post}">
                    <div class="icon-container padding">
                        <img class="hover" id="click-like-${i}" src="images/icon-heart.png" alt="Like Icon">
                        <img class="hover" src="images/icon-comment.png" alt="Comment Icon">
                        <img class="hover" src="images/icon-dm.png" alt="Share Icon">
                    </div>
                    <h3 id="likes-count-${i}">${posts[i].likes} Likes</h3>
                    <div class="caption-container padding">
                        <p> <span>${posts[i].username}</span>${posts[i].comment}</p>
                    </div>
                </div>
    `
    }

    for (let i = 0; i < posts.length; i++) {
        document.getElementById(`click-like-${i}`).addEventListener("click", function() {
            posts[i].likes++
            document.getElementById(`likes-count-${i}`).textContent = `${posts[i].likes} Likes`
        })

        document.getElementById(`post-click-${i}`).addEventListener("dblclick", function () {
            posts[i].likes++
            document.getElementById(`likes-count-${i}`).textContent = `${posts[i].likes} Likes`
        })
    }
}

renderPosts()


