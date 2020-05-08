export default function returnDate(){
    let dNow = new Date();
    let localDate = `${dNow.getFullYear()}-${(dNow.getMonth()+1)}-${dNow.getDate()}`
    return localDate
}