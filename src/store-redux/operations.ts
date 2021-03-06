import ACTIONS from "./action";
import store from './store';


const mapStateToProps = (state: any) => ({
    item: state.item
});

const mapDispatchToProps = (dispatch: any) => ({
    setPublicKey: (publicKey : any) => dispatch(ACTIONS.setPublicKey(publicKey)),
    changeStartStation: (startStation: string) => dispatch(ACTIONS.changeStartStation(startStation)),
    changeDestinationStation: (destinationStation: string) => dispatch(ACTIONS.changeDestinationStation(destinationStation)),
    changeTrainData: (data: string) =>dispatch(ACTIONS.changeTrainData(data)),
    changeDepartureTime: (time :string) => dispatch(ACTIONS.changeDepartureTime(time)),
    changeDay: (day :string) => dispatch(ACTIONS.changeDay(day))
});

export {
    mapStateToProps,
    mapDispatchToProps,
}
export default store