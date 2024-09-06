import React from 'react';
import Bg from "../home/Component 1 (8).png";
import P1 from "../home/Group 71.png";
import P2 from "../home/Group 72.png";
import P3 from "../home/Group 73 (1).png";
import P4 from "../home/Group 75.png";
import Honiy from "../home/Group 65.png";
import Honiy2 from "../home/Group 66.png";
import Hon from "../home/miel_eucalyptus_forets_andalousie 1.png";
import Hon2 from "../home/basswood-honey-removebg 1.png";
import Honiyy from "../home/Group 58.png";
import Pr from"../home/Icon 4.png"
import Tw from"../home/Icon 2.png"
import Fe from"../home/Icon05.png"
import Gl from"../home/Icon 3.png"
import Play from"../home/Group 59.png"
import Nav from "../nav/nav";

function Home(props) {
    return (
        <div className="w-full h-auto">
            <div className="w-full  h-auto relative  ">           <Nav/>

                <img className={" mt-[-80px]  ml-[-32px]"} src={Bg} alt="" data-aos="fade-up"
                     data-aos-duration="3000"/>

                <div className={"w-[40%] mt-[-720px] ml-32 relative z-50"}>
                    <h2 className={"ml-32  text-[100px]  font-bold"}>Finger</h2>
                    <h2 className={"ml-56    text-[100px]  font-bold"}>Licking</h2>
                    <h2 className={"ml-96  text-[100px]   font-bold"}>Honiy!</h2>
                    <div>
                        <button
                            className={"w-[130px] border border-black rounded hover:text-white h-[50px] ml-[165px] bg-transparent hover:bg-black mt-14"}>Buy
                            Now
                        </button>
                        <button
                            className={"w-[130px] border border-black rounded hover:text-white h-[50px] ml-8 bg-transparent hover:bg-black mt-14"}>Learn
                            More
                        </button>
                    </div>

                </div>
                <h2 className={"mt-[280px] ml-[130px] text-[45px] font-bold"}>Our Trusted Shops</h2>
            </div>
            <div className={" w-full h-[40vh] mt-[-50px] items-center justify-center flex gap-32 ml-[-80px] "}>
                <br/>
                <br/>
                <br/>
                <img src={P1} alt="" data-aos="flip-down"  data-aos-duration="1300" />
                <img src={P2} alt="" data-aos="flip-down"  data-aos-duration="1300" />
                <img src={P3} alt="" data-aos="flip-down"  data-aos-duration="1300" />
                <img src={P4} alt="" data-aos="flip-down"  data-aos-duration="1300" />

            </div>
            <div className={"w-full h-screen flex mt-10"}>
                <div className={"w-[50%] h-screen"}>
                    <img src={Honiy} className={"ml-10"} alt=""  data-aos="fade-up-right" data-aos-duration="2000"/>
                </div>
                <div className={"w-[50%] h-screen mt-[150px]"}>
                    <h2 className={"text-[45px] ml-[100px] font-bold w-[70%]"}>Honey created in the laps of nature.</h2>
                    <p className={"text-[22px] ml-[100px] mt-4 w-[60%]"}>Honey is one of the prime ingredients in your
                        everyday food schedule. As a brand, you need a
                        marketing strategy that will help...</p>

                    <button
                        className={"w-[130px] text-black bg-transparent border border-[#E58311] rounded    h-[50px] ml-[100px]   hover:bg-[#E58211] hover:text-white  bg-[#E58311]  mt-7"}>Learn
                        More

                    </button>
                </div>
            </div>
            <div className={"w-full h-screen flex mt-10"}>

                <div className={"w-[50%] h-screen mt-[150px]"}>
                    <h2 className={"text-[45px] ml-[100px] font-bold w-[70%]"}>Does your honey taste bad? Try us!
                    </h2>
                    <p className={"text-[22px] ml-[100px] mt-4 w-[60%]"}>Honey is one of the prime ingredients in your
                        everyday food schedule. As a brand, you need a marketing strategy that will help...</p>

                    <button
                        className={"w-[130px] text-black bg-transparent border border-[#E58311] rounded    h-[50px] ml-[100px]   hover:bg-[#E58211] hover:text-white  bg-[#E58311]  mt-7"}>Learn
                        More

                    </button>
                </div>
                <div className={"w-[50%] h-screen"}>
                    <img src={Honiy2} className={"ml-[-80px]"} alt="" data-aos="fade-up-left" data-aos-duration="2000"/>
                </div>
            </div>
            <div className={"w-full h-[60vh] gap-8 flex items-center justify-center"} data-aos="flip-down"  data-aos-duration="1000" >
                <div className={"w-[560px] rounded h-[305px] bg-[#FDF6EE]"}>
                    <h2 className={"mt-[55px] ml-14 text-[28px] font-bold"}>Eucalyptus Honey </h2>
                    <p className={"w-[315px] mt-4 ml-14"}>It has the scent of lavender, medium sweetness
                        lavender scented, and has a medium amber color.</p>
                    <button
                        className={"w-[120px]  hover:bg-[#E58211] hover:text-white text-black    border border-[#E58311] rounded    h-[40px] ml-[55px] bg-transparent  bg-[#E58311]  mt-7"}>Learn
                        More

                    </button>
                    <img src={Hon} className={"ml-[300px] mt-[-210px]"} alt=""/>
                </div>
                <div  className={"w-[560px] rounded h-[305px] bg-[#FDF6EE]"}>
                    <h2 className={"mt-[55px] ml-14 text-[28px] font-bold"}>Eucalyptus Honey </h2>
                    <p className={"w-[315px] mt-4 ml-14"}>It has the scent of lavender, medium sweetness
                        lavender scented, and has a medium amber color.</p>
                    <button
                        className={"w-[120px]  hover:bg-[#E58211] hover:text-white text-black bg-transparent border border-[#E58311] rounded    h-[40px] ml-[55px]   hover:bg-transparent  bg-[#E58311]  mt-7"}>Learn
                        More

                    </button>
                    <img src={Hon2} className={"ml-[380px] mt-[-200px]"} alt=""/>
                </div >

            </div>
            <div className={"w-full h-[140px] bg-[#FFD26F] justify-center items-center"}  data-aos="fade-up"
                 data-aos-anchor-placement="bottom-bottom"
                 data-aos-duration="850">
                <img src={Honiyy} className={"w-[100px] ml-[150px] pt-[60px]"} alt=""/>
                <p className={"w-[290px] ml-[360px] mt-[-50px] text-[17px]"}>Honey is one of the prime ingredients in
                    your everyday food schedule. </p>
                <div className="flex gap-5  ml-[790px] mt-[-60px]   " >
                    <img src={Pr} alt="Facebook"/>
                    <img src={Tw} alt="Twitter"/>
                    <img src={Fe} alt="Face book"/>
                    <img src={Gl} alt="Instagram"/>


                </div>
                <img src={Play} className={"float-end mr-[150px] mt-[-30px]"} alt=""/>

            </div>
        </div>
    );
}

export default Home;
