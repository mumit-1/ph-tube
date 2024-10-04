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
      
      const btn = document.createElement("button");
      btn.classList.add("btn");
      btn.innerText = element.category;
     
      
        navSecond.append(btn);
  });
};
loadCatagories();
