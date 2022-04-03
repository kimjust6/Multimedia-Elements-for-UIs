import React from "react";
import Sketch from "react-p5";

    // cookie
	let x = 100;
	let y = 100;
    let x2 = 150;
    let y2 = 150


    
    let canvasX = 600;
    let canvasY = 600;
    let moveLeft = false;
    let moveUp = false;
    var image = null;
    
    
    const Lab5P51 = (props) => {
        const setup = (p5, canvasParentRef) => {
            // use parent to render the canvas in this ref
            // (without that p5 will render the canvas outside of your component)
            p5.createCanvas(canvasX, canvasY).parent(canvasParentRef);
            image = p5.loadImage('https://i.imgur.com/lwIysss.png');
            
	};
    
	const draw = (p5) => {
		// p5.background('#808080');
		// p5.background('#ffffff');
        p5.background(51);
        p5.fill('#76ec3f');
        p5.triangle(30+250, 75+250, 58+250, 20+250, 86+250, 75+250);
        p5.fill('#42d0e2');
        p5.square(30, 20+250, 55, 20);
        p5.fill('#e43dca');
        p5.square(520, 20+250, 55);

        p5.image(image, x-x2/2, y-y2/2, x2, y2);

		if ( x > canvasX-x2/2 )
        {
            moveLeft = true;
        }
        else if (x < x2/2 )
        {
            moveLeft = false;
        }
        if ( y > canvasY-y2/2)
        {
            moveUp = false;
        }
        else if (y < y2/2 )
        {
            moveUp = true;
        }


        if (moveLeft)
        {
            x -= 2.6;
        }
        else
        {
            x += 2;
        }

        if (moveUp)
        {
            y += 2.5;
        }
        else
        {
            y -= 2;
        }

        p5.fill('#ffffff');
        p5.textSize(32);
        p5.strokeWeight(4);
        p5.stroke(51);
        p5.text('Bouncing Cookie Image', canvasX/2-160, canvasY-10);
        
	};

	return <Sketch setup={setup} draw={draw} />;
};





export default Lab5P51;