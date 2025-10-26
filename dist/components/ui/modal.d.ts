import * as React from "react";
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
}
declare const Modal: ({ isOpen, onClose, children, className }: ModalProps) => import("react/jsx-runtime").JSX.Element | null;
declare const ModalHeader: ({ children, className }: {
    children: React.ReactNode;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element;
declare const ModalTitle: ({ children, className }: {
    children: React.ReactNode;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element;
declare const ModalContent: ({ children, className }: {
    children: React.ReactNode;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element;
declare const ModalFooter: ({ children, className }: {
    children: React.ReactNode;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element;
export { Modal, ModalHeader, ModalTitle, ModalContent, ModalFooter };
