import classNames from "classnames/bind";
import Icon from "@/common/FontAwesomeIcon";
import { faHome, faUserGroup, faCompass } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

const cx = classNames.bind(styles);
function Sidebar() {
    return <div className={cx("wrapper")}>
        <ul className={cx("menu-list")}>
            <li className={cx("menu-item")}>
                <NavLink to="/" className={({ isActive, isPending }) =>
                        isPending ? cx("pending", 'menu-link', 'text') : isActive ? cx("active", 'menu-link', 'text') : ""
                    }>
                    <Icon icon={faHome} className={cx('icon')} />
                    <span>For You</span>
                </NavLink>
            </li>
            <li className={cx("menu-item")}>
                <Link to="/following" className={cx("menu-link", 'text')}>
                    <Icon icon={faUserGroup} className={cx('icon')} />
                    <span>Following</span>
                </Link>
            </li>
            <li className={cx("menu-item")}>
                <Link to="/explore" className={cx("menu-link", 'text')}>
                    <Icon icon={faCompass} className={cx('icon')} />
                    <span>Explore</span>
                </Link>
            </li>
        </ul>
        <hr/>
        <div className={cx("state-login")}>
            <div className={cx("menu-item not-login")}>
                <p>Login to followe creators, like videos, and view comments</p>
                <button className="btn btn-outline-danger w-100">Login</button>
            </div>
        </div>  
    </div>;
}

export default Sidebar;
