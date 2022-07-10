function getDateFromString(text) {

    let res = text.match(/\d{2}()\d{2}\1\d{4}/g);
    let finalResult = [];
    res.forEach(element => {

        element = element.slice(0, 2) + "-" + element.slice(2, 4) + "-" + element.slice(4, 8)
        if (!isNaN(new Date(element))) {
            finalResult.push(element);
        }

    });

    console.log('finalResult', finalResult);



}

getDateFromString('sdfsojdfs sdoisjdfsidf sdoifsdf sdofishdfosd 12312021 sldjflskjdf 12331996sdfsdf ')