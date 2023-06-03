import React, { useEffect, useState } from "react";
import axios from "axios";
import Simpsons from "./components/Simpsons";
import Loading from "./components/Loading";
import Search from "./components/Search";

import "./App.css";

const App = () => {
  const [simpsons, setSimpsons] = useState(); //hooks always go at top
  const [search, searchInput] = useState("");
  const [liked, likeDislikeInput] = useState("");

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `https://thesimpsonsquoteapi.glitch.me/quotes?count=10`
      );
      //fix the api data to have unique id
      data.forEach((element, index) => {
        element.id = index + Math.random();
      });
      setSimpsons(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []); // hook that triggers behaviour - means run once cos square brackets (dependancy array)

  const onLikeToggle = (id) => {
    const char = [...simpsons.char];
    const indexOf = list.findIndex((char) => {
      return char.id === id;
    });
    ///toggle liked property
    char[indexOf].liked = !char[indexOf].liked;
    setSimpsons({ ...simpsons, char });
  };

  const onDelete = (id) => {
    const char = [...simpsons.char];
    const indexOf = list.findIndex((char) => {
      return char.id === id;
    });
    char.splice(indexOf, 1);
    setSimpsons({ ...simpsons, char });
  };

  const onSearchInput = (e) => {
    search(e.target.value);
  };

  const onLikeDislikeInput = (e) => {
    // console.log("yo");
    liked(e.target.value);
  };

  //if nothing in state show "loading"
  if (!simpsons) return <Loading />;
  // console.log(simpsons); //check if data is in state

  if (simpsons.length === 0) return <p>You deleted everyone!</p>;

  //filter by search
  let simpsonsCopy = [...simpsons];
  // if (searchInput) {
  //   simpsonsCopy = simpsonsCopy.filter((item) => {
  //     console.log(item.character, searchInput);
  //     if (item.character.toLowerCase().includes(searchInput.toLowerCase())) {
  //       return true;
  //     }
  //   });
  // }
  //sort by liked/not liked

  if (likeDislikeInput === "liked") {
    simpsonsCopy.sort((itemOne, itemTwo) => {
      if (itemOne.liked === true) return -1;
      if (!itemTwo.liked) return 1;
    });
  } else if (likeDislikeInput === "notLiked") {
    simpsonsCopy.sort((itemOne, itemTwo) => {
      if (itemTwo.liked === true) return -1;
      if (!itemOne.liked) return 1;
    });
  }

  // calculate the total
  let total = 0;
  simpsonsCopy.forEach((char) => {
    if (char.liked) total++;
  });

  return (
    <>
      <div className="title">
        <img
          className="logo"
          src="src/assets/simpsons-logo-pink.svg"
          alt="simpsons logo"
        ></img>
        <h1>Total No of Liked Characters is -{total}</h1>
        <Search
          onSearchInput={onSearchInput}
          onLikeDislikeInput={onLikeDislikeInput}
        />
      </div>
      <Simpsons
        simpsons={simpsons}
        onLikeToggle={onLikeToggle}
        onDelete={onDelete}
        onSearchInput={onSearchInput}
        onLikeDislikeInput={onLikeDislikeInput}
      />
    </>
  ); //must return HTML
};

export default App;
