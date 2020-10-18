import Storage from "web-storage-cache"

//实例化
const localStorage=new Storage()

//写入
export function setLocalStorage(key,value){
    return localStorage.set(key,value)
}
//获取值
export function getLocalStorage(key){
    return localStorage.get(key)
}
//删除一个值
export function removeLocalStorage(key){
    return localStorage.delete(key)
}

//全部清除！！！
export function clearLocalStorage(){
    return localStorage.clear()
}

//下面是自定义方法
//保存登录状态
export function saveLoginStatus(key,value){
    //调用上面的方法
    setLocalStorage(key,value)
}

//获取保存的登录状态
export function getLoginStatus(key){
    
    return getLocalStorage(key)
}