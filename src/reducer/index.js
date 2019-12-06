const getResource = async(url) =>{
    const res = await fetch(url);
    if (!res.ok){
        throw new Error(`Could not fetch ${url}, received ${res.status}`) 
    }
    const body = await res.json();
    return body;
};

export const reducer = (state={posts:[{id:0,title:'dfd'},{id:2}]}, action) => {
    switch (action.type){
        case 'load':
            let bodyOfRequest=[];
            getResource('https://jsonplaceholder.typicode.com/posts').then((body) => {
                bodyOfRequest.push(...body);
            }).catch((err)=>{
                console.error('Could not fetch', err);
            });
            console.log(bodyOfRequest)
            console.log(state);   
             state = {...state,posts:[...bodyOfRequest]};
             console.log(state);
             return state
        default: 
            return state;
            
    }
}