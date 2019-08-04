import axios from 'axios';

export const API_URL = 'http://localhost:8080/api/finance';
const REPORT_URL = `${API_URL}/report/`;
const RECORDS_URL = `${API_URL}/records/`;
const GET = 'get';

async function getReport() {
  const { data } = await axios({
    headers: { 'Access-Control-Allow-Origin': '*' },
    method: GET,
    url: REPORT_URL,
  });

  return data;
}

async function getRecords() {
  const { data } = await axios({
    headers: { 'Access-Control-Allow-Origin': '*' },
    method: GET,
    url: RECORDS_URL,
  });

  return data;
}

export { getReport, getRecords };
