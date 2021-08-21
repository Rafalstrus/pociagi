const Types = {
    CHANGE_NAME: "CHANGE_NAME"
};
// actions
const changeName = (trainName: string) => ({
    type: Types.CHANGE_NAME,
    trainName: trainName
})
  const exportedObject = {
    changeName,
    Types
}
export default exportedObject