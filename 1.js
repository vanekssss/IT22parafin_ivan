function fetchWithTimeout(url, timeout) {
    return Promise.race([
        fetch(url),
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Request timeout")), timeout)
        )
    ]);
}

async function fetchData() {
    const urls = [
        "https://jsonplaceholder.typicode.com/posts/1",
        "https://jsonplaceholder.typicode.com/users/1"
    ];

    const requests = urls.map(url => fetchWithTimeout(url, 3000));
    const results = await Promise.allSettled(requests);

    const hasTimeout = results.some(
        result =>
            result.status === "rejected" &&
            result.reason.message === "Request timeout"
    );

    if (hasTimeout) {
        return "Request timeout";
    }

    const data = await Promise.all(
        results.map(res => res.value.json())
    );

    return data;
}

fetchData()
    .then(data => console.log(data))
    .catch(err => console.error(err));