window.addEventListener("load", function() {
    const form = document.getElementById('searchForm')

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // before the code
        /* do what you want with the form */
        const source = document.querySelector('#searchField').dataset.source;
        const formData = document.querySelectorAll('#searchForm input');
        const searchKeyword = formData[0]['value'];
        let searchQuery = "";

        if (e['submitter']['id'] === 'searchSubmit')
        {
            console.log("TEST")
            if (source === "search")
            {
                searchQuery = "https://www.google.com/search?q=" + searchKeyword;
            } else if (source === "image-search")
            {
                searchQuery = "https://www.google.com/search?q=" + searchKeyword + "&tbm=isch";
            }
            console.log(e);
        } else if (e['submitter']['id'] === 'searchLucky')
        {
            searchQuery = "https://www.google.de/search?q=" + searchKeyword + "&btnI=Auf gut Glück!"
        }

        console.log("Redirected to " + searchQuery);
        window.location.href = searchQuery;
    })
});

//https://www.google.de/search?q=test&btnI=Auf gut Glück!&