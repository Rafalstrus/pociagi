import ACTIONS from "./action";
import store from './store';



const mapStateToProps = (state :any) => ({
    item: state.item
});

const mapDispatchToProps = (dispatch :any) => ({
    changeName: (trainName :string)=> dispatch(ACTIONS.changeName(trainName))
});

export {
    mapStateToProps,
    mapDispatchToProps,
}
export default store