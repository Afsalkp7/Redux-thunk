import { FETCH_POSTS,NEW_POST } from "./type";

export function fetchPost(){
    return function(dispatch){
        console.log("feching...");
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(Response => Response.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload : posts
        }))
    }
}