import axios from "axios" //axios modulünü eklemiş olduk. baştan kurmak için terminale "npm i axios"




async function getData (number) { //basit bir fonksiyon belirledik. başına istendiği üzere async yazdık.
    //async yazmamızın sebebi verilen bilgileri ve işlemleri sırasıyla yapmasını istememiz.
    const user = await axios(`https://jsonplaceholder.typicode.com/users/${number}`)
    // user değişkenine verilen linki ekledik. linkin sonunda yer alan sayıyı biz vermek için number 
    //değişkenini yazdık ${} ile. 
    //axios ekleyerek bilgiyi çektik verilen linkten.
    //başına await ekleyerek verilen linkten gelen bilgiyi beklemesini söyledik.
    const post = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${number}`)
    //yukarıda yaptığımız işlemin aynısını uyguladık.
    let response = {
        ...user,
        ...post
    } //user değişkenini ve post değişkenini tek bir objeye atadık ve yazdırdık.
    console.log(response)
}
export {getData} // fonksiyonun başka bir sayfada kullanılabilmesi için export ettik.