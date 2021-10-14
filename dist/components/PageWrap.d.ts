/// <reference types="react" />
interface PageWrapProps {
    tabs?: boolean;
    children: React.ReactChild | React.ReactFragment | React.ReactPortal;
}
declare function PageWrapComponent({ children, tabs }: PageWrapProps): JSX.Element;
export declare const PageWrap: typeof PageWrapComponent & {
    displayName: string;
};
export {};
//# sourceMappingURL=PageWrap.d.ts.map