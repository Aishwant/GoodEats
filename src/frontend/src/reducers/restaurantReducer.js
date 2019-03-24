import { 
    GET_RESTAURANTS,
    GET_RESTAURANTS_BY_ZIP,
    GET_RESTAURANTS_BY_ID,
    ADD_RESTAURANT,
    DELETE_RESTAURANT,
    GET_MENU,
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
    resName:"",
    menu:{},
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
            return{
                ...state,
                restaurants: [...state.restaurants, action.payload]
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
        case GET_MENU:
            return{
                ...state,
                menu: action.payload
                
            }
        case ADD_CATEGORY:
            return{
                ...state,
                categories: [...state.categories, action.payload]
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
        default:
            return state;
    }

}