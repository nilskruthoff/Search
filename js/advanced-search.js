window.addEventListener("load", function() {
    const form = document.getElementById('advancedSearchForm')

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // before the code
        /* do what you want with the form */
        const formData = document.querySelectorAll('#advancedSearchForm input');
        const allWords = formData[0]['value'].split(' ');
        const exactWords = formData[1]['value'].split(' ');
        const anyWords = formData[2]['value'].split(' ');
        const noneWords = formData[3]['value'].split(' ');

        let queryString = "https://www.google.de/search?";

        queryString = queryBuilder(queryString, allWords, "as_q=")
        queryString = queryBuilder(queryString, exactWords, "as_epq=")
        queryString = queryBuilder(queryString, anyWords, "as_oq=")
        queryString = queryBuilder(queryString, noneWords, "as_eq=")

        console.log("Redirected to " + queryString);
        window.location.href = queryString;
    })
});

function queryBuilder(queryString, words, query)
{
    if (Object.keys(words).length === 0)
    {
        queryString += query + "&";
    } else if (Object.keys(words).length === 1)
    {
        queryString += query + words[0] + "&";
    } else {
        queryString += query;
        words.forEach(element => queryString += element + "+");
        queryString = queryString.substring(0, queryString.length - 1);
        queryString += "&";
    }

    return queryString;
}