const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    // Функция скрытия контента и убирание активного класса
    function hideTabsContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    // Функция показа отдельного таба и его контента
    function showTabContent(i = 0) {
        content[i].style.display = 'block';
        tab[i].classList.add(activeClass);
    }

    hideTabsContent();
    showTabContent();

    // Обработчик события клика
    header.addEventListener('click', (e) => {
        if (e.target && //^ Цель
            e.target.classList.contains(tabSelector.replace(/\./, '')) || //^ Совпадение класса при клике на элемент
            e.target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) { //^ или его родителя
            tab.forEach((item, i) => { //^ Перебор табов
                if (e.target == item || e.target.parentNode == item) { //^ Если цель или родитель цели совпадает с табом
                    hideTabsContent();
                    showTabContent(i);
                }
            });
        }
    });
};

export default tabs;