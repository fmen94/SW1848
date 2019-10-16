import * as moment from 'moment'

export const timestamp = ()=>{
    return moment().format("YYYY-MM-DDTHH:mm:ss")
}