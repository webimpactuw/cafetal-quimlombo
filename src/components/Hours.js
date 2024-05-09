import './Content.css'
import pin from './marker-pin-01.png'
import phone from './phone.png'

function Hours(){
    return(
        <div className = "h-430 w-366  flex flex-col justify-center rounded-2xl shadow-lg">
            <p1 className = "px-6 text-2xl">Open Until: 7:00pm</p1>
                <div className = "flex justify-between items-center px-6 py-1.5 text-base">
                    <p1>Sunday</p1>
                    <p1>Closed</p1>
                </div>
                <div className = "flex justify-between items-center px-6 py-1.5 text-base">
                    <p1>Monday</p1>
                    <p1>10:00am - 7:00pm</p1>
                </div>
                <div className = "flex justify-between items-center px-6 py-1.5 text-base">
                    <p1>Tuesday</p1>
                    <p1>10:00am - 7:00pm</p1>
                </div>
                <div className = "flex justify-between items-cente px-6 py-1.5 text-base">
                    <p1>Wednesday</p1>
                    <p1>10:00am - 7:00pm</p1>
                </div>
                <div className = "flex justify-between items-center px-6 py-1.5 text-base">
                    <p1>Thursday</p1>
                    <p1>10:00am - 7:00pm</p1>
                </div>
                <div className = "flex justify-between items-center px-6 py-1.5 text-base">
                    <p1>Friday</p1>
                    <p1>10:00am - 7:00pm</p1>
                </div>
                <div className = "flex justify-between items-center px-6 py-1.5 text-base">
                    <p1>Saturday</p1>
                    <p1>10:00am - 3:00pm</p1>
                </div>
                <div className = "flex justify-center py-2">
                    <div className = "flex justify-center w-[80%] border-[1px] border-[grey]"></div>
                </div>
                <div className = "flex justify-start items-center px-6 py-1.5 text-base">
                    <img src = {phone} alt = ""/>
                    <p1 className = "px-3">(206) 603-6412</p1>
                </div>
                    <div className = "flex justify-start items-center px-6 py-1.5 text-base">
                    <img src = {pin} alt = ""/>
                    <div className = "flex flex-col">
                        <p1 className = "px-3">4343 15th Ave S</p1>
                        <p1 className = "px-3">Seattle, WA 98108</p1>
                    </div>
                </div>
        </div>  
    )
}

export default Hours;