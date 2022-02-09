window.addEventListener("load", function() {
    const form = document.getElementById('searchForm')

    // adding a submit event to the search and lucky button and executes an anonymous function
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        // getting data attributes and form data
        const source = document.querySelector('#searchField').dataset.source;
        const formData = document.querySelectorAll('#searchForm input');
        const searchKeyword = formData[0]['value'];
        let searchQuery = "";

        // if the search button was clicked
        if (e['submitter']['id'] === 'searchSubmit')
        {
            // if it is from normal google search
            if (source === "search")
            {
                // set this query string
                searchQuery = "https://www.google.com/search?q=" + searchKeyword;
            // if it is from image search
            } else if (source === "image-search")
            {
                // set this query string to forward to google pictures
                searchQuery = "https://www.google.com/search?q=" + searchKeyword + "&tbm=isch";
            }
        // if the feeling lucky button is pressed
        } else if (e['submitter']['id'] === 'searchLucky')
        {
            // set this query string to forward to google first search result
            searchQuery = "https://www.google.de/search?q=" + searchKeyword + "&btnI=Auf gut Glück!"
        }

        console.log("Redirected to " + searchQuery);
        // redirect to search results page with search query as url
        window.location.href = searchQuery;
    })
});