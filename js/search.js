window.addEventListener("load", function() {
    const form = document.getElementById('searchForm')

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // before the code
        /* do what you want with the form */
        const formData = document.querySelectorAll('#searchForm input');
        const searchKeyword = formData[0]['value'];
        const searchQuery = "https://www.google.com/search?q=" + searchKeyword;

        console.log("Redirected to " + searchQuery);
        window.location.href = searchQuery;
    })
});