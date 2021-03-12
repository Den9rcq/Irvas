const images = () => {
    const imgPopup = document.createElement('div'),
        bigImage = document.createElement('img'),
        workSection = document.querySelector('.works');

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);
    imgPopup.style.cssText = `
            justify-content: center;
            align-items: center;
            display: none;
      `;
    imgPopup.appendChild(bigImage);
    bigImage.style.maxwidth = '50%';
    bigImage.style.maxheight = '50%';

    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target && e.target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = e.target.parentNode.getAttribute('href'); //^ Получаем ссылку большой картинки
            bigImage.setAttribute('src', path); //^ Устанавливаем атрибуту src путь
        }

        if (e.target && e.target.matches('div.popup')) { //^ matches - совпадает
            imgPopup.style.display = 'none';
        }
    });

};

export default images;