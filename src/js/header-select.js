let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectOption = document.querySelectorAll('.select__option');
    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle);
    });
    selectOption.forEach(item => {
        item.addEventListener('click', selectChoose);
    });
    function selectToggle() {
        this.parentElement.classList.toggle('select-is-active');
    }
    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.textContent = text;
        select.classList.remove('select-is-active');
    }
}
select();