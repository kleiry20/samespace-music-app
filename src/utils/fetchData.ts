// useEffect(() => {
//   fetch("https://cms.samespace.com/items/songs")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("fetc", data);
//       setData(data);
//     });
// }, []);

const url = "https://cms.samespace.com/items/songs";

// Declare a type object
type ApiData = {
  accent: String;
  artist: String;
  cover: String;
  date_created: String;
  date_updated: String;
  id: Number;
  name: String;
  sort: null | any;
  status: String;
  top_track: Boolean;
  url: String;
  user_created: String;
  user_updated: String;
};

const apiData: any = [];

export async function fetchData() {
  const response = await fetch(url);
  const result = await response.json();
  apiData.push(result);
  // apiData && getImg(apiData);
}

export async function getImg(apiData: any) {
  const inputSong = getInput();
  const coverId = apiData.filter((song: any) => {
    if (song.id === inputSong) {
      return song.cover;
    } else {
      console.log("wrong id");
    }
  });
  console.log("covv", coverId);
  const Img = await fetch(`https://cms.samespace.com/assets/${coverId}`);
  console.log("img", Img);
}

export function getInput() {
  const selectedSong = (<HTMLInputElement>document.getElementById("input"))
    .value;
  console.log(selectedSong, "submit");
  return selectedSong;
}
