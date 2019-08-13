interface EmailMessage {
    body: string,
    subject: string,
    email: string,
    priority: boolean
}


function sendMessage(message: EmailMessage){
    // send message
    console.log(message)
}

let message: EmailMessage = {
    body: "This is body",
    subject: "This is subject",
    email: "example@gmail.com",
    priority: true
};

sendMessage(message);