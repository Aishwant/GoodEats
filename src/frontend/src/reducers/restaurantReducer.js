import produce from "immer"
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
    ADD_ITEM,
    DELETE_ITEM,
    EDIT_ITEM,
    SET_CATEGORIES
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
            return{
                ...state,
                restaurants: action.payload
            };
        case GET_RESTAURANTS_BY_ID:
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
            return Object.assign({}, state, {
                restaurants: Object.keys(state.restaurants).reduce((result, key) => {
                    if (key !== action.payload) {
                        result[key] = state.restaurants[key];
                    }
                    return result;
                }, {})
            });
        case EDIT_RESTAURANT:
            return produce(state, draft => {
                draft['restaurants'][action.resID] = action.restaurantData
            })
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
            return Object.assign({}, state, {
                categories: Object.keys(state.categories).reduce((result, key) => {
                    if (key !== action.payload) {
                        result[key] = state.categories[key];
                    }
                    return result;
                }, {})
            });
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
        case DELETE_ITEM:
            return produce( state, draft => {
                delete draft["categories"][action.categoryName][action.itemID]
            })
        case EDIT_ITEM:
            return produce(state, draft => {
                draft['categories'][action.categ][action.item] = action.data
            })
        case SET_CATEGORIES:
            return produce(state, draft => {
                draft['categories'] = action.payload;
            }) 
        default:
            return state;
    }

}