import React from 'react'
import { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { layDanhSachLoaiNguoiDungAction, layNguoiDungEdit, updateUserByAdminAction } from '../../../redux/actions/QuanLyNguoiDungAction';
import _ from 'lodash';
import { Button, Input, Select } from 'antd';
import { UserOutlined, KeyOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { history } from '../../../App';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { GROUPID } from '../../../utils/Setting/config';

function EditUser(props) {

    const dispatch = useDispatch();

    const tuKhoa = props.match.params.id;
    useEffect(() => {
        dispatch(layNguoiDungEdit(tuKhoa));
    }, []);

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        setFieldValue,
        handleSubmit,
    } = props;

    useEffect(() => {
        dispatch(layDanhSachLoaiNguoiDungAction());
    }, []);

    const { danhSachLoaiNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer);

    const optionsLoaiNguoiDung = _.map(danhSachLoaiNguoiDung, (item) => {
        return {
            value: item.maLoaiNguoiDung,
            label: item.tenLoai,
        }
    });

    const handleChangeValue = (value) => {
        setFieldValue("maLoaiNguoiDung", value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div style={{ fontWeight: 600 }} className='text-lg'>Edit Người Dùng</div>
            <div className='mt-5 grid grid-cols-2 gap-8'>
                <div>
                    <div >
                        <div className='ml-2 text-base'>Tài Khoản</div>
                        <Input disabled value={values.taiKhoan} onChange={handleChange} name='taiKhoan' className='mt-2' size="large" placeholder="Nhập Tài Khoản" prefix={<UserOutlined />} />
                        <div className='text-red-600'>{errors.taiKhoan}</div>
                    </div>
                    <div className='mt-5'>
                        <div className='ml-2 text-base'>Mật Khẩu</div>
                        <Input value={values.matKhau} onChange={handleChange} name='matKhau' className='mt-2' size="large" placeholder="Nhập Mật Khẩu" prefix={<KeyOutlined />} />
                        <div className='text-red-600'>{errors.matKhau}</div>
                    </div>
                    <div className='mt-5'>
                        <div className='ml-2 text-base'>Họ Tên</div>
                        <Input value={values.hoTen} onChange={handleChange} name='hoTen' className='mt-2' size="large" placeholder="Nhập Họ Tên" prefix={<UserOutlined />} />
                        <div className='text-red-600'>{errors.hoTen}</div>
                    </div>
                </div>
                <div>
                    <div >
                        <div className='ml-2 text-base'>Email</div>
                        <Input value={values.email} onChange={handleChange} name='email' className='mt-2' size="large" placeholder="Nhập Email" prefix={<MailOutlined />} />
                        <div className='text-red-600'>{errors.email}</div>
                    </div>
                    <div className='mt-5'>
                        <div className='ml-2 text-base'>Số Điện Thoại</div>
                        <Input value={values.soDt} onChange={handleChange} name='soDt' className='mt-2' size="large" placeholder="Nhập Số Điện Thoại" prefix={<PhoneOutlined />} />
                        <div className='text-red-600'>{errors.soDt}</div>
                    </div>
                    <div className='mt-5'>
                        <div className='ml-2 text-base'>Loại Người Dùng</div>
                        <Select
                            className='mt-2'
                            defaultValue={values.maLoaiNguoiDung}
                            value={values.maLoaiNguoiDung}
                            style={{
                                width: "100%",
                            }}
                            size='large'
                            onChange={handleChangeValue}
                            options={optionsLoaiNguoiDung}
                        />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-10 mt-5'>
                <div className='col-span-2'>
                    <Button onClick={() => {
                        history.push('/admin')
                    }} size='large' type='link'>{'<< Trở Lại'}</Button>
                </div>
                <div className='col-span-6'></div>
                <div className='col-span-2 text-right'>
                    <Button htmlType='submit' style={{ backgroundColor: "#1677ff" }} size='large' type='primary'>Save</Button>
                </div>
            </div>
        </form>
    )
}


const EditUserWithFormik = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => {
        return {
            taiKhoan: props.userEdit?.taiKhoan,
            matKhau: props.userEdit?.matKhau,
            email: props.userEdit?.email,
            soDt: props.userEdit?.soDt,
            maNhom: GROUPID,
            hoTen: props.userEdit?.hoTen,
            maLoaiNguoiDung: props.userEdit?.maLoaiNguoiDung,
        }
    },

    validationSchema: Yup.object().shape({
        email: Yup.string().email('invalid Email').required('Required'),
        matKhau: Yup.string().min(6, 'password must have min 6 character!').max(32, 'password must have max 32 character'),
        soDt: Yup.number()
            .typeError("That doesn't look like a phone number")
            .positive("A phone number can't start with a minus")
            .integer("A phone number can't include a decimal point")
            .min(10, "phone must have min 10 number")
            .required('A phone number is required'),
        hoTen: Yup.string()
            .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
            .max(40)
            .required("Required"),
        taiKhoan: Yup.string()
            .min(1, "Mininum 1 characters")
            .max(15, "Maximum 15 characters")
            .required("You must enter a username"),
    }),

    handleSubmit: (values, { props, setSubmitting }) => {
        if (window.confirm("Bạn có chắc chắn cập nhật người dùng không ?")) {
            props.dispatch(updateUserByAdminAction(values));
        }
    },

    displayName: 'editUser',
})(EditUser);

const mapStateToProps = (state) => {
    return {
        userEdit: state.QuanLyNguoiDungReducer.userEdit,
    }
}

export default connect(mapStateToProps)(EditUserWithFormik);
