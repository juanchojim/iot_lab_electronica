async function get(url) {
    const pre = await fetch(url);
    const json = await pre.json();
    return json;
}

get('http://localhost:3000/api/placas')
    .then(res => console.log(res))
    .catch(err => console.log(err));


