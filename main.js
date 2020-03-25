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
    const checkBox = document.querySelector('.switch');
    const label = document.querySelector('.span-t');
    const input = document.querySelector('#changeColor')
    checkBox.addEventListener('click', changeTheme)



    function changeTheme() {
        console.dir(input);

        if (input.checked === false) {
            document.documentElement.style.setProperty(`--color-gray-1`, '#fff');
            document.documentElement.style.setProperty(`--color-gray-2`, '#242424');

        } else {
            document.documentElement.style.setProperty(`--color-gray-1`, '#242424');
            document.documentElement.style.setProperty(`--color-gray-2`, '#fff');

        }
        input.checked = !input.checked

    }
}