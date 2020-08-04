export default function({store, redirect,route}){
    console.log(store.getters['authenticated']);
    console.log(store.getters['user']);
    var isAuth = store.getters['authenticated'];
    var isRoleData = store.getters['user'];
    var isRole = isRoleData != null ? isRoleData.user_id : '';
    var isPath  = route.path;
    var isDashboard = isPath.includes("dashboard");
    var isPanel = isPath.includes("panel");
    // if(isAuth){
    if(isDashboard && isRole == 0){
        redirect('/dashboard/error')
        console.log('second')
        return false;
    } 
    
    if(isPanel && isRole == 3){
        redirect('/panel/error')
        console.log('third')
        return false
    }
// }else{
//     redirect('/')
// }

}