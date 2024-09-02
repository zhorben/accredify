import { UserMenu } from '../UserMenu/UserMenu'

export const Header: React.FC = () => {
  return (
    <header className="border-b border-border px-[2rem] py-[0.75rem]">
      <UserMenu className="ml-auto" />
    </header>
  )
}
