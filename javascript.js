document.querySelector("#show-alert").addEventListener("click", async () => {
    confirmationDialog();
})

async function confirmationDialog() {
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

document.querySelector("#p4-more-btn").addEventListener("click", async () => {
    p4Dialog();
})

async function p4Dialog() {
    const dialog = document.createElement("dialog");
    dialog.innerHTML = `
    <div id=dialog-content>
        pws image
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