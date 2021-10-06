import * as EulerFunc from './functions/EulerFunc.js';
import { Mat4 } from './Mat4.js';
import {ArrayProxy} from './ArrayProxy'

const tmpMat4 = new Mat4();

export class Euler extends ArrayProxy{
    constructor(x = 0, y = x, z = x, order = 'YXZ') {
        super(x,y,z);
        this.order = order;
        return this.proxy;
    }

    get x() {
        return this.proxy[0];
    }

    get y() {
        return this.proxy[1];
    }

    get z() {
        return this.proxy[2];
    }

    set x(v) {
        this.proxy[0] = v;
        this.onChange();
    }

    set y(v) {
        this.proxy[1] = v;
        this.onChange();
    }

    set z(v) {
        this.proxy[2] = v;
        this.onChange();
    }

    set(x, y = x, z = x) {
        if (x.length) return this.proxy.copy(x);
        this.proxy[0] = x;
        this.proxy[1] = y;
        this.proxy[2] = z;
        this.onChange();
        return this.proxy;
    }

    copy(v) {
        this.proxy[0] = v[0];
        this.proxy[1] = v[1];
        this.proxy[2] = v[2];
        this.onChange();
        return this.proxy;
    }

    reorder(order) {
        this.order = order;
        this.onChange();
        return this.proxy;
    }

    fromRotationMatrix(m, order = this.order) {
        EulerFunc.fromRotationMatrix(this.proxy, m, order);
        return this.proxy;
    }

    fromQuaternion(q, order = this.order) {
        tmpMat4.fromQuaternion(q);
        return this.proxy.fromRotationMatrix(tmpMat4, order);
    }

    toArray(a = [], o = 0) {
        a[o] = this.proxy[0];
        a[o + 1] = this.proxy[1];
        a[o + 2] = this.proxy[2];
        return a;
    }
}
