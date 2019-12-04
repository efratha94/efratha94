$.ajax({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
    success: function (data) {
        let users = data
        let userData = template({ users });
        $("#my-people").append(userData)
    },
    error: function (xhr, text, error) {
        console.log("oops")
    },

})

const source = $("#my-people-template").html()
const template = Handlebars.compile(source);

