import * as Vec3Func from './functions/Vec3Func.js';
import {ArrayProxy} from './ArrayProxy'

export class Vec3 extends ArrayProxy{
    constructor(x = 0, y = x, z = x) {
        return super(x,y,z)
    }
    
    set(x, y = x, z = x) {
        if (x.length) return this.proxy.copy(x);
        Vec3Func.set(this.data, x, y, z);
        return this.proxy;
    }

    copy(v) {
        Vec3Func.copy(this.proxy, v);
        return this.proxy;
    }

    add(va, vb) {
        if (vb) Vec3Func.add(this.proxy, va, vb);
        else Vec3Func.add(this.proxy, this.proxy, va);
        return this.proxy;
    }

    sub(va, vb) {
        if (vb) Vec3Func.subtract(this.proxy, va, vb);
        else Vec3Func.subtract(this.proxy, this.proxy, va);
        return this.proxy;
    }

    multiply(v) {
        if (v.length) Vec3Func.multiply(this.proxy, this.proxy, v);
        else Vec3Func.scale(this.proxy, this.proxy, v);
        return this.proxy;
    }

    divide(v) {
        if (v.length) Vec3Func.divide(this.proxy, this.proxy, v);
        else Vec3Func.scale(this.proxy, this.proxy, 1 / v);
        return this.proxy;
    }

    inverse(v = this) {
        Vec3Func.inverse(this.proxy, v);
        return this.proxy;
    }

    // Can't use 'length' as Array.prototype uses it
    len() {
        return Vec3Func.length(this);
    }

    distance(v) {
        if (v) return Vec3Func.distance(this.proxy, v);
        else return Vec3Func.length(this);
    }

    squaredLen() {
        return Vec3Func.squaredLength(this);
    }

    squaredDistance(v) {
        if (v) return Vec3Func.squaredDistance(this.proxy, v);
        else return Vec3Func.squaredLength(this);
    }

    negate(v = this) {
        Vec3Func.negate(this.proxy, v);
        return this.proxy;
    }

    cross(va, vb) {
        if (vb) Vec3Func.cross(this.proxy, va, vb);
        else Vec3Func.cross(this.proxy, this.proxy, va);
        return this.proxy;
    }

    scale(v) {
        Vec3Func.scale(this.proxy, this.proxy, v);
        return this.proxy;
    }

    normalize() {
        Vec3Func.normalize(this.proxy, this);
        return this.proxy;
    }

    dot(v) {
        return Vec3Func.dot(this.proxy, v);
    }

    equals(v) {
        return Vec3Func.exactEquals(this.proxy, v);
    }

    applyMatrix4(mat4) {
        Vec3Func.transformMat4(this.proxy, this.proxy, mat4);
        return this.proxy;
    }

    scaleRotateMatrix4(mat4) {
        Vec3Func.scaleRotateMat4(this.proxy, this.proxy, mat4);
        return this.proxy;
    }

    applyQuaternion(q) {
        Vec3Func.transformQuat(this.proxy, this.proxy, q);
        return this.proxy;
    }

    angle(v) {
        return Vec3Func.angle(this.proxy, v);
    }

    lerp(v, t) {
        Vec3Func.lerp(this.proxy, this.proxy, v, t);
        return this.proxy;
    }

    clone() {
        return new Vec3(this[0], this[1], this[2]);
    }

    fromArray(a, o = 0) {
        this[0] = a[o];
        this[1] = a[o + 1];
        this[2] = a[o + 2];
        return this.proxy;
    }

    toArray(a = [], o = 0) {
        a[o] = this[0];
        a[o + 1] = this[1];
        a[o + 2] = this[2];
        return a;
    }

    transformDirection(mat4) {
        const x = this[0];
        const y = this[1];
        const z = this[2];

        this[0] = mat4[0] * x + mat4[4] * y + mat4[8] * z;
        this[1] = mat4[1] * x + mat4[5] * y + mat4[9] * z;
        this[2] = mat4[2] * x + mat4[6] * y + mat4[10] * z;

        return this.normalize();
    }
}
