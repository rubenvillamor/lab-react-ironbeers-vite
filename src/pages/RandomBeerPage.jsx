import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";



function RandomBeersPage() {
    const [randomBeer, setRandomBeer] = useState(null);
    const [ isFetching, setIsFetching] = useState(true)


  useEffect(() => {

getData()

  }, []);


const getData = async () => {

    try {
      
      const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
      console.log(response)
      setRandomBeer(response.data)
      setIsFetching(false)

    } catch (error) {
      console.log(error)
    }

  }

  const handleRefresh =() => {
    setIsFetching (true)
    getData()
  }

  if (randomBeer === null) {
    return <h3>...cargando
    </h3>;
  }

  return (
    <div>

        <div style={{display: "flex", justifyContent: "center", marginTop: "30px"}}>
            <Button variant="info" onClick={handleRefresh}>Otra random</Button>{' '}
        </div>
               
      {randomBeer && (
        <div key={randomBeer._id} style={{marginLeft: "30px", marginTop: "30px"}}>          
        <img src={randomBeer.image_url} style={{width: "100px"}}/>
          <h1>{randomBeer.name}</h1>
          <h2>{randomBeer.tagline}</h2>
          <p>{randomBeer.first_brewed}</p>
          <p>{randomBeer.attenuation_level}</p>
          <p>{randomBeer.description}</p>
          <p>{randomBeer.contributed_by}</p>
        </div>
      )}
    </div>
  );
}

export default RandomBeersPage;