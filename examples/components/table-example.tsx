import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, DataTable, Button } from "../../src"

const users = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User" },
]

const columns = [
  { id: "id", header: "ID", accessorKey: "id" as keyof typeof users[0] },
  { id: "name", header: "Name", accessorKey: "name" as keyof typeof users[0] },
  { id: "email", header: "Email", accessorKey: "email" as keyof typeof users[0] },
  { id: "role", header: "Role", accessorKey: "role" as keyof typeof users[0] },
  { 
    id: "actions", 
    header: "Actions", 
    cell: (user: typeof users[0]) => (
      <div className="flex gap-2">
        <Button size="sm" variant="outline">Edit</Button>
        <Button size="sm" variant="destructive">Delete</Button>
      </div>
    )
  }
]

export function TableExample() {
  return (
    <div className="space-y-6 p-4">
      <h2 className="text-2xl font-bold">Table Examples</h2>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Table</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Data Table with Search & Pagination</h3>
        <DataTable 
          columns={columns}
          data={users}
          searchKey="name"
          searchPlaceholder="Search users..."
        />
      </div>
    </div>
  )
}