const Types = {
    SET_PUBLIC_KEY:"SET_PUBLIC_KEY",
    CHANGE_START_STATION: "CHANGE_START_STATION",
    CHANGE_DESTINATION_STATION: "CHANGE_DESTINATION_STATION",
    CHANGE_TRAIN_DATA: "CHANGE_TRAIN_DATA",
    CHANGE_DEPARTURE_TIME: "CHANGE_DEPARTURE_TIME",
    CHANGE_DAY: "CHANGE_DAY"
};
// actions
const setPublicKey = (publicKey : any) => ({
    type: Types.SET_PUBLIC_KEY,
    publicKey: publicKey
})
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
const changeDepartureTime = (time: string) => ({
    type: Types.CHANGE_DEPARTURE_TIME,
    time: time
})
const changeDay = (day: string) => ({
    type: Types.CHANGE_DAY,
    day: day
})
const exportedObject = {
    setPublicKey,
    changeStartStation,
    changeDestinationStation,
    changeTrainData,
    changeDepartureTime,
    changeDay,
    Types
}
export default exportedObject