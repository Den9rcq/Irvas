const modals = () => {

    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);

        // Показ модального окна
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });

        // Закрытие модального окна на крестик
        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });

        // Закрытие модального окна на подложку
        modal.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });
    }

    // Вызов модального окна через время
    function showModalByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    showModalByTime('.popup', 60000);

};
export default modals;