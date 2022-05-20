let iphone = new Mobile(true, 50, [], [], []);
let samsung = new Mobile(true, 70, [], [], []);
let enter = '</br>';
if (iphone.checkStatus()){
    document.write("điện thoại bật" + enter);
}
else{
    document.write("điện thoại tắt" + enter);
} 
document.write("Pin trước khi sạc " + iphone.battery + enter);
iphone.chargeBattery()
document.write("pin sau khi sạc " + iphone.battery + enter);

iphone.textMessage('hello bạn');
iphone.textMessage('Mình tên là Tuân');
document.write(iphone.draft+enter);

iphone.sentMessage(samsung);
document.write(iphone.draft+enter);
document.write(iphone.sentbox+enter);
document.write(samsung.inbox+enter);