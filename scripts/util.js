function result(zipCodeData) {

    for (let data in zipCodeData) {
        if (document.querySelector(`#${data}`)) {
            document.querySelector(`#${data}`).value = zipCodeData[data];
        }
    }
}

let zipCodeData = async function (zipCodeNumber) {

    let url = "https://api.zip-codes.com/ZipCodesAPI.svc/1.0/GetZipCodeDetails/" + zipCodeNumber + "?key=UTDR58K736VA3MBSE83S";
    try {
        let fetchData = await fetch(url);
        let jsonData = await fetchData.json(); 
        result(jsonData.item);
    } catch (error) {
        alert(error);
    }
}

export { zipCodeData };