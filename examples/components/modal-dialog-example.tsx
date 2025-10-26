import { useState } from "react"
import { 
  Modal, ModalHeader, ModalTitle, ModalContent, ModalFooter,
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter,
  AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, 
  AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction, AlertDialogCancel,
  Button
} from "../../src"

export function ModalDialogExample() {
  const [showModal, setShowModal] = useState(false)
  const [showDialog, setShowDialog] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  return (
    <div className="space-y-4 p-4">
      <h2 className="text-2xl font-bold">Modal & Dialog Examples</h2>
      
      <div className="flex gap-4">
        <Button onClick={() => setShowModal(true)}>Open Modal</Button>
        <Button onClick={() => setShowDialog(true)}>Open Dialog</Button>
        <Button onClick={() => setShowAlert(true)}>Open Alert</Button>
      </div>

      {/* Modal Example */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <ModalHeader>
          <ModalTitle>Modal Title</ModalTitle>
        </ModalHeader>
        <ModalContent>
          <p>This is a modal content. You can put any content here.</p>
        </ModalContent>
        <ModalFooter>
          <Button variant="outline" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button onClick={() => setShowModal(false)}>Save</Button>
        </ModalFooter>
      </Modal>

      {/* Dialog Example */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p>This is a dialog content with more structured layout.</p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDialog(false)}>Cancel</Button>
            <Button onClick={() => setShowDialog(false)}>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Alert Dialog Example */}
      <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => console.log("Deleted!")}>
              Delete Account
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}