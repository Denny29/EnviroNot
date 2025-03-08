import { InfoCard } from "./Fracking";
import shirt1 from "../assets/coolShirt1.JPG"
import frame from "../assets/funnyFrame.JPG"
import battery from "../assets/carBattery.jpg"

const Merch = () => {
    return (
        <div style={{marginLeft:"1rem"}}>
            <h1 style={{marginTop:"3rem"}}>We got some merch for you all to support our cause!</h1>
            <marquee> <h3>All processions will go to buying straws to dump straight into the ocean.</h3>  </marquee>
            <div style={{display:"flex", justifyContent:"space-around", marginTop:"3rem"}}>
                <InfoCard
                    image={frame}
                    title="Cool Frame" 
                    content="It's sold out"
                />
                <InfoCard
                    image={shirt1}
                    title="Cool Shirt" 
                    content="It's also sold out"
                />
                <InfoCard
                    image={battery}
                    title="Car Battery" 
                    content="Free, feed the fishes."
                />
            </div>
            <br></br><br></br><br></br>
            <p>More coming soon!</p>
        </div>
    )
}

export default Merch;