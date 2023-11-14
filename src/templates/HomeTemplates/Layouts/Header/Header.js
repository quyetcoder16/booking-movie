import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { history } from '../../../../App'

import { useTranslation } from 'react-i18next';
import { Select } from 'antd';
import { useSelector } from 'react-redux';
import { TOKEN, USER_LOGIN } from '../../../../utils/Setting/config';
import _ from 'lodash';
const { Option } = Select;

export default function Header(props) {

    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);

    const { t, i18n } = useTranslation();


    const handleChange = (value) => {
        i18n.changeLanguage(value)
    }

    const renderLogin = () => {
        if (_.isEmpty(userLogin)) {
            return <Fragment>
                <button className="self-center px-8 py-3 rounded" onClick={() => {
                    history.push('/login');
                }}>{t('signin')}</button>
                <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900" >{t("signup")}</button>

            </Fragment>
        }


        return <Fragment> <button onClick={() => {
            history.push('/profile')
        }} className="self-center px-8 py-3 rounded">Hello ! {userLogin.taiKhoan}</button>
            <button onClick={() => {
                localStorage.removeItem(USER_LOGIN);
                localStorage.removeItem(TOKEN);
                history.push('/home');
                window.location.reload();
            }} className="text-yellow-500 mr-5">Đăng xuất</button>
        </Fragment>
    }

    return (
        <header className="p-4 dark:bg-gray-800 dark:text-gray-100 bg-opacity-40 bg-black text-white fixed w-full z-50">
            <div className="container flex justify-between h-16 mx-auto">
                <NavLink to="/home" rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                    <img src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" alt="cyberlearn.vn" />
                </NavLink>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <NavLink to="/home" rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1  dark:text-violet-400 dark:border-violet-400" activeClassName='border-b-2 dark:border-transparent'>Home</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/contact" rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 " activeClassName='border-b-2 dark:border-transparent'>Contact</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/news" rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 " activeClassName='border-b-2 dark:border-transparent'>News</NavLink>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    {renderLogin()}
                    <Select defaultValue="en" style={{ width: 100 }} onChange={handleChange}>
                        <Option value="en">Eng</Option>
                        <Option value="chi">Chi</Option>

                        <Option value="vi">Vi</Option>
                    </Select>
                </div>

                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>

    )
}
