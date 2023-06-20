import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    small,
    medium,
    large,
    children,
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
    //logic nếu có thuộc tính nào đó
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        medium,
        large,
    });

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
