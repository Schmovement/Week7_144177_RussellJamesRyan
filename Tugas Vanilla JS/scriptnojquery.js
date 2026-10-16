document.addEventListener("DOMContentLoaded", () => {
    let lastSender = null;

    const messageInputs = document.querySelectorAll(".message-input");
    messageInputs.forEach(textarea => {
        textarea.addEventListener("input", function () {
            this.style.height = "auto";
            this.style.height = `${this.scrollHeight}px`;
            if (this.scrollHeight >= 120) {
                this.style.overflowY = "auto";
            } else {
                this.style.overflowY = "hidden";
            }
        });
    });

    const displayMessage = document.querySelector("#displaymessage");
    const sendButtons = document.querySelectorAll(".btn-send");

    sendButtons.forEach(button => {
        button.addEventListener("click", function () {
            const parent = this.closest(".messagediv"); 
            const nameInput = parent.querySelector(".name-input"); 
            const messageInput = parent.querySelector(".message-input"); 
            const nameValue = nameInput.value.trim(); 
            const messageValue = messageInput.value.trim(); 

            if (nameValue === "" || messageValue === "") {
                alert("Please fill in both your name and message.");
                return;
            }

            const senderType = this.closest("#first") ? "user-1" : "user-2";

            addMessage(nameValue, messageValue, senderType); 
            messageInput.value = "";
            messageInput.style.height = "auto";
        });
    });

    function addMessage(name, message, senderType) {
        const card = document.createElement("div");
        card.classList.add("chat-card", senderType);

        if (lastSender !== senderType) {
            const sender = document.createElement("strong");
            sender.classList.add("chat-sender");
            sender.textContent = name;
            card.appendChild(sender);
            lastSender = senderType;
        } else {
            card.classList.add("consecutive"); 
        }

        const body = document.createElement("p");
        body.classList.add("chat-body");
        body.textContent = message;

        card.appendChild(body);
        displayMessage.appendChild(card);

        displayMessage.scrollTo({
            top: displayMessage.scrollHeight,
            behavior: "smooth"
        });
    }
});