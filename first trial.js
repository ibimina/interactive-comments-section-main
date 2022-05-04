
const ner = async ()=>{

try {
    let response = await fetch('data.json')
    //console.log(response)
    if (response.status!==200) {
        throw new Error('cant fetch')
    }
    let inf0 = await response.json()
   // console.log(inf0)
   return inf0
} catch (error) {
   console.log('error')
 }

};
