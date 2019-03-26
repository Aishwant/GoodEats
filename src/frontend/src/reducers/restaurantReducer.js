import { 
    GET_RESTAURANTS,
    GET_RESTAURANTS_BY_ZIP,
    GET_RESTAURANTS_BY_ID,
    ADD_RESTAURANT,
    DELETE_RESTAURANT,
    EDIT_RESTAURANT,
    ADD_CATEGORY,
    EDIT_CATEGORY,
    DELETE_CATEGORY,
    GET_CATEGORIES,
    GET_ITEMS,
    ADD_ITEM
} from "../actions/types";

const initialState = {
    restaurants:{},
    categories: {},
    items: {}
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_RESTAURANTS:
            return{
                ...state,
                restaurants: action.payload
            };
        case GET_RESTAURANTS_BY_ZIP:
        console.log([action.payload])
            return{
                ...state,
                restaurants: action.payload
            };
        case GET_RESTAURANTS_BY_ID:
        console.log([action.payload])
            return{
                ...state,
                restaurants: action.payload
            };
        case ADD_RESTAURANT:
            return {
                ...state,
                restaurants: {
                    ...state.restaurants,
                    [action.key]: action.value
                }
            }
        case DELETE_RESTAURANT:
            return{
                ...state,
                restaurants: [...state.restaurants.splice(0, action.payload),
                              ...state.restaurants.splice(action.payload + 1)
                ]
            }
        case EDIT_RESTAURANT:
            return{
                ...state,
                
            }
        case ADD_CATEGORY:
            return {
                ...state,
                categories: {
                    ...state.categories,
                    [action.categoryName]: {
                        [action.iID] : action.item
                    }
                }
            }
        case GET_CATEGORIES:
            return{
                ...state,
                categories: action.payload
            }
        case DELETE_CATEGORY:
            return{
                ...state,
                categories: [...state.categories.splice(0, action.payload),
                              ...state.categories.splice(action.payload + 1)]
            }
        case ADD_ITEM:
            return {
                ...state,
                categories: {
                    ...state.categories,
                    [action.categoryName]: {
                        ...state.categories[action.categoryName],
                        [action.iID] : action.item
                    }
                }
            }
        default:
            return state;
    }

}