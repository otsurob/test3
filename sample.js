function display() {
    let target = document.getElementById("target").value;
    const original = target;

    var fruit = document.sampleform.food[0];
    var drink = document.sampleform.food[1];
    var main = document.sampleform.food[2];
    // var answer = document.getElementById("answer");
    // answer.innerHTML = ""

    var fruit_arr = ["リンゴ", "メロン", "イチゴ"];
    var drink_arr = ["コーラ", "お茶", "レモンティー"];
    var main_arr = ["米", "麺", "パン"];

    var result_arr = ["タピオカ"];


    if(fruit.checked){
        result_arr.concat(fruit_arr);
    }

    if(drink.checked){
        result_arr.concat(drink_arr);
    }

    if(main.checked){
        result_arr.concat(main_arr);
    }

    document.getElementById("answer").textContent = result_arr;
    document.getElementById("number").textContent = original

}