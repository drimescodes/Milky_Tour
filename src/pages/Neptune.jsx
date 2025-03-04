import { Planets } from "../components/planet";
import { Fact } from "../components/fact";
import { Link } from "react-router-dom";

const Neptune = () => {
    return(
        <Planets>
        <section>
            <p>We've now arrived at Neptune, the mystic ice giant at the edge of our solar system. Brace yourselves for the deep blue wonders of this distant beauty. </p>
            <div className="planet_profile">
                    <img src="./src/assets/Neptune/planet_neptune.png" alt="Neptune" />
                    <h1 className="">Neptune - The Mystic Ice Giant</h1>
            </div>
        
            <Fact image="./src/assets/Neptune/neptune_atmosphere.jpg" content = "Dive into Neptune's dynamic atmosphere, adorned with fast-moving storms and swirling clouds. It's like a celestial ballet of atmospheric dynamics. "/>
            <Fact image="./src/assets/Neptune/triton.jpg" content = "Say hello to Triton, Neptune's moon with a rebellious spirit - it orbits the planet backward. Now that's one moon with its own cosmic groove! "/>
            <Fact image="./src/assets/Neptune/dark_spot.jpg" content = "Observe the Great Dark Spot, a storm system akin to Jupiter's Great Red Spot. It's like Neptune's mysterious eye staring into the depths of space. "/>
            <p>We're catching Neptune's gravitational waves for another boost, propelling us toward the edge of our solar system - the dwarf planet Pluto!</p>
        </section>
     <Link to="/pluto"> <button className="bg-blue-900 text-white my-6"> Propel to Pluto</button></Link>   
    </Planets>
    )
}

export default Neptune;