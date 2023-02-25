import { ADD_EVENT, ALL_DELETE, DELETE_EVENT, INCREMENT, DECREMENT, RESET } from '../actions/index';
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

        case INCREMENT:
            return { ...state, count: state.count + 1 };

        case DECREMENT:
            return { ...state, count: state.count - 1 };

        case RESET:
            return { ...state, count: 0 };

        default:
            return state;

    }
};
export default reducer;