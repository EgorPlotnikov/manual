'use server'
import { revalidatePath } from 'next/cache'

export async function AddData(heading, author, text) {
    let today = new Date();
    let date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    const votefor = "0";
    const voteagainst = "0";

    if (heading && author && text && date) {
      try {
        revalidatePath(`http://localhost:3000/api/addPost`);
        let response = await fetch("http://localhost:3000/api/addPost", {
          method: "POST",
          body: JSON.stringify({
            heading, 
            author, 
            votefor,
            voteagainst,
            text, 
            date,
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