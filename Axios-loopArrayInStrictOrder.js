///////////////////////////////////////////

export function loopArrayInStrictOrder() {

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    let promise = Promise.resolve();

    let funcs = [];

    Object.keys(arr).forEach(
        (index) => {
            let i = parseInt(index, 10);
            //console.log(index);

            promise = promise.then(
                () => {
                    return getTitle(i + 1);
                });
        });

    // Promise.all([p1, p2, p3]).then(values => { 
    //     console.log(values); 
    //   });

    Promise.all([promise]).then(values => {
        console.log("The job is done!");
    });
}

export function getTitle(id) {
    const request = axios.get("https://jsonplaceholder.typicode.com/posts/" + id)

    return request
        .then(result => {
            console.log("Got axois: " + result.data.id);
            console.log("Got title: " + result.data.title)
            return result;
        })
        .catch(error => {
            console.error('Error ' + error); return Promise.reject(error);
        });
}

/////////////////////
