function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if(Client.checkForName(formText)) {
        fetch('http://localhost:8081/addData', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({formText: formText})
        })
        .then(res => res.json())
        .then((res) => {
            document.getElementById('url').innerHTML = `URL: ${formText}`;
            document.getElementById('agreement').innerHTML = `Agreement: ${res.agreement}`;
            document.getElementById('confidence').innerHTML = `Confidence: ${res.confidence}`;
            document.getElementById('irony').innerHTML = `Irony: ${res.irony}`;
            document.getElementById('model').innerHTML = `Model: ${res.model}`;
            document.getElementById('scoreTag').innerHTML = `Score Tag: ${res.score_tag}`;
        });
    } else {
        alert('Invalid URL')
    };
    document.getElementById('form').reset()
}

export {handleSubmit}
