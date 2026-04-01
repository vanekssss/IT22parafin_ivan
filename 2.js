let formEl = document.getElementById("postFormSimple");
let titleEl = document.getElementById("postTitleSimple");
let bodyEl = document.getElementById("postBodySimple");

formEl.addEventListener("submit", function (e) {
    e.preventDefault();

    let postData = {
        title: titleEl.value,
        body: bodyEl.value
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            formEl.reset();
        });
});