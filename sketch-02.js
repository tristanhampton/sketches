const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [1080, 1080]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'red';

    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.01;
    const h = height * 0.1;
    let x, y;

    const num = 20;
    const radius = width * 0.3;

    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      // shape start: Vertical Lines
      context.save();
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(random.range(0.1, 1), random.range(0.2, 1));

      context.beginPath();
      context.rect(-w * 0.5, -h * random.range(0, 0.5), w, h);
      context.fill();
      context.restore();
      // shape end

      //shape start: Arcs
      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);

      context.lineWidth = random.range(0.8, 10);
      context.beginPath();
      context.arc(0, 45, random.range(radius * 0.7, radius * 1.3), slice * random.range(1, -8), slice * random.range(1, 5));
      context.stroke();
      context.restore();
      // shape end
    }

  };
};

canvasSketch(sketch, settings);