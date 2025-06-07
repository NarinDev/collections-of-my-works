const btn = document.getElementById("sendBtn");
const input = document.getElementById("input");
class ListItems {
     value = "";
    constructor(value) { this.value = value }
}
const inputTexts = [];

const list = document.getElementById("list");

axios({
    method: "get",
    url: "/todos",
    data: {
        text: "Hi"
    }
}).then((res) => {
    console.log("%c++","background:green", res)
})

btn.addEventListener( "click", (event) => {
    if( input.value != "") {
        const obj = new ListItems(input.value);
        inputTexts.push( obj );
        input.value = "";

        const newItem = document.createElement("li");
        // const newLabel = document.createElement("label");
        // const newCheckbox = document.createElement("input");
        //
        // newCheckbox.type = "checkbox";
        // newLabel.append(newCheckbox, obj.value);
        // newItem.append(newLabel);
        newItem.innerHTML = `
        <label>
          <input type="checkbox" name="subscribe"><span>${obj.value}</span>
        </label>
        `

        list.append(newItem);
    }
})
