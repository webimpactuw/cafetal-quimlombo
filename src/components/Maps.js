import './Content.css'
import pin from './marker-pin-01.png'
import phone from './phone.png'

function Maps (){
    return(
        <div className = "bg-red">
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            </head>
            <div className = "flex justify-around px-6 items-start text-[white] font-serif">
                <div className = "py-8">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.1899359857666!2d-122.3162692239638!3d47.56409279091236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549041d9e9ab7363%3A0x4042c931a153902b!2sCafetal%20Quilombo%20Cafe!5e0!3m2!1sen!2sus!4v1713808450590!5m2!1sen!2sus" className = "flex justify-center items-center h-308 w-553 border-4 rounded-2xl"></iframe>
                </div>
                <div className = "flex items-center justify-center py-8 px-16">
                    <div className = "h-auto w-366  flex flex-col justify-center">
                        <p1 className = "px-6 text-2xl flex justify-center font-bold">Hours</p1>
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
                    </div>
                </div>
                <div className = "py-8">
                    <p1 className = "text-2xl flex justify-center font-bold">Contacts</p1>
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
            </div>
        </div>
    )
}

export default Maps;