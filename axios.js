// GET Request
function getTodos(){
   axios({
    method: 'get', 
    url: 'https://www.codecademy.com/article/what-is-crud'
   })
   .then(res => console.log(res))
   .catch(err => console.error(err));
}