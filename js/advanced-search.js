window.addEventListener("load", function() {
    const form = document.getElementById('advancedSearchForm')

    // adding a submit event to the search button and executes an anonymous function
    form.addEventListener("submit", function(e) {
        e.preventDefault(); // before the code
        /* do what you want with the form */
        const formData = document.querySelectorAll('#advancedSearchForm input');
        // splitting all the input field data into objects
        const allWords = formData[0]['value'].split(' ');
        const exactWords = formData[1]['value'].split(' ');
        const anyWords = formData[2]['value'].split(' ');
        const noneWords = formData[3]['value'].split(' ');

        let queryString = "https://www.google.de/search?";

        // for each specific search parameter execute the query builder function
        queryString = queryBuilder(queryString, allWords, "as_q=")
        queryString = queryBuilder(queryString, exactWords, "as_epq=")
        queryString = queryBuilder(queryString, anyWords, "as_oq=")
        queryString = queryBuilder(queryString, noneWords, "as_eq=")

        console.log("Redirected to " + queryString);
        // redirect to search results page with search query as url
        window.location.href = queryString;
    })
});

// concatenate keywords with + symbols to build the query string
// inputs:
//      queryString -> current string which will be url
//      words -> Object with all the keywords
//      query -> specific field string for the query
// return:
//      queryString
function queryBuilder(queryString, words, query)
{
    // only append keywords to the field if there are some, else just append the field name
    if (Object.keys(words).length === 0)
    {
        queryString += query + "&";
    // append the first element in words object if there is only one element
    } else if (Object.keys(words).length === 1)
    {
        queryString += query + words[0] + "&";
    // for each element append the keyword and a + sign to the field in the query string
    } else {
        queryString += query;
        words.forEach(element => queryString += element + "+");
        queryString = queryString.substring(0, queryString.length - 1);
        queryString += "&";
    }

    return queryString;
}