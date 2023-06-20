import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faPlus,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';

import Button from '../../../Button';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountItem from '../../../AccountItem';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 2]);
        }, 0);
    });
    return (
        <div className={cx(styles.wrapper)}>
            <div className={cx('inner')}>
                <div className={cx('logo')}></div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div
                            className={cx('search-result')}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <div className={cx('more-result')}>
                                    Xem tất cả kết quả cho " "
                                </div>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Tìm kiếm" spellCheck={false} />
                        <button className={cx('delete')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner}
                        />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />{' '}
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    {/* <div className={cx('upload')}>
                        <FontAwesomeIcon icon={faPlus} />
                        <p>Tải lên</p>
                    </div> */}
                    <Button outline>Login</Button>
                </div>
            </div>
        </div>
    );
}

export default Header;
