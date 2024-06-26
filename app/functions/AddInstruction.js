'use server'
import { revalidatePath } from 'next/cache'
import GetHostname from './GetHostname';

export async function AddData(heading, author, text, make, model) {
    let hostname = GetHostname();

    let today = new Date();
    let date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    let links = []
    let votefor = '0'
    let voteagainst = '0'

    if (heading && author && text && date && links && make && model) {
      try {
        revalidatePath(`${hostname}/api/addInstruction`);
        let response = await fetch(`${hostname}/api/addInstruction`, {
            method: "POST",
            body: JSON.stringify({
              heading, 
              author,
              text, 
              date,
              links,
              make,
              model,
              votefor,
              voteagainst,
            }),
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
          });
        response = await response.json();
        return 'ok'
      } catch (errorMessage) {return errorMessage;}
    } else {return "All fields are required";}
}