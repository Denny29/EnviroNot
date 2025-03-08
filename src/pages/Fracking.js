import fracking_fire from "../assets/fracking-fire.jpeg";
import duck from "../assets/oil_duck_roblox.jpg";
import stocks from "../assets/stocks_roblox.jpg"

const Fracking = () => {
    return (
        <div style={{textAlign: "center", marginTop: "1rem"}}>
            <div className="header">
                <h1>We. Love. Fracking.</h1>
                <h2>And you should too.</h2>
            </div>
            <p className="lead">Here at EnviroNot fracking isnt just our job, it's a way of life.</p>
            <h5>Here's Why</h5>

            <div style={{display:"flex", justifyContent:"space-around", marginTop:"1rem"}}>
                <InfoCard
                image={fracking_fire}
                title="Fracking Hell" 
                content="I stole the title from this link but you guys don't need to know that. Anyways fracking makes your water flammable and gives you nosebleeds. Honestly that's pretty cool I'd love to see that in person."
                link="https://www.theguardian.com/environment/2013/dec/14/fracking-hell-live-next-shale-gas-well-texas-us?utm_source=chatgpt.com"
                />
                <InfoCard
                image={stocks} 
                title="It's Fracking Amazing" 
                content="Fracking has supercharged the U.S. economy—slashing energy costs, creating jobs, and making the country more energy independent. Sure there's the occasional bit of drinking water contamination, but who doesn’t love affordable gas and booming industry?"
                link="https://www.brookings.edu/articles/the-economic-benefits-of-fracking/"
                />
                <InfoCard
                image={duck} 
                title="We Fracking love this pun" 
                content="It's already the third card you guys get the point, so we'll use this opportunity to thank our sponsor, Dawn Dish Soap. Something about oil spills."
                link="https://dawn-dish.com/en-us/dawn-saves-wildlife/"
                />
            </div>
            
        </div>
    )
}

const InfoCard = (props) => {
    return (
        <div className="card" style={{width: "18rem"}}>
        <img src={props.image} className="card-img-top" alt={props.imageName}></img>
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.content}</p>
          {props.link && <a target="_blank" href={props.link} class="btn btn-primary">Click here to learn more</a>}
        </div>
      </div>
    )
}

export {Fracking, InfoCard};