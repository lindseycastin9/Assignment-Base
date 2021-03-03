async function windowActions() {
    console.log('window loaded');
    const form = document.querySelector('.userform');
    const search = document.querySelector('#zip');

    const request = await fetch('/api');
    const data = await request.json();

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        console.log('submit fired');
        const dislpay = data.filter((record) => record.city === search.value);

        console.table(data.data);

    })
    search.addEventListener('input', (event) => {
        console.log('input', event.target)
    })
    window.onload = windowActions;

    console.log(data)
}
