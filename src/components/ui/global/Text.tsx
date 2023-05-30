interface Props {
  children: string
  cssx?: string
}

export const Text = ({ children, cssx = '' }: Props) => {
  return <p className={`${cssx}`}>{children}</p>
}
