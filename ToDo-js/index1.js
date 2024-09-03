const onClickAdd = () => {
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    const li = document.createElement("li");

    const div = document.createElement("div");
    div.className ="list-row"

    const p =document.createElement("p");
    p.className ="todo-item";
    p.innerText = inputText;

    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click",() => {
        alert("完了");
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerText ="消去";
    deleteButton.addEventListener("click",() => {
        const deleteTarget = deleteButton.closest("li");
        document.getElementById("incomplete-list").removeChild();
    });




    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);

    document.getElementById("incomplete-list").appendChild(li);
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("add-button").addEventListener("click", onClickAdd);
});
