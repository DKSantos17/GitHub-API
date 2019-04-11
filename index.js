 function handleFormSubmit() {
    $('form').submit(event => {
        event.preventDefault();
        let handle = $('#handle').val()
        let url = "https://api.github.com/users/" + handle + "/repos"
        callApi(url)

    })
 }

 function callApi(query) {
    fetch(query)
        .then (response => response.json())
        .then (responseJson => displayResults(responseJson))
 }

 function displayResults(jsonObject) {
     console.log('displaying results')
    $('.results').empty()
    for (let i=0; i<jsonObject.length; i++) {
        $('.results').append("<li><a href='" + jsonObject[i].svn_url + "' target='_blank'>" + jsonObject[i].name + "</a></li>")
    }
 }
handleFormSubmit()