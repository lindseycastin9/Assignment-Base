async function windowActions() {
    console.log('window loaded');
    const form = document.querySelector('.userform');
    const search = document.querySelector('#zip');
    const targetList = document.querySelector('.target-list');

    const request = await fetch('/api');
    const data = await request.json();
    console.table(data);

    search.addEventListener('input', (event) => {
        event.preventDefault();
        console.log('input detected', search.value);
        const display = data.filter((record) => record.zip === search.value);
        const appendBox = document.createElement('div');
        display.forEach((row) => {

            const appendItem = document.createElement("li");
            appendItem.innerText = row.name;
            targetList.append(appendItem);
            const appendItem1 = document.createElement("li");
            appendItem1.innerText = row.city;
            targetList.append(appendItem1);
            const appendItem2 = document.createElement("li");
            appendItem2.innerText = row.zip;
            targetList.append(appendItem2);
        });
        console.log('input', event.target.value);
    });

}
window.onload = windowActions;