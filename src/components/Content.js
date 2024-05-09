import './index.css';
// import dish1 from './plateOfFood.png'
import flowersRight from './flowersOnTheRight.png';
import flowersLeft from './FlowersOnTheLeft.png';
import staffPhoto from './staffPhoto.jpg';
import cafePhoto from './cafePhoto.png';
import tamales from './tacoPics.png';
// import pin from './marker-pin-01.png'
// import phone from './phone.png'
import Hours from './Hours.js';
// import topFood from './topFoodPic.jpeg'

function Content(){
    return (
        <div className = "pb-3 font-serif bg-white w-screen">
            <div className = "h-371 w-screen bg-topFood bg-center bg-cover border-b-8 border-burgundy">
            </div>
            <div className = "w-screen absolute translate-y-negH translate-x-1/8 flex flex-row justify-center">
                <p className = "text-[black] text-center flex items-center justify-center rounded-2xl text-xl bg-beige px-2 h-94 w-786 border-8 border-burgundy">
                    Located in South Seattle, Cafetal Quilombo Café 
                    is a unique restaurant offering authentic Mexican 
                    tacos in combination with Seattle’s iconic coffee.
                </p>
            </div>
            <div className = "bg-[white] flex flex-col justify-center items-center">
                <h1 className = "text-[32px] font-bold pt-24 pb-3">Food</h1>
                <div className = "flex flex-row items-center gap-16 px-10 py-2.5">
                    <div className = "group w-80 h-64 bg-[url('tacoPics.png')] bg-center bg-cover hover:bg-opacity-60 rounded-3xl">
                        <div className =  "w-80 h-64 rounded-3xl bg-[black] bg-opacity-0 hover:bg-opacity-60 flex flex-row justify-center items-center duration-500">
                            <a className = 'invisible group-hover:visible text-[white] duration-100 text-3xl' href = 'blah'>Tamales</a>
                        </div>
                    </div>
                    <div className = "group w-80 h-64 bg-center bg-cover hover:bg-opacity-60 rounded-3xl">
                        <div className =  "w-80 h-64 rounded-3xl bg-[black] bg-opacity-0 hover:bg-opacity-60 flex flex-row justify-center items-center duration-500">
                            <a className = 'invisible group-hover:visible text-[white] duration-100 text-3xl' href = 'blah'>Tacos</a>
                        </div>
                    </div>
                    <div className = "group w-80 h-64 bg-center bg-cover hover:bg-opacity-60 rounded-3xl">
                        <div className =  "w-80 h-64 rounded-3xl bg-[black] bg-opacity-0 hover:bg-opacity-60 flex flex-row justify-center items-center duration-500">
                            <a className = 'invisible group-hover:visible text-[white] duration-100 text-3xl' href = 'blah'>Enchilatas</a>
                        </div>
                    </div>
                    <div className = " group px-8 py-2.5"><a href = 'blah'>menu &gt;</a></div>
                </div>
            </div>
            <div className = "flex justify-between px-8 py-8 bg-[white]">
                <img className = "h-147 w-562" src = {flowersLeft} alt = ""/>
                <img className = "h-147 w-562" src = {flowersRight} alt = ""/>
            </div>
            <div className = "bg-[white] flex items-center justify-center gap-16 px-16 pb-16">
                <Hours/>
                <div>
                    <img className = "h-430 w-366 object-cover rounded-2xl shadow-lg" src = {staffPhoto} alt = ""/>
                </div>
                <div>
                    <img className = "h-430 w-366 object-cover rounded-2xl shadow-lgg" src = {cafePhoto} alt = ""/>
                </div>
            </div>
            <img src={tamales}/>
        </div>
    );
}

export default Content; 