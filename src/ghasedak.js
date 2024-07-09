const axios = require('axios');
const Helper = require('./helper');
const { ResponseDto } = require('./dto');
class Ghasedak {
    constructor(apiKey) {
        this.url = 'https://gw.ghasedak.me/Rest/api/v1/WebService/';
        this.headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            // 'Accept': 'text/plain',
            'cache-control': 'no-cache',
            'ApiKey': apiKey
        };
    }

    async checkSmsStatus(query, cancellationToken = null) {
        const queryString = Helper.buildQueryString(`${this.url}CheckSmsStatus`, { Type: String(query.type) }, 'Ids', query.ids);
        try {
            const response = await axios.get(queryString, { headers: this.headers });
            return JSON.stringify(response.data, null, 2);
        } catch (error) {
            return new ResponseDto(false, error.message, error.response ? error.response.status : 500);
        }
    }

    async getAccountInformation(cancellationToken = null) {
        try {
            const response = await axios.get(`${this.url}GetAccountInformation`, { headers: this.headers });
            return JSON.stringify(response.data, null, 2);
        } catch (error) {
            return new ResponseDto(false, error.message, error.response ? error.response.status : 500);
        }
    }

    async getReceivedSmses(query, cancellationToken = null) {
        const queryString = Helper.buildQueryString(`${this.url}GetReceivedSmses`, { LineNumber: query.line_number, IsRead: String(query.is_read) });

        try {
            const response = await axios.get(queryString, { headers: this.headers, cancelToken: cancellationToken });

            return JSON.stringify(response.data, null, 2);
        } catch (error) {
            return new ResponseDto(false, error.message, error.response ? error.response.status : 500);
        }
    }

    async getReceivedSmsesPaging(query, cancellationToken = null) {
        const queryString = Helper.buildQueryString(`${this.url}GetReceivedSmsesPaging`, {
            LineNumber: query.line_number,
            IsRead: String(query.is_read),
            PageSize: String(query.page_size),
            PageNumber: String(query.page_number)
        });
        try {
            const response = await axios.get(queryString, { headers: this.headers });
            return JSON.stringify(response.data, null, 2);
        } catch (error) {
            return new ResponseDto(false, error.message, error.response ? error.response.status : 500);
        }
    }

    async getOtpTemplateParameters(templateName, cancellationToken = null) {
        const queryString = `${this.url}GetOtpTemplateParameters?TemplateName=${templateName}`;
        try {
            const response = await axios.get(queryString, { headers: this.headers, cancelToken: cancellationToken });
            return JSON.stringify(response.data, null, 2);
        } catch (error) {
            return new ResponseDto(false, error.message, error.response ? error.response.status : 500);
        }
    }

    async sendSimpleSms(command, cancellationToken = null) {
        try {
            const response = await axios.post(`${this.url}SendSingleSMS`, command, { headers: this.headers });
            return JSON.stringify(response.data, null, 2);
        } catch (error) {
            return new ResponseDto(false, error.message, error.response ? error.response.status : 500);
        }
    }

    async sendBulkSms(command, cancellationToken = null) {
        try {
            const response = await axios.post(`${this.url}SendBulkSMS`, command, { headers: this.headers });
            return JSON.stringify(response.data, null, 2);
        } catch (error) {
            return new ResponseDto(false, error.message, error.response ? error.response.status : 500);
        }
    }

    async sendPairToPairSms(command, cancellationToken = null) {
        try {
            const response = await axios.post(`${this.url}SendPairToPairSMS`, command, { headers: this.headers });
            return JSON.stringify(response.data, null, 2);
        } catch (error) {
            return new ResponseDto(false, error.message, error.response ? error.response.status : 500);
        }
    }

    async sendOtpSmsOld(command, cancellationToken = null) {
        try {
            const response = await axios.post(`${this.url}SendOtpSMSOld`, command, { headers: this.headers });
            return JSON.stringify(response.data, null, 2);
        } catch (error) {
            return new ResponseDto(false, error.message, error.response ? error.response.status : 500);
        }
    }

    async sendOtpSms(command, cancellationToken = null) {
        try {
            const response = await axios.post(`${this.url}SendOtpSMS`, command, { headers: this.headers });
            return JSON.stringify(response.data, null, 2);
        } catch (error) {
            return new ResponseDto(false, error.message, error.response ? error.response.status : 500);
        }
    }
}

module.exports = Ghasedak;
