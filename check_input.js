function ValidateForm() {
    // Эта функция занимается проверкой полей формы
    var x, y, i, valid = true;
    x = document.getElementsByClassName("bottom-panel");
    y = x[currentTab].getElementsByTagName("input");
    // Цикл, который проверяет каждое поле ввода на текущей вкладке:
    for (i = 0; i < y.length; i++) {
        // Если поле пустое...
        if (y[i].value == "") {
            // добавьте в поле "invalid" класс:
            y[i].className += " invalid";
            // и установите текущий допустимый статус в false:
            valid = false;
        }
    };

    export default ValidateForm;