import ACTIONS from "./action";
import store from './store';


const mapStateToProps = (state: any) => ({
    item: state.item
});

const mapDispatchToProps = (dispatch: any) => ({
    changeStartStation: (startStation: string) => dispatch(ACTIONS.changeStartStation(startStation)),
    changeDestinationStation: (destinationStation: string) => dispatch(ACTIONS.changeDestinationStation(destinationStation)),
    changeTrainData: (data: string) =>dispatch(ACTIONS.changeTrainData(data))
});

export {
    mapStateToProps,
    mapDispatchToProps,
}
export default store