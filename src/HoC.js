
const HoC = (WrappedComponent) => {
    return (props) => {
        console.log("HOC")
        return(<WrappedComponent {...props} />)
    }
}
export default HoC