import './Content.css'
import fb from './facebook.png'
import insta from './instagram.png'
import cr from './copyright.png'

function Footer(){
    return(
        <div className = "bg-red font-Brygada">
            <div className = "text-[white] font-serif flex justify-between items-center px-4">
                <p1 className = "text-2xl flex items-center px-8 p-4"><img className = "h-7 pr-1" src={cr}/> 2024 Cafetal Quilombo Cafe</p1>
                <div className = "px-8 py-4 flex flex-row">
                    <a className = "px-2 h-8" href="https://www.instagram.com/explore/locations/759562144/cafetal-quilombo-cafe-official/?hl=en" target="_blank"><img className = "h-12" src={insta}/></a>
                    <a href="https://www.facebook.com/cafetalquilombo/" target="_blank">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#fdfcfc"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );

}

export default Footer;