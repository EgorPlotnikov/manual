'use server'

import { revalidatePath } from 'next/cache'

async function AddLink(iid, fid) {
    revalidatePath(`http://localhost:3000/api/addLink?iid=${iid}&fid=${fid}`);
    let responce = await fetch(`http://localhost:3000/api/addLink?iid=${iid}&fid=${fid}`);
    return responce.json();
}

export default AddLink