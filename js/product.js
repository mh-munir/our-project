document.addEventListener("DOMContentLoaded", function () {
  const productItems = document.querySelector(".product-items");
  const showMore = document.querySelector(".show-btn");
  const items = [
    {
      image: "img/webp.webp",
      title: "نسيان ماكسيما 2017 ممشى قليل",
      post_comment: "5 minutes ago",
      post_time: "2",
      location: "Riyadh",
      post_id: "1eed2011",
    },
    {
      image: "img/webp1.webp",
      title: "طرمبة مضخة بنزين تويوتا و لكزس جديدة",
      post_comment: "4 minutes ago",
      post_time: "5",
      location: "Jadda",
      post_id: "1eed2014",
    },
    {
      image: "img/webp2.webp",
      title: "منفذ شبكه شركة COMMSCOPE",
      post_comment: "10 minutes ago",
      post_time: "10",
      location: "Makka",
      post_id: "1eed2019",
    },
    {
      image: "img/webp3.webp",
      title: "نسيان ماكسيما 2017 ممشى قليل",
      post_comment: "10 minutes ago",
      post_time: "10",
      location: "Makka",
      post_id: "1eed2019",
    },
    {
      image: "img/webp4.webp",
      title: "نسيان ماكسيما 2017 ممشى قليل",
      post_comment: "10 minutes ago",
      post_time: "10",
      location: "Makka",
      post_id: "1eed2019",
    },
    {
      image: "img/webp5.webp",
      title: "نسيان ماكسيما 2017 ممشى قليل",
      post_comment: "10 minutes ago",
      post_time: "10",
      location: "Makka",
      post_id: "1eed2019",
    },
    {
      image: "img/webp6.webp",
      title: "نسيان ماكسيما 2017 ممشى قليل",
      post_comment: "10 minutes ago",
      post_time: "10",
      location: "Makka",
      post_id: "1eed2019",
    },
    {
      image: "img/webp7.webp",
      title: "نسيان ماكسيما 2017 ممشى قليل",
      post_comment: "10 minutes ago",
      post_time: "10",
      location: "Makka",
      post_id: "1eed2019",
    },
    {
      image: "img/webp8.webp",
      title: "نسيان ماكسيما 2017 ممشى قليل",
      post_comment: "10 minutes ago",
      post_time: "10",
      location: "Makka",
      post_id: "1eed2019",
    },
    {
      image: "img/webp9.webp",
      title: "نسيان ماكسيما 2017 ممشى قليل",
      post_comment: "10 minutes ago",
      post_time: "10",
      location: "Makka",
      post_id: "1eed2019",
    },
    {
      image: "img/webp10.webp",
      title: "نسيان ماكسيما 2017 ممشى قليل",
      post_comment: "10 minutes ago",
      post_time: "10",
      location: "Makka",
      post_id: "1eed2019",
    },
    {
      image: "img/webp.webp",
      title: "نسيان ماكسيما 2017 ممشى قليل",
      post_comment: "10 minutes ago",
      post_time: "10",
      location: "Makka",
      post_id: "1eed2019",
    },
    {
      image: "img/webp2.webp",
      title: "نسيان ماكسيما 2017 ممشى قليل",
      post_comment: "10 minutes ago",
      post_time: "10",
      location: "Makka",
      post_id: "1eed2019",
    },
    {
      image: "img/webp3.webp",
      title: "نسيان ماكسيما 2017 ممشى قليل",
      post_comment: "10 minutes ago",
      post_time: "10",
      location: "Makka",
      post_id: "1eed2019",
    },
    {
      image: "img/webp4.webp",
      title: "نسيان ماكسيما 2017 ممشى قليل",
      post_comment: "10 minutes ago",
      post_time: "10",
      location: "Makka",
      post_id: "1eed2019",
    },
    {
      image: "img/webp5.webp",
      title: "نسيان ماكسيما 2017 ممشى قليل",
      post_comment: "10 minutes ago",
      post_time: "10",
      location: "Makka",
      post_id: "1eed2019",
    },
    {
      image: "img/webp6.webp",
      title: "نسيان ماكسيما 2017 ممشى قليل",
      post_comment: "10 minutes ago",
      post_time: "10",
      location: "Makka",
      post_id: "1eed2019",
    },
    {
      image: "img/webp7.webp",
      title: "نسيان ماكسيما 2017 ممشى قليل",
      post_comment: "10 minutes ago",
      post_time: "10",
      location: "Makka",
      post_id: "1eed2019",
    },
    {
      image: "img/webp8.webp",
      title: "نسيان ماكسيما 2017 ممشى قليل",
      post_comment: "10 minutes ago",
      post_time: "10",
      location: "Makka",
      post_id: "1eed2019",
    },
    {
      image: "img/webp9.webp",
      title: "نسيان ماكسيما 2017 ممشى قليل",
      post_comment: "10 minutes ago",
      post_time: "10",
      location: "Makka",
      post_id: "1eed2019",
    },
    {
      image: "img/webp10.webp",
      title: "نسيان ماكسيما 2017 ممشى قليل",
      post_comment: "10 minutes ago",
      post_time: "10",
      location: "Makka",
      post_id: "1eed2019",
    },
    {
      image: "img/webp.webp",
      title: "نسيان ماكسيما 2017 ممشى قليل",
      post_comment: "10 minutes ago",
      post_time: "10",
      location: "Makka",
      post_id: "1eed2019",
    },
  ];

  let itemsPerPage = 10;
  let currentPage = 0;

  function loadItems() {
    let start = currentPage * itemsPerPage;
    let end = start + itemsPerPage;
    let paginatedItems = items.slice(start, end);

    if (paginatedItems.length === 0) {
      loadMoreBtn.style.display = "none";
      return;
    }

    paginatedItems.forEach((item) => {
      let itemCard = document.createElement("div");
      itemCard.className = "product-item bg-tertiary";

      itemCard.innerHTML = `
                <a href="/" class="product-img">
                    <img src="${item.image}" alt="${item.title}">
                </a>
                <div class="product-details">
                    <a class="product-title" href="/">${item.title}</a>
                    <div class="product-content">
                        <div class="product-details--item"> <a class="product-text" href="/">${item.post_time}</a> <span class="details-icon"><i class="fa-solid fa-arrows-rotate"></i> </span> </div>
                        <div class="product-details--item"> <p class="product-text">${item.post_comment}</p> <span class="details-icon"><i class="fa-regular fa-comments"></i></span></div>
                    </div>
                    <div class="product-content">
                        <div class="product-details--item"> <a class="product-text" href="/">${item.post_id}</a> <span class="details-icon"><i class="fa-regular fa-user"></i></span></div>
                        <div class="product-details--item"> <a class="product-text" href="/">${item.location}</a> <span class="details-icon"><i class="fa-solid fa-location-dot"></i></span></div>
                    </div>
                </div>
            `;
      productItems.appendChild(itemCard);
    });

    currentPage++;
  }
  showMore.addEventListener("click", loadItems);
  loadItems();
});
