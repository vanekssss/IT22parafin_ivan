function fetchData(id) {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 2000) + 1000;
        setTimeout(() => {
            resolve(`Data for ID: ${id} (delay: ${delay}ms)`);
        }, delay);
    });
}

async function processData() {
    const parallelIds = [1, 2, 3];
    const parallelResults = await Promise.all(
        parallelIds.map(id => fetchData(id))
    );

    console.log("Parallel results:");
    parallelResults.forEach(res => console.log(res));

    const sequentialIds = [4, 5, 6];

    console.log("Sequential results:");
    for (const id of sequentialIds) {
        const result = await fetchData(id);
        console.log(result);
    }
}

processData().catch(console.error);
