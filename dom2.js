//  요소들 조작하기
const $carrot = document.querySelector("section>ul>li");
console.log($carrot);
$carrot.textContent = "제주당근";

const $onion = document.querySelector("section ul").lastElementChild;
console.log($onion);
$onion.classList.remove("hidden");
$onion.classList.add("hidden");
$onion.classList.toggle("hidden");

// style
$onion.style.fontSize = "32px";
$onion.style.color = "red";
$onion.style.backgroundColor = "green";
$onion.style["font-weight"] = "bold";

const $hyperlink = document.querySelector("a");

$hyperlink.getAttribute("href");
console.log($hyperlink.getAttribute("href"));

$hyperlink.setAttribute("href", "https://kr.pinterest.com/");

const $massage = document.querySelector("input");
$massage.setAttribute("value", "안녕하세요");
// $massage.setAttribute("type", "password");

const $img = document.querySelector("img");
$img.setAttribute("src", "bird.jpg");
$img.setAttribute("width", "500");

const $massage2 = document.querySelector("input[name=message]");
$massage2.value = "반가워";

const $toggle = document.querySelector("input[name=toggle]");
$toggle.checked = !$toggle.checked;

// 요소제거
const $ul = document.querySelector("section ul");
$ul.removeChild($onion);
