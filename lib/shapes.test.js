const { Circle, Square, Triangle } = require('./shapes');

describe('Shape rendering', () => {
    test('Circle renders correctly',() => {
        const circle = new Circle('shapeColor');
        expect(circle.render()).toBe(`<circle cx="50%" cy="50%" r="80" fill="${this.shapeColor}"></circle>`)
    });

    test('Square renders correctly',() => {
        const square = new Square('shapeColor');
        expect(square.render()).toBe(`<rect x="93.75" y="43.75" width="112.5" height="112.5" fill="${this.shapeColor}" />`)
    });

    test('Triangle renders correctly',() => {
        const triangle = new Triangle('shapeColor');
        expect(triangle.render()).toBe(`<polygon points="150, 43.75 206.25, 156.15 93.75, 156.15" fill="${this.shapeColor}" />`)
    });
});