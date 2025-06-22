async function getCat() {
  const tag = document.getElementById("tagSelect").value;
  const gif = document.getElementById("gifCheckbox").checked;
  document.getElementById("catImage").style.display = "none";
  document.getElementById("loader").style.display = "block";
  document.getElementById("placeholder").style.display = "none";

  const catImage = document.getElementById("catImage");
  const loader = document.getElementById("loader");

  catImage.style.display = "none";
  loader.style.display = "block";

  let url = "https://cataas.com";

  if (gif) {
    url += "/cat/gif";
  } else {
    url += "/cat";
  }

  url += "?json=true";
  catImage.onload = () => {
    loader.style.display = "none";
    catImage.style.display = "block";
  };

  try {
    const res = await fetch(url);
    const data = await res.json();
    const imageUrl = data.url;

    catImage.src = imageUrl;
    catImage.onload = () => {
      loader.style.display = "none";
      catImage.style.display = "block";
    };
  } catch (error) {
    loader.style.display = "none";
    placeholder.style.display = "block";
    alert("😿 Failed to fetch cat. Try again!");
  }
}
