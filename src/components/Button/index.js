import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    rounded = false,
    text = false,
    disabled = false,
    small = false,
    medium = false,
    large = false,
    className,
    children,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    //khai báo định dạng nút
    let Comp = 'button';
    //truyền props của nút nhận từ function và từ nơi gọi nút
    const props = {
        onClick,
        ...passProps,
    };

    //Gỡ sự kiện nếu nút disabled (CÁI NÀY CẦN XEM LẠI VÌ CHƯA HIỂU)
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    //logic nếu có thuộc tính nào đó
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        // className dùng để nhận diện classNames{cx('...')} được truyền vào từ Header file
        [className]: className,
        primary,
        outline,
        rounded,
        text,
        small,
        medium,
        large,
        disabled,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
