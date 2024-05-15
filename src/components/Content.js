import './Content.css'
// import dish1 from './plateOfFood.png'
import flowersRight from './flowersOnTheRight.png';
import flowersLeft from './FlowersOnTheLeft.png';
import staffPhoto from './staffPhoto.jpg';
import cafePhoto from './cafePhoto.png';
// import pin from './marker-pin-01.png'
// import phone from './phone.png'
import Hours from './Hours.js';
// import topFood from './topFoodPic.jpeg'

function Content(){
    return (
        <div className = "pt-[82px] pb-3 font-Brygada bg-white w-screen">
            <div className = "h-371 w-screen bg-[url('/public/pictures/topFoodPic.jpeg')] bg-center bg-cover border-b-[6px] border-burgundy">
            </div>
            <div className = "w-full absolute translate-y-[-49px] translate-x-1/8 flex flex-row justify-center">
                <p className = "text-[black] text-center flex items-center justify-center rounded-2xl text-[20px] bg-beige px-2 h-94 w-786 border-[6px] border-burgundy">
                    Located in South Seattle, Cafetal Quilombo Café 
                    is a unique restaurant offering authentic Mexican 
                    tacos in combination with Seattle’s iconic coffee.
                </p>
            </div>
            <div className = "bg-[white] py-16 flex flex-col justify-center items-center mx-auto w-screen">
                <h1 className = "text-[32px] font-bold pt-24 pb-3">Food</h1>
                <div className = "flex flex-row items-center gap-16 px-10 py-2.5">
                    <div className = "group w-80 h-64 bg-[url('/public/pictures/tamales.webp')] bg-center bg-cover hover:bg-opacity-60 rounded-3xl">
                        <div className =  "w-80 h-64 rounded-3xl bg-[black] bg-opacity-0 hover:bg-opacity-60 flex flex-row justify-center items-center duration-500">
                            <a className = 'invisible group-hover:visible text-[white] duration-100 text-3xl' href = 'blah'>Tamales</a>
                        </div>
                    </div>
                    <div className = "group w-80 h-64 bg-[url('/public/pictures/tacoPics.png')] bg-center bg-cover hover:bg-opacity-60 rounded-3xl">
                        <div className =  "w-80 h-64 rounded-3xl bg-[black] bg-opacity-0 hover:bg-opacity-60 flex flex-row justify-center items-center duration-500">
                            <a className = 'invisible group-hover:visible text-[white] duration-100 text-3xl' href = 'blah'>Tacos</a>
                        </div>
                    </div>
                    <div className = "group w-80 h-64 bg-[url('/public/pictures/enchi.webp')] bg-center bg-cover hover:bg-opacity-60 rounded-3xl">
                        <div className =  "w-80 h-64 rounded-3xl bg-[black] bg-opacity-0 hover:bg-opacity-60 flex flex-row justify-center items-center duration-500">
                            <a className = 'invisible group-hover:visible text-[white] duration-100 text-3xl' href = 'blah'>Enchilatas</a>
                        </div>
                    </div>
                    <div className = "text-[24px] group px-8 py-2.5"><a href = 'blah'>Menu&gt;</a></div>
                </div>
            </div>
            <div className = "flex mx-auto max-w-[1300px] justify-between px-8 pt-8 pb-24 bg-[white]">
                <img className = "h-147 w-562" src = {flowersLeft} alt = ""/>
                <img className = "h-147 w-562" src = {flowersRight} alt = ""/>
            </div>
            <div className = "bg-[white] mx-auto max-w-[1300px] flex items-center justify-center gap-16 pb-16">
                <Hours/>
                <div>
                    <img className = "h-430 w-366 object-cover rounded-2xl shadow-lg" src = {staffPhoto} alt = ""/>
                </div>
                <div>
                    <img className = "h-430 w-366 object-cover rounded-2xl shadow-lgg" src = {cafePhoto} alt = ""/>
                </div>
            </div>
        </div>
    );
}

export default Content; 