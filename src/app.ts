interface Message {
    body: string,
}

interface EmailMessage extends Message {
    subject: string,
    email: string,
    priority: boolean
}


function sendMessage(message: EmailMessage){
    // send message
    console.log(message)
}

let message = {
    body: "This is body",
    subject: "This is subject",
    email: "example@gmail.com",
    priority: true,
    otherProperty: "I can..."
};

sendMessage(message);