import NewsFunction from "./NewsFunction";

function NewsCard({item}) {

    return (
        <ul className="container-news">
            {item?.map(Val => {
                return(
                    <NewsFunction key={Val.id} img={Val.img} release={Val.release} date={Val.date} ></NewsFunction>
                )

            })}
        </ul>
    )

}

export default NewsCard