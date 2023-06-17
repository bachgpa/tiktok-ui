import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {

    const imagePath = require('../../assets/images/image-69-hinh-anh-gai-xinh-trung-quoc-hot-girl-trung-quoc-dep-nhat-2022-166432725338362.jpg')

    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src={imagePath}
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <div className={cx('username')}>nguyenvana</div>
            </div>
        </div>
    );
}

export default AccountItem;
