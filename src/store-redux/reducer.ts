import ACTIONS from "./action";

interface DefaultState {
    day: string,
    trainData: any,
    departureTime: string,
    startStation: string,
    destinationStation: string
}

const defaultState: DefaultState = {
    day: "",
    trainData: {},
    departureTime: "07:30",
    startStation: "",
    destinationStation:""
};
const Reducer = (state = defaultState, action: any) => {
    switch (action.type) {
        case ACTIONS.Types.CHANGE_START_STATION: {
            return {
                ...state,
                startStation : action.startStation
            }
        }
        case ACTIONS.Types.CHANGE_DESTINATION_STATION: {
            return {
                ...state,
                destinationStation : action.destinationStation
            }
        }
        case ACTIONS.Types.CHANGE_TRAIN_DATA: {
            return {
                ...state,
                trainData : action.data
            }
        }
        case ACTIONS.Types.CHANGE_DEPARTURE_TIME: {
            return {
                ...state,
                departureTime : action.time
            }
        }
        case ACTIONS.Types.CHANGE_DAY: {
            return {
                ...state,
                day : action.day
            }
        }
        default:
            return state;
    }
};

export default Reducer;