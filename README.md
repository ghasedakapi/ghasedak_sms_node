
# Ghasedak SMS Node.js Package

Node.js package for interacting with the Ghasedak SMS API.

## Installation

Install the package using npm:

```bash
npm install ghasedaksms
```

## Usage

### Import and Initialize

```javascript
const Ghasedak = require('ghasedaksms');

// Replace with your actual API key
const apiKey = 'b7ee4xxxxxxxxxxxxxxxxxxxxxx'; 
const receptor = '09xxxxxxxxx';
const line = '123xxxxxx';

// Create an instance of the Ghasedak class
let ghasedak = new Ghasedak(apiKey);
```

### Example Usage

Below are some examples of how to use the Ghasedak API:

#### Get Account Information

```javascript
async function getAccountInformation() {
  const accountInfoResponse = await ghasedak.getAccountInformation();
  console.log('Get Account Information');
  console.log('Output:', accountInfoResponse);
}
```

#### Check SMS Status

```javascript
async function checkSmsStatus() {
  const smsStatusQuery = { type: 1, ids: ['2366799', '2366805'] }; // Replace with valid query parameters
  const smsStatusResponse = await ghasedak.checkSmsStatus(smsStatusQuery);
  console.log('Check SMS Status');
  console.log('Input:', smsStatusQuery);
  console.log('Output:', smsStatusResponse);
}
```

#### Get Received SMSes

```javascript
async function getReceivedSmses() {
  const receivedSmsQuery = { line_number: line, is_read: true }; // Replace with valid query parameters
  const receivedSmsResponse = await ghasedak.getReceivedSmses(receivedSmsQuery);
  console.log('Get Received SMSes');
  console.log('Input:', receivedSmsQuery);
  console.log('Output:', receivedSmsResponse);
}
```

#### Get Received SMSes with Paging

```javascript
async function getReceivedSmsesPaging() {
  const receivedSmsPagingQuery = { line_number: line, is_read: true, page_size: 10, page_number: 1 }; // Replace with valid query parameters
  const receivedSmsPagingResponse = await ghasedak.getReceivedSmsesPaging(receivedSmsPagingQuery);
  console.log('Get Received SMSes Paging');
  console.log('Input:', receivedSmsPagingQuery);
  console.log('Output:', receivedSmsPagingResponse);
}
```

#### Get OTP Template Parameters

```javascript
async function getOtpTemplateParameters() {
  const templateName = 'newOTP'; // Replace with the desired template name
  const otpTemplateResponse = await ghasedak.getOtpTemplateParameters(templateName);
  console.log('Get OTP Template Parameters');
  console.log('Input:', templateName);
  console.log('Output:', otpTemplateResponse);
}
```

#### Send Simple SMS

```javascript
async function sendSimpleSms() {
  const simpleSmsCommand = { 
    sendDate: "2024-07-09T18:45:09.902Z",
    message: 'Test message',
    receptor: receptor,
    linenumber: line,
    clientReferenceId: "strsisdsdsng",
    udh: false
  }; // Replace with valid command parameters
  const simpleSmsResponse = await ghasedak.sendSimpleSms(simpleSmsCommand);
  console.log('Send Simple SMS');
  console.log('Input:', simpleSmsCommand);
  console.log('Output:', simpleSmsResponse);
}
```

#### Send Bulk SMS

```javascript
async function sendBulkSms() {
  const bulkSmsCommand = {
    message: 'Bulk message',
    receptors: [receptor, '09xxxxxxxxx'],
    linenumber: line
  }; // Replace with valid command parameters
  const bulkSmsResponse = await ghasedak.sendBulkSms(bulkSmsCommand);
  console.log('Send Bulk SMS');
  console.log('Input:', bulkSmsCommand);
  console.log('Output:', bulkSmsResponse);
}
```

#### Send Pair to Pair SMS

```javascript
async function sendPairToPairSms() {
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
  
  try {
    const pairToPairSmsResponse = await ghasedak.sendPairToPairSms(pairToPairSmsCommand);
    console.log('Send Pair to Pair SMS');
    console.log('Input:', pairToPairSmsCommand);
    console.log('Output:', pairToPairSmsResponse);
  } catch (error) {
    console.error('Error sending SMS:', error.message);
  }
}
```

#### Send OTP SMS (old)

```javascript
async function sendOtpSmsOld() {
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
  
  try {
    const otpSmsNewResponse = await ghasedak.sendOtpSmsOld(otpSmsNewCommand);  // Adjust function name as per your API
    console.log('Send OTP SMS New');
    console.log('Input:', otpSmsNewCommand);
    console.log('Output:', otpSmsNewResponse);
  } catch (error) {
    console.error('Error sending OTP SMS:', error.message);
  }
}
```

#### Send OTP SMS (New)

```javascript
async function sendOtpSms() {
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
  
  try {
    const otpSmsResponse = await ghasedak.sendOtpSms(otpSmsCommand);  // Adjust function name as per your API
    console.log('Send OTP SMS');
    console.log('Input:', otpSmsCommand);
    console.log('Output:', otpSmsResponse);
  } catch (error) {
    console.error('Error sending OTP SMS:', error.message);
  }
}
```

### Run All Tests

You can run all the above functions in sequence:

```javascript
async function main() {
  await getAccountInformation();
  await checkSmsStatus();
  await getReceivedSmses();
  await getReceivedSmsesPaging();
  await getOtpTemplateParameters();
  await sendSimpleSms();
  await sendBulkSms();
  await sendPairToPairSms();
  await sendOtpSmsNew();
  await sendOtpSms();
}

main().catch(console.error);
```

## License

This project is licensed under the MIT License.
