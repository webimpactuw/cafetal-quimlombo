import './Content.css'
import fb from './facebook.png'
import insta from './instagram.png'
import cr from './copyright.png'

function Footer(){
    return(
        <div className = "bg-red">
            <div className = "text-[white] font-serif flex justify-between items-center px-4">
                <p1 className = "text-2xl flex items-center px-8 p-4"><img className = "h-7 pr-1" src={cr}/> 2024 Cafetal Quilombo Cafe</p1>
                <div className = "px-8 py-4 flex flex-row">
                    <a className = "px-2 h-8" href="https://www.instagram.com/explore/locations/759562144/cafetal-quilombo-cafe-official/?hl=en" target="_blank"><img className = "h-12" src={insta}/></a>
                    <a href="https://www.facebook.com/cafetalquilombo/" target="_blank"><img className = "h-12" src={fb}/></a>
                </div>
            </div>
        </div>
    );

}

export default Footer;