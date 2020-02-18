
const intialState = {
    projects: [
        { id: '1', title: 'This is test title', content: 'blah blah blah' },
        { id: '2', title: 'This is test title', content: 'blah blah blah' },
        { id: '3', title: 'This is test title', content: 'blah blah blah' },
        { id: '4', title: 'This is test title', content: 'blah blah blah' },
    ]


}

const projectReducer = (state = intialState, action) => {
    switch (action.type) {
        default:
            return state;
    }

}

export default projectReducer;