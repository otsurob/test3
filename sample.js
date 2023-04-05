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
        // result_arr.concat(fruit_arr);
        var result_arr = fruit_arr;
    }

    if(drink.checked){
        // result_arr.concat(drink_arr);
        var result_arr = drink_arr;
    }

    if(main.checked){
        // result_arr.concat(main_arr);
        var result_arr = main_arr;
    }

    // document.getElementById("answer").textContent = result_arr;
    for (var i = 0; i<result_arr.length; i++){
        var disp_list = document.createElement("li");
        disp_list.textContent = result_arr[i];
        document.getElementById("answer").appendChild(disp_list);
    }
    document.getElementById("number").textContent = result_arr.length

}