export class ArrayProxy{
  constructor(...args) {
    this.data = [...args];
    this.onChange = ()=>{};
    this.proxy = new Proxy(this, {
      get: (target, prop, receiver)=>{
          try{ 
            if (typeof target[prop] === 'function') {
              return new Proxy(target[prop], {
                apply(applyTarget, thisArg, args) {
                  try{
                    return Reflect.apply(applyTarget, thisArg, args);
                  }catch(e) {
                  }
                }
              });
            }
            else if(target[prop]) {
              return Reflect.get(target, prop, receiver)
            }else if(['x','y','z','w'].includes(prop)){
              if(target.data.length <= 4) {
                switch(prop) {
                  case 'x' : {
                    return target.data[0]
                    break;
                  }
                  case 'y' : {
                    return target.data[1]
                    break;
                  }
                  case 'z' : {
                    return target.data[2]
                    break;
                  }
                  case 'w' : {
                    return target.data[3]
                    break;
                  }
                }
              }else{
                switch(prop) {
                  case 'x' : {
                    return target.data[12]
                    break;
                  }
                  case 'y' : {
                    return target.data[13]
                    break;
                  }
                  case 'z' : {
                    return target.data[14]
                    break;
                  }
                  case 'w' : {
                    return target.data[15]
                    break;
                  }
                }
              }
            }
            else if(!isNaN(+prop)) {
              return target.data[+prop]
            }
            else{
              return Reflect.get(target, prop, receiver)
            }
          }catch(e) {
            console.log(e)
          }
        
      },
      set: (target, prop, value)=>{
        try{ 
          if(['x','y','z','w'].includes(prop)){
            if(target.data.length <= 4) {
              switch(prop) {
                case 'x' : {
                  target.data[0] = value;
                  break;
                }
                case 'y' : {
                  target.data[1] = value;
                  break;
                }
                case 'z' : {
                  target.data[2] = value;
                  break;
                }
                case 'w' : {
                  target.data[3] = value;
                  break;
                }
              }
            }else{
              switch(prop) {
                case 'x' : {
                  target.data[12] = value;
                  break;
                }
                case 'y' : {
                  target.data[13] = value;
                  break;
                }
                case 'z' : {
                  target.data[14] = value;
                  break;
                }
                case 'w' : {
                  target.data[15] = value;
                  break;
                }
              }
            }
            target.onChange();
          } else if(target[prop] || isNaN(+prop)){
            Reflect.set(target, prop, value)
          }else {
            target.data[+prop] = value;
          }
          return true;
        }catch(e) {
          console.log(e)
        }
    }
    });
    return this.proxy;
  }
}