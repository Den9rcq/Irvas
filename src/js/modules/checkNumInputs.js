const checkNumInputs = (selector) => {
    const numInput = document.querySelectorAll(selector);
    numInput.forEach((item) => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[a-zA-Zа-яА-Я ]/, '');
        });
    });
};

export default checkNumInputs;