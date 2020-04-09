import renderEntireTree from "../render";

let state = {
    profilePage: {
                posts: [
                    {id: 1, message: 'Hi, its my first post', likesCount: 2}, 
                    {id: 2, message: 'Have a nice day', likesCount: 3}, 
                    {id:3, message: 'Good morning', likesCount: 5} 
                    ],
                newPostText: 'PUTIN HUILO',
                },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'}, 
            {id: 2, message: 'Pruvet'}, 
            {id:3, message: 'Yooo'} 
        ],
        dialogs: [
            {id: 1, name: 'Oleshych'}, 
            {id: 2, name: 'Alex'}, 
            {id:3, name: 'Helga'}, 
            {id:4, name: 'Perdak'},
            {id:5, name: 'Cherdak'}
        ],
    }       
};

export let addPost = () => {
    let newPost = {
        id: 4,
        message: state.profilePage.newPostText,
        likesCount: 5
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ""; // пустое поле после поста
    renderEntireTree(state);
}

export let updateNewPostText = newText => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export default state;