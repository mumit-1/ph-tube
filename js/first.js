function getByCategory(id) {
 fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
 .then((res) => res.json())
    .then((data) => displayVideos(data.category))
    .catch((error) => console.error(error));
}



const getTime = (value) =>{
  const hour = parseInt(value / 3600 );
  const remainingSecHour = value % 3600;
  const min = parseInt(remainingSecHour / 60);
  const remainingSecMin = remainingSecHour % 60 ;
  
  return `${hour} hour ${min} min ${remainingSecMin} second ago`
 }



const loadCatagories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    // .then(res => console.log(res))
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.error(error));
};
const displayCategories = (categories) => {
  const navSecond = document.getElementById("second-nav");
  categories.forEach((element) => {
    const btnContainer = document.createElement("div");
    btnContainer.innerHTML =
    `
    <button onclick="getByCategory(${element.category_id})" class="btn drop-shadow-xl">${element.category}</button>
    `
    

    navSecond.append(btnContainer);
  });
};

const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    // .then((data) => console.log(data.videos))

    .catch((error) => console.error(error));
};

// const videoAPI = {
//   category_id: "1001",
//   video_id: "aaaa",
//   thumbnail: "https://i.ibb.co/L1b6xSq/shape.jpg",
//   title: "Shape of You",
//   authors: [
//     {
//       profile_picture: "https://i.ibb.co/D9wWRM6/olivia.jpg",
//       profile_name: "Olivia Mitchell",
//       verified: "",
//     },
//   ],
//   others: {
//     views: "100K",
//     posted_date: "16278",
//   },
//   description:
//     "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey.",
// };

const displayVideos = (videos) => {
  const firstSection = document.getElementById("first-section");
  firstSection.innerHTML=""
  videos.forEach((video) => {
    const div = document.createElement("div");
    div.classList = "";
    div.innerHTML = `
        <figure class="h-[200px] relative">
    <img
    class="w-full h-full object-cover rounded-lg"
      src="${video.thumbnail}" />
    ${
      video.others.posted_date !== "" 
      ?`<span class='absolute right-2 bottom-2 bg-black text-white p-1 rounded-lg'>${getTime(video.others.posted_date)}</span>`
      :""
    }
  </figure>
  <div class="">
    <div class="flex justify-between gap-3 mt-4 px-1">
  <div class="  w-[40px] h-[40px]">
    <img class="rounded-full w-full h-full object-cover" src="${
      video.authors[0].profile_picture
    }" alt="">
  </div>
  <div class="flex-1">
    <p class="font-bold text-lg">${video.title}</p>
    <div class="flex gap-1 items-center">
      <p class="opacity-65">${video.authors[0].profile_name}</p>
${
  video.authors[0].verified === true
    ? "<img class='w-[17px] h-[17px]' src='https://img.icons8.com/?size=48&id=SRJUuaAShjVD&format=png'>"
    : ""
} 
      </div>
    <p class="opacity-65">${video.others.views}</p>
  </div>
</div>
  </div>
        `;
    firstSection.append(div);
  });
};

loadCatagories();
loadVideos();
