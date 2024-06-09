'use server'

import { revalidatePath } from 'next/cache'
import GetHostname from './GetHostname';

async function AddLink(iid, fid) {
    let hostname = GetHostname();

    revalidatePath(`${hostname}/api/addLink?iid=${iid}&fid=${fid}`);
    let responce = await fetch(`${hostname}/api/addLink?iid=${iid}&fid=${fid}`);
    return responce.json();
}

export default AddLink