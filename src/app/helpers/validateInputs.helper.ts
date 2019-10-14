export const valideteEmail= (email:string)=>{
let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(String(email).toLowerCase());
}

export const validetePassword = (password: string)=>{
let reLow = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/ ;
let reHigh = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
if(reHigh.test(String(password).toLowerCase())) return "high" 
if(reLow.test(String(password).toLowerCase())) return "low" 
 else return false
}

export const valideteName= (name:string)=>{
    let re = /^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]{4,}$/;
    return name? re.test(String(name).toLowerCase()): false;
    }