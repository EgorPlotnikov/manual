'use server'
import { revalidatePath } from 'next/cache'
import GetHostname from './GetHostname';

export async function FetchData(type, request) {
    let hostname = GetHostname();

    if (type === 'getPosts') {
        revalidatePath(`${hostname}/api/getPosts?type=${request}`);
        let responce = await fetch(`${hostname}/api/getPosts?type=${request}`, );
        return responce.json();
    } else if (type === 'getPost') {
        try {
            revalidatePath(`${hostname}/api/getPost?id=${request}`);
            let responce = await fetch(`${hostname}/api/getPost?id=${request}`);
            return responce.json();
        } catch (error) {
            console.log("No post can be found by this id ", error);
        }
    } else if (type === 'getPostAndLinks') {
        try {
            revalidatePath(`${hostname}/api/getPostAndLinks?request=${request}`);
            let responce = await fetch(`${hostname}/api/getPostAndLinks?request=${request}`);
            return responce.json();
        } catch (error) {
            console.log("No post can be found by this id ", error);
        }
    }

    return ;
  }