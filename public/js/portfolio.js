

$(document).ready(() => {

    $("#commentSubmit").on("click", (e) => {

        const name = $("#commentName");
        const comment = $("#comment");

        const data = {
            name: name.val().trim(),
            comment: comment.val().trim()
        };

        if (data.name === "" || data.comment === "") {
            alert("name/comment cannot be blank.")
            return
        } else {

            name.val("");
            comment.val("");

            $.post("/comment", data).then(() => {
                console.log("comment added!");
                location.reload();
            })

        }
    });
})



