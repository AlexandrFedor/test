import MusicFunction from "./MusicFunction";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const MusicCard2 = ({item, remove}) => {

    if (!item.length) {
        return <h1>Посты не найдены</h1>;
      }

    return(
        <TransitionGroup className="container-music">
        {item.map(Val => 
        <CSSTransition key={Val.id} timeout={500} classNames="post">
            
           
                <MusicFunction post={Val} remove={remove} />
    
            
        </CSSTransition>
    )}
        </TransitionGroup>
    )
}

export default MusicCard2