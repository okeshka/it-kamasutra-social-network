import profileReducer, { addPost, deletePost } from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, its my first post', likesCount: 2}, 
        {id: 2, message: 'Have a nice day', likesCount: 3}, 
        {id:3, message: 'Good morning', likesCount: 5} 
        ],
};

it ('add new Post length', () => {
    //1. startData
    let action = addPost('Hellow girls');

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(4);
});

it ('add new message', () => {
    //1. startData
    let action = addPost('Hellow girls');

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts[3].message).toBe('Hellow girls');
});

it ('delete Post ', () => {
    //1. startData
    let action = deletePost(3);

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(2);
});

it ('Post if unknown id should not be delete ', () => {
    //1. startData
    let action = deletePost(10);

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(3);
});