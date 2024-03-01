import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import SearchForm from './SearchForm'
import ThemeToggle from './ThemeToggle'
import Gallery from './Gallery'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </QueryClientProvider>
  )
}

export default App
