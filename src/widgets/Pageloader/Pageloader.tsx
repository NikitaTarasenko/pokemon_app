import { Loader } from 'shared/ui/Loader/Loader';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Pageloader.module.scss';

interface PageloaderProps {
    className?: string;
}
export const Pageloader = ({ className }: PageloaderProps) => (
    <div className={classNames(styles.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
