import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      console.log(response);
      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (beers === null) {
    return <h3>Cargando...</h3>;
  }

  return (
    <div>
      {beers.map((eachBeer) => {
        return (
          <div
            key={eachBeer._id}
            style={{ display: "flex", marginTop: "5em", marginLeft: "10em" }}
          >
            <Link to={`/beers/${eachBeer._id}`} className="lista-cerves">
              <div>
                <img src={eachBeer.image_url} alt="imagen-cerve" width={180} />
              </div>

              <div>
                <h1 style={{ fontSize: "5em", color: "black" }}>
                  {eachBeer.name}
                </h1>
                <h2 style={{ fontSize: "2,5em", color: "grey" }}>
                  {eachBeer.tagline}
                </h2>
                <p>Created by: {eachBeer.contributed_by}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default AllBeersPage;
