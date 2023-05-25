// fetch("https://jsonplaceholder.typicode.com/posts?userId=:id")
const postListEl = document.querySelector('.post-list')

async function main() {
    const id = localStorage.getItem("id")
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const postsData = await posts.json();
    postListEl.innerHTML = postsData.map((post) => postHTML(post)).join("")
}

main()

function postHTML(post) {
    return `<div class="post">
    <div class="post__title">
    ${post.title}
    </div>
    <p class="post__body">
    ${post.body}
    </p>
</div>`
}