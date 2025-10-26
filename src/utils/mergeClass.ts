export function mergeClass(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount)
}

export function formatDate(date: Date | string, format = 'short'): string {
  const d = new Date(date)
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: format as 'short' | 'medium' | 'long' | 'full'
  }).format(d)
}