import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx(styles.wrapper)}>
            <div className={cx('inner')}>content of header</div>
        </div>
    );
}

export default Header;
