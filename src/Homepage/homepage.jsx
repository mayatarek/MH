import HomepageList from "./HomepageList";


function Homepage(){

    //fetch stuff from local storage here
    return(
        <div>
            <img id="homePic" src="/src/assets/home3.webp"></img>
            <h3>
                Best Selling necklaces
            </h3>
            
            <HomepageList key={'necklace'}/>
            <h3>
                Best Selling Earrings
            </h3>
            <HomepageList key={'earring'}/>
        </div>
    )
}

export default Homepage