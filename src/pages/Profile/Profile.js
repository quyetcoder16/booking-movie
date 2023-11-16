import { Button, Input, Tabs } from 'antd';
import { UserOutlined, KeyOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { LayThongTinNguoiDungAction, capNhatThongTinNguoiDungAction } from '../../redux/actions/QuanLyNguoiDungAction';
import _, { functionsIn } from 'lodash';
import moment from 'moment';
import { withFormik } from 'formik';
import * as Yup from 'yup';

function Profile(props) {

    return (
        <div className='pt-24'  >
            <div className='p-10'>
                <Tabs defaultActiveKey="1" size='large'>
                    <Tabs.TabPane tab="Thông Tin Cá Nhân" key="1">
                        <ThongTinCaNhan {...props} />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Lịch Sử Dặt Vé" key="2">
                        <LichSuDatVe {...props} />
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </div>
    )
}

function ThongTinCaNhan(props) {

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        setValues,
    } = props;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(LayThongTinNguoiDungAction());
    }, []);

    const { thongTinNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer);

    const [disabled, setDisable] = useState(true);

    // console.log(values);


    return (<> {disabled ? <>

        <form onSubmit={handleSubmit} className='container grid grid-cols-2 gap-4'>
            <div>
                <div className='my-3 text-lg' >Email:</div>
                <Input disabled value={values.email} onChange={handleChange} size="large" placeholder="Email" name='email' prefix={<MailOutlined />} />

                <div className='my-3 text-lg'  >Họ Tên:</div>
                <Input disabled value={values.hoTen} onChange={handleChange} size="large" placeholder="name" name='hoTen' prefix={<UserOutlined />} />

                <div className='my-3 text-lg'  >Số điện thoại:</div>
                <Input disabled value={values.soDt} onChange={handleChange} size="large" placeholder="phone number" name='soDt' prefix={<PhoneOutlined />} />
            </div>
            <div>
                <div className='my-3 text-lg'  >Tài Khoản:</div>
                <Input disabled value={values.taiKhoan} onChange={handleChange} name='taiKhoan' size="large" placeholder="Tài Khoản" prefix={<UserOutlined />} />

                <div className='my-3 text-lg'  >Mật Khẩu:</div>
                <Input.Password disabled value={values.matKhau} onChange={handleChange} name='matKhau' size="large" placeholder="Mật Khẩu" prefix={<KeyOutlined />} />

                <Button className='w-full mt-12' type='default' size='large' onClick={() => {
                    setDisable(false);
                }} >Edit</Button>
            </div>
        </form>

    </> : <>
        <form onSubmit={handleSubmit} className='container grid grid-cols-2 gap-4'>
            <div>
                <div className='my-3 text-lg' >Email:</div>
                <Input value={values.email} onChange={handleChange} size="large" placeholder="Email" name='email' prefix={<MailOutlined />} />
                <div className='mt-2 text-red-500 text-base'>{errors.email}</div>
                <div className='my-3 text-lg'  >Họ Tên:</div>
                <Input value={values.hoTen} onChange={handleChange} size="large" placeholder="name" name='hoTen' prefix={<UserOutlined />} />
                <div className='mt-2 text-red-500 text-base'>{errors.hoTen}</div>
                <div className='my-3 text-lg'  >Số điện thoại:</div>
                <Input value={values.soDt} onChange={handleChange} size="large" placeholder="phone number" name='soDt' prefix={<PhoneOutlined />} />
                <div className='mt-2 text-red-500 text-base'>{errors.soDt}</div>
            </div>
            <div>
                <div className='my-3 text-lg'  >Tài Khoản:</div>
                <Input value={values.taiKhoan} onChange={handleChange} name='taiKhoan' size="large" placeholder="Tài Khoản" prefix={<UserOutlined />} />
                <div className='mt-2 text-red-500 text-base'>{errors.taiKhoan}</div>
                <div className='my-3 text-lg'  >Mật Khẩu:</div>
                <Input.Password value={values.matKhau} onChange={handleChange} name='matKhau' size="large" placeholder="Mật Khẩu" prefix={<KeyOutlined />} />
                <div className='mt-2 text-red-500 text-base'>{errors.matKhau}</div>
                <div className='grid grid-cols-2 gap-3 mt-12' >
                    <Button htmlType='submit
                ' className='w-full' type='default' size='large' onClick={() => {
                            setDisable(true);
                            handleSubmit();
                        }} >Update</Button>
                    <Button className='w-full' danger size='large' onClick={() => {
                        // console.log(lastValue);
                        setValues({
                            taiKhoan: thongTinNguoiDung.taiKhoan,
                            matKhau: thongTinNguoiDung.matKhau,
                            email: thongTinNguoiDung.email,
                            soDt: thongTinNguoiDung.soDT,
                            maNhom: thongTinNguoiDung.maNhom,
                            hoTen: thongTinNguoiDung.hoTen,
                            loaiNguoiDung: thongTinNguoiDung.loaiNguoiDung,
                        });
                        setDisable(true);

                    }}>Cancel</Button>
                </div>
            </div>
        </form>
    </>}

    </>)
}

function LichSuDatVe(props) {

    const dispatch = useDispatch();
    const { thongTinNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer);
    console.log(thongTinNguoiDung);

    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);


    useEffect(() => {
        const action = LayThongTinNguoiDungAction();
        dispatch(action)
    }, [])

    console.log('thongTinNguoiDung', thongTinNguoiDung);

    const renderTicketItem = function () {
        return thongTinNguoiDung.thongTinDatVe?.map((ticket, index) => {
            const seats = _.first(ticket.danhSachGhe);

            return <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ticket.hinhAnh} />
                    <div className="flex-grow">
                        <h2 className="text-pink-500 title-font font-medium text-2xl">{ticket.tenPhim}</h2>
                        <p className="text-gray-500"><span className="font-bold">Giờ chiếu:</span> {moment(ticket.ngayDat).format('hh:mm A')} - <span className="font-bold">Ngày chiếu:</span>  {moment(ticket.ngayDat).format('DD-MM-YYYY')} .</p>
                        <p><span className="font-bold">Địa điểm:</span> {seats.tenHeThongRap}   </p>
                        <p>
                            <span className="font-bold">Tên rạp:</span>  {seats.tenCumRap} - <span className="font-bold">Ghế:</span>  {ticket.danhSachGhe.map((ghe, index) => { return <span className="text-green-500 text-xl" key={index}> [ {ghe.tenGhe} ] </span> })}
                        </p>
                    </div>
                </div>
            </div>
        })
    }

    return <div className="p-5">

        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">

                <div className="flex flex-wrap -m-2">
                    {renderTicketItem()}
                </div>
            </div>
        </section>

    </div>
}


const ProfileWithFormik = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => {
        // console.log(props);
        return {
            taiKhoan: props.thongTinNguoiDung.taiKhoan,
            matKhau: props.thongTinNguoiDung.matKhau,
            email: props.thongTinNguoiDung.email,
            soDt: props.thongTinNguoiDung.soDT,
            maNhom: props.thongTinNguoiDung.maNhom,
            hoTen: props.thongTinNguoiDung.hoTen,
            loaiNguoiDung: props.thongTinNguoiDung.loaiNguoiDung,
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
        // console.log(values);
        const thongTinCapNhat = {
            ...values,
            maLoaiNguoiDung: values.loaiNguoiDung === "Khách hàng" ? "KhachHang" : "QuanTri",
        }
        if (window.confirm("Bạn có chắc chắn muốn cập nhật thông tin ?")) {
            props.dispatch(capNhatThongTinNguoiDungAction(thongTinCapNhat));
        }
    },

    displayName: 'Register',
})(Profile);

const mapStateToProp = state => {
    return {
        thongTinNguoiDung: state.QuanLyNguoiDungReducer.thongTinNguoiDung,
    }
}

export default connect(mapStateToProp)(ProfileWithFormik);