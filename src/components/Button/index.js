import classNames from "classnames/bind";
import styles from './Button.module.scss'

const cx = classNames.bind(styles)


function button({to , href, children , Onclick}) {
    let Comp = 'button';

    const classes = cx('wrapper')
    
    return ( 
        <Comp>
            <span>{children}</span>
        </Comp>
     );
}

export default button;