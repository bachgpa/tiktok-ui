import classnames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classnames.bind(styles);

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>SideBar</h2>
        </aside>
    );
}

export default SideBar;
