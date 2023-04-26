import MusicFunction from "./MusicFunction";

const MusicCard2 = ({item}) => {

    return(
        <div className="container-music">
        {item?.map(Val => {
            return (
                <MusicFunction  key={Val.id} img={Val.img} release={Val.release} apple={Val.apple} musicants={Val.musicants}/>
            )
            
        })}
        </div>
    )
}

export default MusicCard2