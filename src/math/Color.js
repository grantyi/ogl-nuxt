import { ArrayProxy } from './ArrayProxy';
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

export class Color extends ArrayProxy{
    constructor(color) {
        if (Array.isArray(color)) {
            return super(...color);
        }else{
            return super(...ColorFunc.parseColor(...arguments))
        }
    }

    get r() {
        return this.proxy[0];
    }

    get g() {
        return this.proxy[1];
    }

    get b() {
        return this.proxy[2];
    }

    set r(v) {
        this.proxy[0] = v;
    }

    set g(v) {
        this.proxy[1] = v;
    }

    set b(v) {
        this.proxy[2] = v;
    }

    set(color) {
        if (Array.isArray(color)) return this.proxy.copy(color);
        return this.proxy.copy(ColorFunc.parseColor(...arguments));
    }

    copy(v) {
        this.proxy[0] = v[0];
        this.proxy[1] = v[1];
        this.proxy[2] = v[2];
        return this.proxy;
    }
}
