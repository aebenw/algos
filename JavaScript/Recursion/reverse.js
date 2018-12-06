// function reverse(str){
//     let newstr = ''
//     function helper(string){
//         if(string.length === 0 ){return}
//             newstr += string.slice(-1)
//             return helper(string.slice(0,-1))
//         }
//     helper(str)
//     return newstr
// }


function reverse(str){
    if(str.length === 0 ){return ""}
    return reverse(str.slice(1)) + str[0]
}

reverse("awesome")
