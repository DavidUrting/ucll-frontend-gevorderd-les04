export function get(url, callback) {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        handleXmlHttpRequestDone(xmlhttp, callback);
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function handleXmlHttpRequestDone(xmlhttp, callback) {
    if (xmlhttp.readyState === 4) {
        let response;
        if (!xmlhttp.responseText) {
            if (xmlhttp.status === 200) {
                response = { status: "success" };
            }
            else if (xmlhttp.status >= 400 && xmlhttp.status < 500) {
                response = { status: "fail", data: { message: "Status code " + xmlhttp.status + " returned." } };
            }
            else {
                response = { status: "error", message: "Status code " + xmlhttp.status + " returned." };
            }
        }
        else {
            response = JSON.parse(xmlhttp.responseText);
        }

        if (callback) {
            callback(response);
        }
    }
}