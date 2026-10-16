$(document).ready(function () {
    let lastSender = null;

    $(".message-input").on("input", function () {
        $(this).css("height", "auto");
        const scrollHeight = this.scrollHeight; 
        $(this).css("height", scrollHeight + "px");

        if (scrollHeight >= 120) {
            $(this).css("overflow-y", "auto");
        } else {
            $(this).css("overflow-y", "hidden");
        }
    });

    $(".btn-send").on("click", function () {
        const $parent = $(this).closest(".messagediv");
        const $nameInput = $parent.find(".name-input");
        const $messageInput = $parent.find(".message-input");

        const nameValue = $nameInput.val().trim();
        const messageValue = $messageInput.val().trim();

        if (nameValue === "" || messageValue === "") {
            alert("Please fill in both your name and message.");
            return;
        }

        const senderType = $(this).closest("#first").length ? "user-1" : "user-2";

        addMessage(nameValue, messageValue, senderType);

        $messageInput.val("").css("height", "auto");
    });

    function addMessage(name, message, senderType) {
        const $card = $("<div></div>").addClass("chat-card " + senderType);

        if (lastSender !== senderType) {
            $("<strong></strong>")
                .addClass("chat-sender")
                .text(name)
                .appendTo($card);
            lastSender = senderType;
        } else {
            $card.addClass("consecutive");
        }

        $("<p></p>")
            .addClass("chat-body")
            .text(message)
            .appendTo($card);

        const $displayMessage = $("#displaymessage");
        $displayMessage.append($card);

        $displayMessage.stop().animate({
            scrollTop: $displayMessage.prop("scrollHeight")
        }, 300);
    }
});