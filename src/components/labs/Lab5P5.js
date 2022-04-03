import React from "react";
import Sketch from "react-p5";

    // cookie
	let x = 100;
	let y = 100;
    let x2 = 200;
    let y2 = 200
    // chocolate chip
    let x3 = 15;
	let y3 = 15;
    let x4 = 20;
	let y4 = 20;

    
    let canvasX = 600;
    let canvasY = 600;
    let moveLeft = false;
    let moveUp = false;
    let color1 = '#D4B37F';
    let color2 = '#612D08';
    

const Lab5P5 = (props) => {
	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		p5.createCanvas(canvasX, canvasY).parent(canvasParentRef);
	};
    
	const draw = (p5) => {
		p5.background(0);
        p5.noStroke();
        p5.fill(color1);
		p5.ellipse(x, y, x2, y2);

        p5.fill(color2);
		p5.ellipse(30+x, y, x3, y3);
		p5.ellipse(80+x, 20 + y, x3, y3);
		p5.ellipse(-50+x, 50 + y, x4, y4);
		p5.ellipse(-40+x, -70 + y, x3, y3);
		p5.ellipse(-90+x, y, x3, y3);
		p5.ellipse(x, 80 + y, x3, y3);
		p5.ellipse(5+x, 10 + y, x3, y3);
		p5.ellipse(30+x, -40 + y, x4, y4);
		p5.ellipse(65+x, 60 + y, x3, y3);
		p5.ellipse(50+x, 15 + y, x3, y3);
		p5.ellipse(30+x, -80 + y, x3, y3);
		p5.ellipse(85+x, -15 + y, x3, y3);
		p5.ellipse(-30+x, -10 + y, x3, y3);
		p5.ellipse(-50 + x, 10 + y, x4, y4);
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
            // y--;
        }
        else
        {
            x += 2;
            // y++;
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
        p5.text('Bouncing Cookie', canvasX/2-125, canvasY-10);

	};

	return <Sketch setup={setup} draw={draw} />;
};





export default Lab5P5;