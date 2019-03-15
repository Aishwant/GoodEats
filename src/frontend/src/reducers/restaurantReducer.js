import { 
    GET_RESTAURANTS,
    GET_RESTAURANTS_BY_ZIP,
    GET_RESTAURANTS_BY_ID,
    ADD_RESTAURANT,
    DELETE_RESTAURANT,
    GET_MENU,
} from "../actions/types";

const initialState = {
    restaurants:{},
    resName:"",
    menu:{},
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
        case GET_MENU:
            return{
                ...state,
                menu: action.payload
                
            }
        default:
            return state;
    }

}