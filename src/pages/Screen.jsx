
export default function Screen( {screen: CurrentScreen}){
    return (
        <>
            <div className="screen">
                <CurrentScreen />
            </div>
        </>
    )
}