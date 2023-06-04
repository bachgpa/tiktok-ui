import classNames from 'classnames/bind';
import Header from './Header';
import SideBar from './SideBar';
import styles from './HeaderOnly.module.scss';

const cx = classNames.bind(styles);

function HeaderOnly({ children }) {
    return <div></div>;
}

export default HeaderOnly;
