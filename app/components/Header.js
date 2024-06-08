'use client'

import { usePathname } from "next/navigation";
import Button from "./Button";
import Logo from "./Logo";

const Header = () => {
  let tutorialPicked = ''
  let failurePicked = ''
  let instructionPicked = ''

  const pathname = usePathname();

  if (pathname.startsWith('/tutorial')) {tutorialPicked = 'picked'}
  if (pathname.startsWith('/failure')) {failurePicked = 'picked'}
  if (pathname.startsWith('/instruction')) {instructionPicked = 'picked'}

  return (
    <header>
      <Logo />
      <nav>
        <Button title={'Учебник'} type={`header ${tutorialPicked}`} nav={'/tutorial'} imgPath={"/tutorial.svg"} />
        <Button title={'Неисправности'} type={`header ${failurePicked}`} nav={'/failure'} imgPath={"/failure.svg"} />
        <Button title={'Инструкции'} type={`header ${instructionPicked}`} nav={'/instruction'} imgPath={"/instruction.svg"} />
      </nav>
      <Button title={'Войти'} type={'default'} nav={'/auth/login'} imgPath={"/login.svg"} />
    </header>
  )
}

export default Header