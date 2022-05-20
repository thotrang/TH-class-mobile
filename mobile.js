class Mobile {
    status; //trạng thái
    battery; //pin
    draft; //hộp thư nháp
    inbox; //hộp thư đến
    sentbox; //hộp thư gửi
    constructor(status, battery, draft, inbox, sentbox) {
        this.sentbox=sentbox;
        this.battery=battery;
        this.draft=draft;
        this.inbox=inbox;
        this.status=status;
    }
    checkStatus(){
        return this.status;
    }
    chargeBattery(){
        this.battery++;
    }
    textMessage(message){
        this.draft.push(message);
    }
    sentMessage(mobile2){
        let message=this.draft.pop();
        mobile2.inbox.push(message);
        this.sentbox.push(message);
    }
    reciveMessage(mobile2){
        let message=mobile2.draft.pop(); 
        this.inbox.push(message);
        mobile2.sentbox.push(message);
    }
    
}
// trạng thái
// sạc pin
// hộp nháp
// sent
// inxbox
