let div = document.createElement("div");

div.id="shopify-section-recently-viewed";

div.className="shopify-section index-section";

document.getElementById("MainContent").appendChild(div);

let img = document.createElement("img");

img.srcset="https://cdn.shopify.com/s/files/1/0283/1338/7053/collections/JennaTee-040-2-n-p-white_1800x1800_19630a83-f67a-4864-a702-8b672678f3d1_180x.jpg?v=1602676291";

document.getElementById("shopify-section-recently-viewed").appendChild(img);

// //////////////////////////////////////////////////////////

window.theme.recentlyViewed

img.src="//cdn.shopify.com/s/files/1/0283/1338/7053/products/12208-organic-cotton-org-ctn-loop-and-tie-l.s.-top-nctw-0405-n-p-black_{width}x.jpg?v=1600416225";

img.src = window.theme.recentlyViewed.recent["stretch-tencel™-cut-out-shoulder-body-aw20"].featuredImage;

////////////////////////////////////////////

let div = document.createElement("div");

div.id="arrayname";

document.getElementById("shopify-section-recently-viewed").appendChild(div);

var name = ["Irfanul", "Karim"];

let p = document.createElement("p");

p.id="demo";

document.getElementById("shopify-section-recently-viewed").appendChild(p);


for(var z=0; z<2; i++){document.getElementById("demo").innerHTML=name[z];}

/////////////////////////////////////////////////////////////////////////////////

{organic-cotton-stonewash-panelled-boy-fit-joggers-aw20: {…}, organic-cotton-stripe-chunky-rib-scoop-neck-midi-dress: {…}, ls-oversized-jumpsuit-zip-neck: {…}, s-ribbed-organic-cotton-one-shoulder-top: {…}, organic-cotton-lace-up-long-sleeved-top-aw20: {…}, …}
ls-oversized-jumpsuit-zip-neck: {url: "/collections/jumpsuits/products/ls-oversized-jumpsuit-zip-neck", aspectRatio: "131.722054381", featuredImage: "//cdn.shopify.com/s/files/1/0283/1338/7053/product…020_NAVY_105-4-n-p-navy_{width}x.jpg?v=1585830650"}
organic-cotton-lace-up-long-sleeved-top-aw20: {url: "/collections/tops/products/organic-cotton-lace-up-long-sleeved-top-aw20", aspectRatio: "131.722054381", featuredImage: "//cdn.shopify.com/s/files/1/0283/1338/7053/product…top-nctw-0405-n-p-black_{width}x.jpg?v=1600416225"}
organic-cotton-stonewash-panelled-boy-fit-joggers-aw20: {url: "/collections/bottoms/products/organic-cotton-stonewash-panelled-boy-fit-joggers-aw20", aspectRatio: "131.722054381", featuredImage: "//cdn.shopify.com/s/files/1/0283/1338/7053/product…133-n-p-black-stonewash_{width}x.jpg?v=1601894402"}
organic-cotton-stripe-chunky-rib-scoop-neck-midi-dress: {url: "/collections/dresses/products/organic-cotton-stripe-chunky-rib-scoop-neck-midi-dress", aspectRatio: "131.722054381", featuredImage: "//cdn.shopify.com/s/files/1/0283/1338/7053/product…-45ea-bce1-3dae338c96e3_{width}x.jpg?v=1602072776"}
organic-cotton-structured-sweatpants: {url: "/collections/bottoms/products/organic-cotton-structured-sweatpants", aspectRatio: "131.822863028", featuredImage: "//cdn.shopify.com/s/files/1/0283/1338/7053/product…-4d72-ae05-3096c4c0a16f_{width}x.jpg?v=1602000339"}
s-ribbed-organic-cotton-one-shoulder-top: {url: "/collections/knitwear/products/s-ribbed-organic-cotton-one-shoulder-top", aspectRatio: "131.722054381", featuredImage: "//cdn.shopify.com/s/files/1/0283/1338/7053/product…KW-0179-117-F-n-p-black_{width}x.jpg?v=1599214346"}
stretch-tencel™-cut-out-shoulder-body-aw20: {url: "/collections/bodysuits/products/stretch-tencel%E2%84%A2-cut-out-shoulder-body-aw20", aspectRatio: "131.722054381", featuredImage: "//cdn.shopify.com/s/files/1/0283/1338/7053/product…ody-nctw-0388-n-p-black_{width}x.jpg?v=1602078894"}
__proto__: Object

// //////////////////////////// Again try //////////////////////

let div = document.createElement("div");

div.id="shopify-section-recently-viewed";

div.className="shopify-section index-section";

document.getElementById("MainContent").appendChild(div);

let div = document.createElement("div");

div.className="section--divider";

document.getElementById("shopify-section-recently-viewed").appendChild(div);

let div = document.createElement("div");

div.className="page-width";

document.querySelector("#shopify-section-recently-viewed .section--divider").appendChild(div);

let div = document.createElement("div");

div.className="section-header";

document.querySelector("#shopify-section-recently-viewed .section--divider .page-width").appendChild(div);

let h2 = document.createElement("h2");

h2.className="section-header__title";

document.querySelector("#shopify-section-recently-viewed .section--divider .page-width .section-header").appendChild(h2);

h2.innerHTML="RECENTLY VIEWED";

let div = document.createElement("div");

div.className="grid grid--uniform";

document.querySelector("#shopify-section-recently-viewed .section--divider .page-width").appendChild(div);

let div = document.createElement("div");

div.className="row-recent";

document.querySelector("#shopify-section-recently-viewed .section--divider .page-width .grid.grid--uniform").appendChild(div);

let div = document.createElement("div");

div.className="column";

document.querySelector("#shopify-section-recently-viewed .section--divider .page-width .grid.grid--uniform .row-recent").appendChild(div);

for(var i=0; i<3; i++){
    let div = document.createElement("div");
    div.className="column";
    document.querySelector("#shopify-section-recently-viewed .section--divider .page-width .grid.grid--uniform .row-recent").appendChild(div);
    }















