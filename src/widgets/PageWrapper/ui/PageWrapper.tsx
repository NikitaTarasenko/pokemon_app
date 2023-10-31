import { MutableRefObject, ReactNode, memo, useRef } from 'react';
import cls from './PageWrapper.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';

import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';

interface PageWrapperProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}
export const PageWrapper = memo((props: PageWrapperProps) => {
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    return (
        <main
            ref={wrapperRef}
            className={classNames(cls.PageWrapper, {}, [className])}
        >
            {children}

            <div ref={triggerRef} className={cls.trigger} />
        </main>
    );
});
