import ACTIONS from "./action";

interface DefaultState {
    day: string,
    trainData: any,
    trainName: string
}

const defaultState: DefaultState = {
    day: "",
    trainData: {},
    trainName: ""
};
const Reducer = (state = defaultState, action: any) => {
    switch (action.type) {
        case ACTIONS.Types.CHANGE_NAME: {
            return {
                ...state,
                trainName : action.trainName

            }
        }
        default:
            return state;
    }
};

export default Reducer;