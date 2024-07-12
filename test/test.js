const Ghasedak = require('../src/ghasedak');

// Mock the API key for testing purposes
const apiKey = 'b7ee4xxxxxxxxxxxxxxxxxxxxxx'; // Replace with your actual API key
const receptor = '09xxxxxxxxx';
const line = '123xxxxxx';
// Create an instance of the Ghasedak class
let ghasedak = new Ghasedak(apiKey);

async function main() {
  console.log('Ghasedak API Tests');

  console.log('\nGet Account Information');
  const accountInfoResponse = await ghasedak.getAccountInformation();
  console.log('Input: None');
  console.log('Output:', accountInfoResponse);

  console.log('\nCheck SMS Status');
  const smsStatusQuery = { type: 1, ids: ['2366799', '2366805'] }; // Replace with valid query parameters
  console.log('Input:', smsStatusQuery);
  const smsStatusResponse = await ghasedak.checkSmsStatus(smsStatusQuery);
  console.log('Output:', smsStatusResponse);

  console.log('\nGet Received SMSes');
  const receivedSmsQuery = { line_number: line, is_read: true }; // Replace with valid query parameters
  console.log('Input:', receivedSmsQuery);
  const receivedSmsResponse = await ghasedak.getReceivedSmses(receivedSmsQuery);
  console.log('Output:', receivedSmsResponse);

  console.log('\nGet Received SMSes Paging');
  const receivedSmsPagingQuery = { line_number: line, is_read: true, page_size: 10, page_number: 1 }; // Replace with valid query parameters
  console.log('Input:', receivedSmsPagingQuery);
  const receivedSmsPagingResponse = await ghasedak.getReceivedSmsesPaging(receivedSmsPagingQuery);
  console.log('Output:', receivedSmsPagingResponse);

  console.log('\nGet OTP Template Parameters');
  const templateName = 'newOTP'; // Replace with the desired template name
  console.log('Input:', templateName);
  const otpTemplateResponse = await ghasedak.getOtpTemplateParameters(templateName);
  console.log('Output:', otpTemplateResponse);

  console.log('\nSend Simple SMS');
  const simpleSmsCommand = { 
    sendDate: "2024-07-09T18:45:09.902Z",
    message: 'Test message',
    receptor: receptor,
    linenumber: line,
    clientReferenceId: "strsisdsdsng",
    udh: false
  }; // Replace with valid command parameters
  console.log('Input:', simpleSmsCommand);
  const simpleSmsResponse = await ghasedak.sendSimpleSms(simpleSmsCommand);
  console.log('Output:', simpleSmsResponse);

  console.log('\nSend Bulk SMS');
  const bulkSmsCommand = {
    message: 'Bulk message',
    receptors: [receptor, '09xxxxxxxxx'],
    linenumber: line
  }; // Replace with valid command parameters
  console.log('Input:', bulkSmsCommand);
  const bulkSmsResponse = await ghasedak.sendBulkSms(bulkSmsCommand);
  console.log('Output:', bulkSmsResponse);

  console.log('\nSend Pair to Pair SMS');
  const pairToPairSmsCommand = {
    items: [
      {
        lineNumber: line,
        receptor: receptor,
        message: 'Pair to pair message',
        clientReferenceId: 'your_unique_reference_id',
        sendDate: '2024-07-09T19:29:59.279Z'
      }
    ],
    udh: true
  };
  
  console.log('Input:', pairToPairSmsCommand);
  try {
    const pairToPairSmsResponse = await ghasedak.sendPairToPairSms(pairToPairSmsCommand);
    console.log('Output:', pairToPairSmsResponse);
  } catch (error) {
    console.error('Error sending SMS:', error.message);
  }
  

  console.log('\nSend OTP SMS Old');
  const otpSmsNewCommand = {
    // sendDate: '2024-07-09T19:49:44.539Z',  // Replace with actual send date
    receptors: [
      {
        mobile: receptor,  // Assuming 'receptor' holds the mobile number
        clientReferenceId: 'strsdsding'  // Replace 'string' with actual client reference ID
      }
    ],
    templateName: 'oldOTP',  // Replace with actual template name
    param1: 'string',  // Replace 'string' with actual parameter values
    param2: 'string',
    // param3: 'string',
    // param4: 'string',
    // param5: 'string',
    // param6: 'string',
    // param7: 'string',
    // param8: 'string',
    // param9: 'string',
    // param10: 'string',
    isVoice: false,  // Specify if it's a voice message (if applicable)
    udh: false
  };
  
  console.log('Input:', otpSmsNewCommand);
  
  try {
    const otpSmsNewResponse = await ghasedak.sendOtpSmsOld(otpSmsNewCommand);  // Adjust function name as per your API
    console.log('Output:', otpSmsNewResponse);
  } catch (error) {
    console.error('Error sending OTP SMS:', error.message);
  }
  

  console.log('\nSend OTP SMS');
  const otpSmsCommand = {
    sendDate: '2024-07-09T20:03:25.658Z',  // Replace with actual send date
    receptors: [
      {
        mobile: receptor,  // Replace with actual recipient's mobile number
        clientReferenceId: 'dfsdfsding'  // Replace with actual client reference ID
      }
    ],
    templateName: 'newOTP',  // Replace with actual template name
    inputs: [
      {
        param: 'Code',  // Replace with actual parameter name
        value: 'strisng'  // Replace with actual value for 'Code'
      },
      {
        param: 'Name',  // Replace with actual parameter name
        value: 'strddisng'  // Replace with actual value for 'Name'
      }
    ],
    udh: true
  };
  
  console.log('Input:', otpSmsCommand);
  
  try {
    const otpSmsResponse = await ghasedak.sendOtpSms(otpSmsCommand);  // Adjust function name as per your API
    console.log('Output:', otpSmsResponse);
  } catch (error) {
    console.error('Error sending OTP SMS:', error.message);
  }
  
}

main().catch(console.error);
