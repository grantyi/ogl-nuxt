import * as ColorFunc from './functions/ColorFunc.js';

// Color stored as an array of RGB decimal values (between 0 > 1)
// Constructor and set method accept following formats:
// new Color() - Empty (defaults to black)
// new Color([0.2, 0.4, 1.0]) - Decimal Array (or another Color instance)
// new Color(0.7, 0.0, 0.1) - Decimal RGB values
// new Color('#ff0000') - Hex string
// new Color('#ccc') - Short-hand Hex string
// new Color(0x4f27e8) - Number
// new Color('red') - Color name string (short list in ColorFunc.js)

export class Color {
    constructor(color) {
        if (Array.isArray(color)) {
            this.data = color;
        }else{
            this.data = new Array(...ColorFunc.parseColor(...arguments))
        }
    }

    get r() {
        return this.data[0];
    }

    get g() {
        return this.data[1];
    }

    get b() {
        return this.data[2];
    }

    set r(v) {
        this.data[0] = v;
    }

    set g(v) {
        this.data[1] = v;
    }

    set b(v) {
        this.data[2] = v;
    }

    set(color) {
        if (Array.isArray(color)) return this.copy(color);
        return this.copy(ColorFunc.parseColor(...arguments));
    }

    copy(v) {
        this.data[0] = v[0];
        this.data[1] = v[1];
        this.data[2] = v[2];
        return this;
    }
}
