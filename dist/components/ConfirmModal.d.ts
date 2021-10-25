/// <reference types="react" />
interface ConfirmModalProps {
    open: boolean;
    handleClose(): void;
    width?: number | string;
    image?: {
        width: number | string;
        height: number | string;
        src: string;
        alt: string;
    };
    title: string;
    description: string;
    confirmLabel: string;
    confirmLoading?: boolean;
    cancelLabel: string;
    onConfirm: () => void;
}
export declare function ConfirmModal(props: ConfirmModalProps): JSX.Element;
export {};
//# sourceMappingURL=ConfirmModal.d.ts.map