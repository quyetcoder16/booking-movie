import { Button, Input, Tabs } from 'antd';
import { UserOutlined, KeyOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { LayThongTinNguoiDungAction } from '../../redux/actions/QuanLyNguoiDungAction';
import _, { functionsIn } from 'lodash';
import moment from 'moment';

export default function Profile(props) {



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
    return (<>
        <form className='container grid grid-cols-2 gap-4'>
            <div>
                <div className='my-3 text-lg' >Email:</div>
                <Input size="large" placeholder="Email" prefix={<MailOutlined />} />
                <div className='my-3 text-lg'  >Họ Tên:</div>
                <Input size="large" placeholder="name" prefix={<UserOutlined />} />
                <div className='my-3 text-lg'  >Số điện thoại:</div>
                <Input size="large" placeholder="phone number" prefix={<PhoneOutlined />} />
            </div>
            <div>
                <div className='my-3 text-lg'  >Tài Khoản:</div>
                <Input size="large" placeholder="Tài Khoản" prefix={<UserOutlined />} />
                <div className='my-3 text-lg'  >Mật Khẩu:</div>
                <Input size="large" placeholder="Mật Khẩu" prefix={<KeyOutlined />} />
                <div className='mt-5 grid grid-cols-2 gap-3'>
                    <Button danger>update</Button>
                </div>
            </div>
        </form>
    </>)
}

function LichSuDatVe(props) {

    const dispatch = useDispatch();
    const { thongTinNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer);

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
