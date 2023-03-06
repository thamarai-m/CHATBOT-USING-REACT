import moment from "moment"
export const analyze = (text) => {
    if(text.includes('hi') || text.includes('hai') || text.includes('hello'))
       return 'Hi, How can i help you?'
    else if(text.includes('name'))
        return moment().format('ts')
    else if(text.includes('time'))
        return moment().format('h:mm:ss a')
    else if(text.includes('google link'))
        return 'https://www.google.com'
    else if(text.includes('interest'))
        return 'Bank interest rate is 8.7'
    else if(text.includes('thank you'))
        return  'thanks for Contacting me'
    return "I cant get you.Can you rephrase the message"
}