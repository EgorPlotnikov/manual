import { headers } from 'next/headers';

function GetHostname() {
    const headersList = headers();
    let hostname = headersList.get('host')
    let full
    if (hostname == 'localhost:3000') {full = 'http://' + hostname}
    else {full = 'https://' + hostname}

    return full;
}

export default GetHostname