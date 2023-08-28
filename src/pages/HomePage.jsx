import { NavLink } from "react-router-dom";

function HomePage() {
  const checkActiveUrl = (info) => {
    if (info.isActive === true) {
      return "nav-active";
    } else {
      return "nav-inactive";
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "50px" }}>
      <img src="../src/assets/beers.png" alt="" />
      <NavLink
        className={checkActiveUrl}
        to="/beers"
        style={{ marginLeft: "10em", marginTop: "1em", fontSize: "5em", }}
      >
        Todas las cervezas
      </NavLink>
      <p style={{ fontSize: "2em", marginLeft: "28em" }}>
        Cervecitas ricas y frescas
      </p>

      <br></br>
      <img src="../src/assets/new-beer.png" alt="" />
      <NavLink
        className={checkActiveUrl}
        end={true}
        to="/random-beer"
        style={{ marginLeft: "10em", marginTop: "1em", fontSize: "5em" }}
      >
        Random Beer
      </NavLink>
      <p style={{ fontSize: "2em", marginLeft: "26em" }}>
        Bebete una cerveza al azar!!!!
        
      </p>

      <br></br>
      <img src="src/assets/random-beer.png" alt="" />
      <NavLink
        className={checkActiveUrl}
        end={true}
        to="/new-beer"
        style={{ marginLeft: "10em", marginTop: "1em", fontSize: "5em" }}
      >
        New Beer
      </NavLink>
      <p style={{ fontSize: "2em", marginLeft: "22em" }}>
        Sorprendenos añadiendo tu cerveza favorita!
      </p>
    </div>
  );
}

export default HomePage;
