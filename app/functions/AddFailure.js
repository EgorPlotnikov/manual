'use server'
import { revalidatePath } from 'next/cache'
import GetHostname from './GetHostname';

export async function AddData(heading, author, text, make, model) {
    let hostname = GetHostname();

    let today = new Date();
    let date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    let links = []

    if (heading && author && text && date && links && make && model) {
      try {
        revalidatePath(`${hostname}/api/addFailure`);
        let response = await fetch(`${hostname}/api/addFailure`, {
            method: "POST",
            body: JSON.stringify({
              heading, 
              author,
              text, 
              date,
              links,
              make,
              model,
            }),
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
          });
        response = await response.json();
        return 'ok'
      } catch (errorMessage) {
        return errorMessage;
      }
    } else {
      return "All fields are required";
    }
}