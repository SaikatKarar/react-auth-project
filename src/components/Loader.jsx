import { ScaleLoader } from "react-spinners"

function Loader() {
    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-116px)]">
            <ScaleLoader size={100} color={'#f92fd3'} />
        </div>
    )
}

export default Loader