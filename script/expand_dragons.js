function expandDragon() {
    var input = document.getElementById("dragon_id");
    var display = document.getElementById("dragon_body");

    input = document.getElementById("dragon_id");
    signiture = input.value;

    var dragon = "";

    for (bit of signiture) {
        var len = dragon.length - 1;  
        dragon += bit;
        for (var i = len; i >= 0; i--) {
            if (dragon[i] == "1") {
                dragon += "0";
            } else {
                dragon += "1";
            }
        }
    }

    display = document.getElementById("dragon_body");
    display.innerHTML = dragon;

    return dragon;
}
