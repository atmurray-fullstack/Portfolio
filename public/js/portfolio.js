

$(document).ready(() => {

    $(document).on("keypress", function (e) {
        event.preventDefault();
        if (e.keyCode === 13) {
            const name = $("#commentName");
            const comment = $("#comment");
            let data = {
                name: name.val().trim(),
                comment: comment.val().trim()
            };
            console.log(data);
            if (data.name.length === 0 || data.comment.length === 0) {
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
        }
    })
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



