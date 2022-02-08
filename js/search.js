window.addEventListener("load", function() {
    const form = document.getElementById('searchForm')

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // before the code
        /* do what you want with the form */
        const source = document.querySelector('#searchField').dataset.source;
        const formData = document.querySelectorAll('#searchForm input');
        const searchKeyword = formData[0]['value'];
        let searchQuery = "";
        if (source === "search")
        {
            searchQuery = "https://www.google.com/search?q=" + searchKeyword;
        } else if (source === "image-search")
        {
            searchQuery = "https://www.google.com/search?q=" + searchKeyword + "&tbm=isch";
        }

        console.log("Redirected to " + searchQuery);
        window.location.href = searchQuery;
    })
});