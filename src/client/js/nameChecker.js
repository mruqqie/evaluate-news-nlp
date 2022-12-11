function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let inputElem = document.getElementById('name');
    inputElem.value = inputText;

    if (inputElem.checkValidity()) {
        return true;
    }else {
        return false;
    }
}
export {checkForName}
