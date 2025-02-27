const b1 = document.querySelector("#button1");
const b2 = document.querySelector("#button2");
const b3 = document.querySelector("#button3");
const b4 = document.querySelector("#button4");

const js = document.querySelector("#js");
const html = document.querySelector("#html");
const css = document.querySelector("#css");
const ts = document.querySelector("#ts");
const react = document.querySelector("#react");
const angular = document.querySelector("#angular");
const vue = document.querySelector("#vue");
const svelte = document.querySelector("#svelte");

const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");



const box1Items = ['JS', 'HTML', 'CSS', 'TS'];
const box3Items = ['React', 'Angular', 'Vue', 'Svelte'];

function create_checkboxes(array, box) {
  array.forEach((item) => {
    const div = document.createElement('div');
    div.classList.add('elements');
    
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = item.toLowerCase();
    
    const label = document.createElement('label');
    label.setAttribute('for', item.toLowerCase());
    label.textContent = item;

    div.appendChild(input);
    div.appendChild(label);

    box.appendChild(div);
  });
}

// Populate the boxes with the corresponding items
create_checkboxes(box1Items, box1);
create_checkboxes(box3Items, box3);

let elements = document.querySelectorAll(".elements");
change_button(box1.children.length,box3.children.length);
update_button();


b1.addEventListener("click", () => {
  elements.forEach((e) => {
    box3.append(e);
  });
  change_button(box1.children.length,box3.children.length);
  update_button()
});

b2.addEventListener("click", () => {
  elements.forEach((e) => {
    box1.append(e);
  });
  change_button(box1.children.length,box3.children.length);
  update_button()
});

b4.addEventListener("click", () => {
  elements.forEach((e) => {
    if (e.querySelector("input:checked")) {
      const checkbox = e.querySelector("input");
      checkbox.checked = false;
      box3.append(e);
    }
  });
  change_button(box1.children.length,box3.children.length);
  update_button()
});

b3.addEventListener("click", () => {
  elements.forEach((e) => {
    if (e.querySelector("input:checked")) {
      const checkbox = e.querySelector("input");
      checkbox.checked = false;
      box1.append(e);
    }
  });
  change_button(box1.children.length,box3.children.length);
  update_button()
});
box1.addEventListener("change", (event) => {
    if (event.target.type === "checkbox") {
        update_button();
    }
  });
  
box3.addEventListener("change", (event) => {
    if (event.target.type === "checkbox") {
        update_button();
    }
  });


function change_button(box1_length,box2_length){
    if(box1_length===0){
        b1.disabled=true;
        b2.disabled=false;
    }else if(box2_length===0){
        b1.disabled=false;
        b2.disabled=true;
    }else if(box1_length>0 && box2_length>0){
        b1.disabled=false;
        b2.disabled=false;
    }
}

function update_button(){
    let checked_box1=box1.querySelectorAll("input:checked").length>0;
    let checked_box3=box3.querySelectorAll("input:checked").length>0;
    if(checked_box1){
        b4.disabled=false;
    }
    else if(checked_box3){
        b3.disabled=false;
    }
    else if(!checked_box1 && !checked_box3){
        b4.disabled=true;
        b3.disabled=true;
    }
}