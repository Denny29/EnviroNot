const Fracking = () => {
    return (
        <div style={{textAlign: "center", marginTop: "1rem"}}>
            <div className="header">
                <h1>We love fracking</h1>
                <h2>And you should too.</h2>
            </div>
            <p className="lead">Here at EnviroNot fracking isnt just our job, it's a way of life.</p>
            <h5>Here's Why</h5>

            <div style={{display:"flex", justifyContent:"space-around", marginTop:"1rem"}}>
                <InfoCard
                image="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/8/18/1439909868320/59350a46-a366-40bc-8be8-c6e46311abc1-2060x1236.jpeg?width=465&dpr=1&s=none&crop=none" 
                title="It's Fracking Amazing" 
                content="Fracking has supercharged the U.S. economy—slashing energy costs, creating jobs, and making the country more energy independent. Sure there's the occasional bit of drinking water contamination, but who doesn’t love affordable gas and booming industry?"
                link="https://www.brookings.edu/articles/the-economic-benefits-of-fracking/"
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
          <a href={props.link} class="btn btn-primary">Click here to learn more</a>
        </div>
      </div>
    )
}

export default Fracking;