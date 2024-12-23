import HomepageList from "./HomepageList";


function Homepage(){

    //fetch stuff from local storage here
    
    return(
        <div>
           
            <img id="homePic" src="/src/assets/hom55.webp"></img>
            <div id="bestSellingSection">
                <h3  className="bestSelling">
                    Best Selling necklaces
                </h3> 
                    <HomepageList key={'necklace'}/>
                <h3  className="bestSelling">
                    Best Selling Earrings
                </h3>
                    <HomepageList key={'earring'}/>
            </div>

        </div>
    )
}

export default Homepage

