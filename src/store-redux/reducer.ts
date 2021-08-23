import ACTIONS from "./action";

interface DefaultState {
    day: string,
    trainData: any,
    departureTime: any,
    startStation: string,
    destinationStation: string
}

const defaultState: DefaultState = {
    day: "12/08/2021",
    trainData: {},
    departureTime: "",
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
        default:
            return state;
    }
};

export default Reducer;