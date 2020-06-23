

$(document).ready(() => {
    $(document).on("keypress", function (e) {

        console.log(e)
        if (e.which == 13) {

            const name = $("#commentName");
            const comment = $("#comment");

            const data = {
                name: name.val().trim(),
                comment: comment.val().trim()
            };

            name.val("");
            comment.val("");

            console.log(data)

            $.post("/comment", data)

        }
    })

    $("#commentSubmit").on("click", (e) => {

        const name = $("#commentName");
        const comment = $("#comment");

        const data = {
            name: name.val().trim(),
            comment: comment.val().trim()
        };

        if (data.name === "" || data.comment === "") {
            alert("name/comment cannot be blank.")
        } else {

            name.val("");
            comment.val("");

            $.post("/comment", data).then(() => {
                console.log("comment added!");
                location.reload();
            })

        }
    })

});

