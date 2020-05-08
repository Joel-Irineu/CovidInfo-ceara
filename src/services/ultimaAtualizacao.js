export default function daysDate(){
    let dNow = new Date();
    let day = dNow.getDate()
    let month = (dNow.getMonth()+1)
    let year = dNow.getFullYear()
    let localDate = `${day < 10 ? `0${day}`: day}/${month < 10 ? `0${month}`: month}/${year}`
    return localDate
}