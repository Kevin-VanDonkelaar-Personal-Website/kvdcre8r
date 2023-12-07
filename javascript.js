document.querySelector("#show-alert").addEventListener("click", async () => {
    alertDialog();
})

async function alertDialog() {
    const dialog = document.createElement("dialog");
    dialog.innerHTML = `
    <div id=dialog-content>
            Your submission has been received! Thank you!
            <button>OK</button>
    </div>
    `;
    const button = dialog.querySelector("button")
    return new Promise((res) => {
        document.body.appendChild(dialog);
        dialog.showModal();
        button.addEventListener("click", () => {
            res(dialog.close())
        });
    })
}