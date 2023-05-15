function 数値入力(数値) {
    document.電卓.結果.value += 数値;
}

function 計算() {
    document.電卓.結果.value = eval(document.電卓.結果.value);
}

function クリア() {
    document.電卓.結果.value = "";
}