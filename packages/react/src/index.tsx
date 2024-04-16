import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  borderRadius: '$sm',
  padding: '$4',
})

export function App() {
  return <Button>Button</Button>
}
