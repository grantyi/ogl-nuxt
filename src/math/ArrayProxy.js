export class ArrayProxy{
  constructor(...args) {
    this.data = [...args];
    this.proxy = new Proxy(this, {
      get: (target, prop)=>{
          try{ 
            if(target[prop]) {
                return target[prop]
            }else if(typeof +prop === 'number') {
                  return target.data[+prop]
            }else{
            }
          }catch(e) {
            console.log(prop)
          }
        
      },
      set: (target, prop, value)=>{
        try{ 
          if(target[prop]) {
              target[prop] = value;
          }else{
              target.data[prop] = value;
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