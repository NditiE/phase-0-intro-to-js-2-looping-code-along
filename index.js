function writeCards(names,eventName){
  const thankYouMessages = [];

  for(let i = 0;i < names.length;i++){
    const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    thankYouMessages.push(message);
  }

  return thankYouMessages;

}

function countDown(number){
  while(number >= 0){
    console.log(number);
    number --;
  }
}

const recipients = ["Charlie","Samip","Ali"];
const event = "birthday";
const messages = writeCards(recipients,event);

messages.forEach(message => {
  console.log(message);
  
});
