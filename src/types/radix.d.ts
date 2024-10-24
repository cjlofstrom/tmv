import '@radix-ui/react-dialog'
import '@radix-ui/react-alert-dialog'

declare module '@radix-ui/react-dialog' {
  interface DialogPortalProps {
    className?: string
  }
}

declare module '@radix-ui/react-alert-dialog' {
  interface AlertDialogPortalProps {
    className?: string
  }
}