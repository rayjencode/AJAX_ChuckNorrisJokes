const mainBtn = document.getElementById('mainBtn');
const resultJoke = document.getElementById('result');
const image = document.getElementById('img');

const getUrl = `https://api.chucknorris.io/jokes/random`;

mainBtn.addEventListener('click', function () {
    getJokes(getUrl);
});

function getJokes(url) {
    const ajax = new XMLHttpRequest();
    ajax.open('GET', url, true);

    ajax.onload = function () {
        if (this.status === 200) {
            const data = JSON.parse(this.responseText);

            const { icon_url: img, value: joke } = data;

            resultJoke.textContent = joke;
            image.src = img;

            // console.log(data);
        } else {
            this.onerror();
        }
    };

    ajax.onerror = function () {
        console.log(`Not Found`);
    };

    ajax.send();
}
