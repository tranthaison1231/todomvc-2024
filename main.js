const input = document.getElementById("input");
const list = document.getElementById("list");
const toggle = document.getElementById("toggle");
const footer = document.getElementById("footer");
const counter = document.getElementById("counter");

function getCountLeft() {
  let count = list.children.length;

  for (let i = 0; i < list.children.length; i++) {
    if (list.children[i].classList.contains("line-through")) {
      count--;
    }
  }
  return count;
}

input.onkeyup = (e) => {
  if (e.key === "Enter") {
    list.innerHTML += `<li class="p-[15px] border-b border-[#ededed] flex items-center group">
          <div data-todo="toggle" class="mr-[15px] rounded-full size-10 border flex justify-center items-center">
            <svg class="hidden text-green-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
          </div>
          ${input.value}
          <svg data-todo="delete" class="ml-auto cursor-pointer hidden group-hover:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </li>`;
    input.value = "";
  }
  if (list.children.length > 0) {
    toggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="lucide lucide-chevron-down">
          <path d="m6 9 6 6 6-6" />
        </svg>`;
    input.classList.remove(["shadow-2xl"]);
    footer.classList.remove(["hidden"]);
  }

  counter.innerHTML = `${getCountLeft()} item left`;
};

list.onclick = (e) => {
  if (e.target.getAttribute("data-todo") === "delete") {
    e.target.parentElement.remove();
  }

  if (e.target.getAttribute("data-todo") === "toggle") {
    e.target.parentElement.classList.toggle("line-through");
    e.target.classList.toggle("border-green-500");
    e.target.querySelector("svg").classList.toggle("hidden");
  }

  counter.innerHTML = `${getCountLeft()} item left`;
};

const renderApp = () => {
  const hash = window.location.hash;

  console.log(hash);
};

renderApp();
