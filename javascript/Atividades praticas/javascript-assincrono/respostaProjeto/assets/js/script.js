const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

const getCats = async() => {
    try {
        const data = await fetch(BASE_URL);

        const json = await data.json();
        
        return json.url;
    } catch (error) {
        console.log(error.message);
    }
};

const loadImg = async() => {
    const IMAGE = document.getElementById('image');
    console.log(getCats());
    IMAGE.src = await getCats();
};

loadImg();

const BUTTON = document.getElementById('button');
BUTTON.addEventListener('click', loadImg());
