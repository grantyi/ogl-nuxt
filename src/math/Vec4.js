import * as Vec4Func from './functions/Vec4Func.js';

export class Vec4 {
    constructor(x = 0, y = x, z = x, w = x) {
        this.data = [x, y, z, w];
        return this;
    }

    get x() {
        return this.data[0];
    }

    get y() {
        return this.data[1];
    }

    get z() {
        return this.data[2];
    }

    get w() {
        return this.data[3];
    }

    set x(v) {
        this.data[0] = v;
    }

    set y(v) {
        this.data[1] = v;
    }

    set z(v) {
        this.data[2] = v;
    }

    set w(v) {
        this.data[3] = v;
    }

    set(x, y, z, w) {
        if (x.length) return this.copy(x);
        Vec4Func.set(this.data, x, y, z, w);
        return this;
    }

    copy(v) {
        Vec4Func.copy(this.data, v);
        return this;
    }

    normalize() {
        Vec4Func.normalize(this.data, this.data);
        return this;
    }

    fromArray(a, o = 0) {
        this.data[0] = a[o];
        this.data[1] = a[o + 1];
        this.data[2] = a[o + 2];
        this.data[3] = a[o + 3];
        return this;
    }

    toArray(a = [], o = 0) {
        a[o] = this.data[0];
        a[o + 1] = this.data[1];
        a[o + 2] = this.data[2];
        a[o + 3] = this.data[3];
        return a;
    }
}
