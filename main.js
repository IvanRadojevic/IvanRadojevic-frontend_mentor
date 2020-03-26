//dinamicly add finished project as cards
{
    const cardList = document.querySelector(".card-list");
    const projectArr = [
        ["four-card-feature-section-master", 'HTML,CSS'],
        ["base-apparel-coming-soon-master", 'HTML,CSS,JS']
    ]

    projectArr.forEach((project, index) => {
        const projectPath = `/${project[0]}/index.html`;
        const card = document.createElement('li');
        card.classList.add('card');
        card.setAttribute('data-tech', project[1]);
        cardList.appendChild(card);

        const link = document.createElement('a');
        link.classList.add('link')
        link.href = projectPath;

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
        link.appendChild(imgContainer);

        const img = document.createElement('div');
        img.classList.add('bg-img');
        img.style.backgroundImage = `url(${project[0]}/design/desktop-design.jpg)`
        imgContainer.appendChild(img);

        const text = document.createElement('h2');
        text.innerText = `#${index+1} ${makeTitleCards(project[0])}`

        link.appendChild(text);
        card.appendChild(link);
    });

    function makeTitleCards(name) {
        return name.split('-')
            .map(word => word[0]
                .toUpperCase() + word.substr(1))
            .join(' ');
    }
}

{
    // change theme
    const checkBox = document.querySelector('.switch');
    const input = document.querySelector('#changeColor')
    checkBox.addEventListener('click', changeTheme)
    const themeWhite = ['white', '#242424', '#f6f6f6'];
    const themeBlack = ['black', '#f6f6f6', '#242424'];

    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', JSON.stringify(themeWhite));
        document.documentElement.style.setProperty(`--color-gray-1`, themeWhite[1]);
        document.documentElement.style.setProperty(`--color-gray-2`, themeWhite[2]);
    }

    if (!JSON.parse(localStorage.getItem('theme'))[0].includes('white')) {
        input.checked = true;
        document.documentElement.style.setProperty(`--color-gray-1`, themeBlack[1]);
        document.documentElement.style.setProperty(`--color-gray-2`, themeBlack[2]);
    }


    function changeTheme() {
        if (input.checked === false) {
            localStorage.setItem('theme', JSON.stringify(themeBlack));
            document.documentElement.style.setProperty(`--color-gray-1`, `${themeBlack[1]}`);
            document.documentElement.style.setProperty(`--color-gray-2`, `${themeBlack[2]}`);

        } else {
            localStorage.setItem('theme', JSON.stringify(themeWhite));
            document.documentElement.style.setProperty(`--color-gray-1`, `${themeWhite[1]}`);
            document.documentElement.style.setProperty(`--color-gray-2`, `${themeWhite[2]}`);

        }
        input.checked = !input.checked

    }
}