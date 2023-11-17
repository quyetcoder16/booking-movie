import { Button, Input, Space, Table } from 'antd'
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachNguoiDungAction, layDanhSachNguoiDungTheoTuKhoaAction } from '../../../redux/actions/QuanLyNguoiDungAction';
import { useState } from 'react';
import { history } from '../../../App';

export default function Dashboard() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(layDanhSachNguoiDungAction(""));
    }, []);

    const { danhSachNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer);

    const [dataSearch, setDataSearch] = useState('');

    const columns = [
        {
            title: "Tài Khoản",
            dataIndex: 'taiKhoan',
            sorter: (a, b) => a.taiKhoan.length - b.taiKhoan.length,
        },
        {
            title: 'Mật Khẩu',
            dataIndex: "matKhau",
        },
        {
            title: 'Họ Tên',
            dataIndex: 'hoTen',
            sorter: (a, b) => a.hoTen.length - b.hoTen.length,
        },
        {
            title: "Email",
            dataIndex: 'email',
        },
        {
            title: "Số Điện Thoại",
            dataIndex: 'soDt',
        },
        {
            title: "Action",
            dataIndex: '',
            key: 'x',
            render: () => {
                return (<>
                    <Button style={{ backgroundColor: "#1677ff" }} type='primary'>
                        <i class="fa-solid fa-pen-to-square"></i>
                    </Button>
                    <Button className='ml-2' danger>
                        <i class="fa-solid fa-trash"></i>
                    </Button>
                </>)
            }
        }
    ];

    return (
        <div>
            <Button onClick={() => {
                history.push('/admin/adduser');
            }} size='large' type='default'>
                <i class="fa-solid fa-user-plus"></i>
                <span>Thêm Người Dùng </span>
            </Button>
            <Space.Compact style={{ width: '100%' }} className='my-5'>
                <Input onChange={(e) => {
                    setDataSearch(e.target.value);
                }} placeholder='Nhập tài khoản hoặc họ tên người dùng' />
                <Button onClick={() => {
                    if (dataSearch.trim() !== '') {
                        dispatch(layDanhSachNguoiDungTheoTuKhoaAction(dataSearch));
                    }
                }} style={{ backgroundColor: "#1677ff" }} type="primary"><i class="fa-solid fa-magnifying-glass"></i><span className='ml-1'>Search</span></Button>
            </Space.Compact>

            <Table columns={columns} dataSource={danhSachNguoiDung} />;
        </div>
    )
}