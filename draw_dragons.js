var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

function drawDragon(directions) {
    var step = 10;

    ctx.beginPath();
    ctx.moveTo(250, 250);

    var orientation = "N"
    var posX = 250;
    var posY = 250 - step;
    ctx.lineTo(posX, posY);
    
    for (bit of directions) {
        if (bit == "1") {
            if (orientation == "N") {
                posX -= step;
                orientation = "W";
            } else if (orientation == "E") {
                posY -= step;
                orientation = "N";
            } else if (orientation == "S") {
                posX += step;
                orientation = "E";
            } else if (orientation == "W") {
                posY += step;
                orientation = "S";
            }
        } else {
            if (orientation == "N") {
                posX += step;
                orientation = "E";
            } else if (orientation == "E") {
                posY += step;
                orientation = "S";
            } else if (orientation == "S") {
                posX -= step;
                orientation = "W";
            } else if (orientation == "W") {
                posY -= step;
                orientation = "N";
            }
        }

        console.log(bit, orientation, posX, posY);
        ctx.lineTo(posX, posY);
    }

    ctx.stroke();
}
