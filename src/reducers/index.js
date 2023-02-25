import { ADD_EVENT, ALL_DELETE, DELETE_EVENT } from '../actions/index';
const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_EVENT:
            const event = { title: action.title, body: action.body, comment: action.comment };
            const id = state.length + 1;
            return [...state, { id, ...event }];

        case DELETE_EVENT:
            return state.filter((event) => event.id !== action.id);

        case ALL_DELETE:
            return [];

        default:
            return state;

    }
};
export default reducer;