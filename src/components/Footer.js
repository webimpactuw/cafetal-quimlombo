import './Content.css'
import pin from './marker-pin-01.png'
import phone from './phone.png'

function Footer(){
    return(
        <div className = "bg-red">
            <div className = "text-[white] font-serif flex justify-between items-center px-4">
                <p1 className = "text-2xl flex justify-center px-8 p-4"> <i class="bi bi-c-circle pr-2"></i>2024 Cafetal Quilombo Cafe</p1>
                <div className = "px-8 pb-4">
                    <a className = "px-4" href="https://www.instagram.com/"><i className="bi bi-instagram fa-2x"></i></a>
                    <a href=""><i className ="bi bi-facebook fa-2x"></i></a>
                </div>
            </div>
        </div>
    );

}

export default Footer;