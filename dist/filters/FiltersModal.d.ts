/// <reference types="react" />
interface FiltersModalProps {
    state: boolean;
    anchorEl: HTMLButtonElement | null;
    handleClose(event: Event | React.SyntheticEvent): void;
    filters: Filter[];
}
declare function FiltersModalComponent({ state, anchorEl, handleClose, filters, }: FiltersModalProps): JSX.Element;
export declare const FiltersModal: import("react").MemoExoticComponent<typeof FiltersModalComponent>;
export {};
//# sourceMappingURL=FiltersModal.d.ts.map