const btn = document.getElementById("sendBtn");
const input = document.getElementById("input");
class ListItems {
    public value = "";
    constructor(value) { this.value = value }
}
const inputTexts = [];

const list = document.getElementById("list");

btn.addEventListener( "click", (event) => {
    const obj = new ListItems(input.value);
    inputTexts.push( obj );
    input.value = "";

    const newItem = document.createElement("li");
    newItem.textContent = obj.value;
    console.log("%c++","background:green", newItem.textContent)
    list.append(newItem);
})
