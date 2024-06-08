'use server'
import { revalidatePath } from 'next/cache'

export async function FetchData(type, request) {
    if (type === 'getPosts') {
        revalidatePath(`http://localhost:3000/api/getPosts?type=${request}`);
        let responce = await fetch(`http://localhost:3000/api/getPosts?type=${request}`, );
        return responce.json();
    } else if (type === 'getPost') {
        try {
            revalidatePath(`http://localhost:3000/api/getPost?id=${request}`);
            let responce = await fetch(`http://localhost:3000/api/getPost?id=${request}`);
            return responce.json();
        } catch (error) {
            console.log("No post can be found by this id ", error);
        }
    } else if (type === 'getPostAndLinks') {
        try {
            revalidatePath(`http://localhost:3000/api/getPostAndLinks?request=${request}`);
            let responce = await fetch(`http://localhost:3000/api/getPostAndLinks?request=${request}`);
            return responce.json();
        } catch (error) {
            console.log("No post can be found by this id ", error);
        }
    }

    return ;
  }