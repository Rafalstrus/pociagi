const Types = {
    CHANGE_START_STATION: "CHANGE_START_STATION",
    CHANGE_DESTINATION_STATION: "CHANGE_DESTINATION_STATION",
    CHANGE_TRAIN_DATA: "CHANGE_TRAIN_DATA"
};
// actions
const changeStartStation = (startStation: string) => ({
    type: Types.CHANGE_START_STATION,
    startStation: startStation
})
const changeDestinationStation = (destinationStation: string) => ({
    type: Types.CHANGE_DESTINATION_STATION,
    destinationStation: destinationStation
})
const changeTrainData = (data: string) => ({
    type: Types.CHANGE_TRAIN_DATA,
    data: data
})
const exportedObject = {
    changeStartStation,
    changeDestinationStation,
    changeTrainData,
    Types
}
export default exportedObject