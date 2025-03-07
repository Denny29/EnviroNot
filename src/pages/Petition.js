const Petition = () => {
    return (
        <div style={{marginTop: "50px", marginLeft:"10px"}}>
            <h1 style={{textAlign: "center"}}>Do YOU agree with our mission?</h1>
            <p>Then show solidarity to our cause by signing this petition!</p>

            <form>
                <label>Name </label> <br></br>
                <input type="text" htmlFor="name"></input> <br></br>
                <br></br>
                <label>Message </label> <br></br>
                <textarea htmlFor="message"></textarea> <br></br>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default Petition;