import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";




function AddBeerPage() {
    // Use Navigate
  const navigate = useNavigate();

    // Estados
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attentuation, setAttentuation] = useState(0);
  const [contributed, setContributed] = useState("");


    // Handles y eventos
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handTaglineChange = (event) => {
    setTagline(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleFirstBrewedChange = (event) => {
    setFirstBrewed(event.target.value);
  };

  const handleBrewerTipsChange = (event) => {
    setBrewersTips(event.target.value);
  };

  const handleAttentuationChange = (event) => {
    setAttentuation(event.target.value);
  };

  const handleContributedChange = (event) => {
    setContributed(event.target.value);
  };

  const handleCreateBeer = async (event) => {
    event.preventDefault();

    try {
      await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name: name,
        tagline: tagline,
        description,
        firstBrewed,
        brewersTips,
        attentuation,
        contributed,
      });

      navigate("/beers");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Añade una cerveza nueva</h1>
      <form>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}

        />

        <br />

        <label>Tagline</label>
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={handTaglineChange}
        />

        <br />

        <label>Description</label>
        <textarea
          name="description"
          value={description}
          onChange={handleDescriptionChange}
        />

        <br />

        <label>First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          value={firstBrewed}
          onChange={handleFirstBrewedChange}
        />

        <br />

        <label>Brewer's Tips</label>
        <input
          type="text"
          name="brewers_tips"
          value={brewersTips}
          onChange={handleBrewerTipsChange}
        />

        <label>Attenuation Level</label>
        <input
          type="number"
          name="attenuation_level"
          value={attentuation}
          onChange={handleAttentuationChange}
        />

        <label>Contributed By</label>
        <input
          type="text"
          name="contributed_by"
          value={contributed}
          onChange={handleContributedChange}
        />

        <button onClick={handleCreateBeer} type="submit">
          Add Beer
        </button>
      </form>
    </div>
  );
}

export default AddBeerPage;
