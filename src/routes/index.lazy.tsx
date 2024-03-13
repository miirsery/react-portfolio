import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>

      <p>123</p>
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
    </div>
  )
}