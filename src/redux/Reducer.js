
const initialdata = {
    name:'singam'
}

const basicReducer = (storedata=initialdata, action)=>{
    if(action.type==='name'){
        return{
            name:action.username
        }
    }
    return storedata
}

export default basicReducer