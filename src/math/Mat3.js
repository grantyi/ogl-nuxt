import {ArrayProxy} from './ArrayProxy'
import * as Mat3Func from './functions/Mat3Func.js';

export class Mat3 extends ArrayProxy{
    constructor(m00 = 1, m01 = 0, m02 = 0, m10 = 0, m11 = 1, m12 = 0, m20 = 0, m21 = 0, m22 = 1) {
        return super(m00, m01, m02, m10, m11, m12, m20, m21, m22)
    }

    set(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
        if (m00.length) return this.proxy.copy(m00);
        Mat3Func.set(this.proxy, m00, m01, m02, m10, m11, m12, m20, m21, m22);
        return this.proxy
    }

    translate(v, m = this) {
        Mat3Func.translate(this.proxy, m, v);
        return this.proxy
    }

    rotate(v, m = this) {
        Mat3Func.rotate(this.proxy, m, v);
        return this.proxy
    }

    scale(v, m = this) {
        Mat3Func.scale(this.proxy, m, v);
        return this.proxy
    }

    multiply(ma, mb) {
        if (mb) {
            Mat3Func.multiply(this.proxy, ma, mb);
        } else {
            Mat3Func.multiply(this.proxy, this.proxy, ma);
        }
        return this.proxy
    }

    identity() {
        Mat3Func.identity(this);
        return this.proxy
    }

    copy(m) {
        Mat3Func.copy(this.proxy, m);
        return this.proxy
    }

    fromMatrix4(m) {
        Mat3Func.fromMat4(this.proxy, m);
        return this.proxy
    }

    fromQuaternion(q) {
        Mat3Func.fromQuat(this.proxy, q);
        return this.proxy
    }

    fromBasis(vec3a, vec3b, vec3c) {
        this.set(vec3a[0], vec3a[1], vec3a[2], vec3b[0], vec3b[1], vec3b[2], vec3c[0], vec3c[1], vec3c[2]);
        return this.proxy
    }

    inverse(m = this) {
        Mat3Func.invert(this.proxy, m);
        return this.proxy
    }

    getNormalMatrix(m) {
        Mat3Func.normalFromMat4(this.proxy, m);
        return this.proxy
    }
}
