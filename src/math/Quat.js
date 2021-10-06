import { ArrayProxy } from './ArrayProxy';
import * as QuatFunc from './functions/QuatFunc.js';

export class Quat extends ArrayProxy {
    constructor(x = 0, y = 0, z = 0, w = 1) {
        super(x,y,z,w)
        return this.proxy;
    }

    identity() {
        QuatFunc.identity(this.proxy);
        this.onChange();
        return this.proxy;
    }

    set(x, y, z, w) {
        if (x.length) return this.proxy.copy(x);
        QuatFunc.set(this.proxy, x, y, z, w);
        this.onChange();
        return this.proxy;
    }

    rotateX(a) {
        QuatFunc.rotateX(this.proxy, this.proxy, a);
        this.onChange();
        return this.proxy;
    }

    rotateY(a) {
        QuatFunc.rotateY(this.proxy, this.proxy, a);
        this.onChange();
        return this.proxy;
    }

    rotateZ(a) {
        QuatFunc.rotateZ(this.proxy, this.proxy, a);
        this.onChange();
        return this.proxy;
    }

    inverse(q = this) {
        QuatFunc.invert(this.proxy, q);
        this.onChange();
        return this.proxy;
    }

    conjugate(q = this) {
        QuatFunc.conjugate(this.proxy, q);
        this.onChange();
        return this.proxy;
    }

    copy(q) {
        QuatFunc.copy(this.proxy, q);
        this.onChange();
        return this.proxy;
    }

    normalize(q = this) {
        QuatFunc.normalize(this.proxy, q);
        this.onChange();
        return this.proxy;
    }

    multiply(qA, qB) {
        if (qB) {
            QuatFunc.multiply(this.proxy, qA, qB);
        } else {
            QuatFunc.multiply(this.proxy, this.proxy, qA);
        }
        this.onChange();
        return this.proxy;
    }

    dot(v) {
        return QuatFunc.dot(this.proxy, v);
    }

    fromMatrix3(matrix3) {
        QuatFunc.fromMat3(this.proxy, matrix3);
        this.onChange();
        return this.proxy;
    }

    fromEuler(euler) {
        QuatFunc.fromEuler(this.proxy, euler, euler.order);
        return this.proxy;
    }

    fromAxisAngle(axis, a) {
        QuatFunc.setAxisAngle(this.proxy, axis, a);
        return this.proxy;
    }

    slerp(q, t) {
        QuatFunc.slerp(this.proxy, this.proxy, q, t);
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
