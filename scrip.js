// let imgShopee_mall = 1;
// showimgShopee_mall(imgShopee_mall);

// function plusimgShopee_mall(n) {
//   showimgShopee_mall(imgShopee_mall += n);
// }

// function currentSlide(n) {
//   showimgShopee_mall(imgShopee_mall = n);
// }

// function showimgShopee_mall(n) {
//   let i;
//   let slides = document.getElementsByClassName("Shopee_mall_items_grid_item");
//   let dots = document.getElementsByClassName("demo");
//   let captionText = document.getElementById("caption");
//   if (n > slides.length) {imgShopee_mall = 1}
//   if (n < 1) {imgShopee_mall = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[imgShopee_mall-1].style.display = "block";
//   dots[imgShopee_mall-1].className += " active";
//   captionText.innerHTML = dots[imgShopee_mall-1].alt;
// }