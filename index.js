 function handleFormSubmit() {
    $('form').submit(event => {
        event.preventDefault();
        let handle = $('#handle').val()
        console.log(handle)
    })
 }


handleFormSubmit()