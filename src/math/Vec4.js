import * as Vec4Func from './functions/Vec4Func.js';
import {ArrayProxy} from './ArrayProxy'

export class Vec4 extends ArrayProxy {
    constructor(x = 0, y = x, z = x, w = x) {
        return super(x,y,z,w)
    }

    set(x, y, z, w) {
        if (x.length) return this.proxy.copy(x);
        Vec4Func.set(this.proxy, x, y, z, w);
        return this.proxy;
    }

    copy(v) {
        Vec4Func.copy(this.proxy, v);
        return this.proxy;
    }

    normalize() {
        Vec4Func.normalize(this.proxy, this.proxy);
        return this.proxy;
    }

    fromArray(a, o = 0) {
        this.proxy[0] = a[o];
        this.proxy[1] = a[o + 1];
        this.proxy[2] = a[o + 2];
        this.proxy[3] = a[o + 3];
        return this.proxy;
    }

    toArray(a = [], o = 0) {
        a[o] = this.proxy[0];
        a[o + 1] = this.proxy[1];
        a[o + 2] = this.proxy[2];
        a[o + 3] = this.proxy[3];
        return a;
    }
}
