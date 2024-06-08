'use client'
import { useRouter } from "next/navigation"
import "./button.css"

function Button({title, type, nav, imgPath, ...rootDOMAttributes}) {
  const router = useRouter();

  if (typeof nav == 'string') {
    return (
      <div className={`button-${type}`} onClick={() => {router.push(nav)}} >
          <p>{title}</p>
          <img src={imgPath} alt="icon" width={32} height={32} />
      </div>
    )
  }

  return (
    <div className={`button-${type}`} {...rootDOMAttributes} >
          <p>{title}</p>
      </div>
  )

}

export default Button