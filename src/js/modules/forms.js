import checkNumInputs from "./checkNumInputs";

const forms = (state) => {
    const forms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        message = {
            loading: 'Загрузка...',
            success: 'Спасибо! Скоро мы с вами свяжемся',
            failure: 'Что-то пошло не так...',
        };

    // Функция получения данных с сервера
    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: "POST",
            body: data,
        });

        return await res.text();
    };

    // Функция очищения инпутов
    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    // Функция запрета ввода букв и пробелов в инпут для телефона
    checkNumInputs('input[name="user_phone"]');

    // Создание оповещения пользователя при отправке формы и отмена перезагрузки страницы
    forms.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === 'end') {
                for (let key in state) { //^ Перебираем ключи в modalState
                    formData.append(key, state[key]); //^ Добавляем ключ и значение в форму из modalState
                }
            }

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => {
                    statusMessage.textContent = message.failure;
                })
                .finally(() => {
                    // item.reset(); //^ Очистка формы
                    clearInputs(); //^ Очистка формы
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 6000);
                });
        });
    });
};

export default forms;