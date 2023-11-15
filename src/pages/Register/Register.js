import { withFormik } from 'formik';
import React from 'react'
import { connect } from 'react-redux';
import { dangKyAction } from '../../redux/actions/QuanLyNguoiDungAction';
import * as Yup from 'yup';

function Register(props) {

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;

    return (
        <section className="bg-gray-50 min-h-screen flex items-center justify-center">
            {/* login container */}
            <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                {/* form */}
                <div className="md:w-1/2 px-8 md:px-16">
                    <h2 className="font-bold text-2xl text-[#002D74]">Register</h2>
                    <form onSubmit={handleSubmit} action className="flex flex-col gap-2">
                        <input onChange={handleChange} className="p-2 mt-8 rounded-xl border" type="text" name="taiKhoan" placeholder="User Name" />
                        <span>{errors.taiKhoan}</span>
                        <div className="relative">
                            <input onChange={handleChange} className="p-2 rounded-xl border w-full" type="password" name="matKhau" placeholder="Password" />
                        </div>
                        <span>{errors.matKhau}</span>
                        <div className="relative">
                            <input onChange={handleChange} className="p-2 rounded-xl border w-full" type="password" name="matKhauNhapLai" placeholder="Confirm Password" />
                        </div>
                        <span>{errors.matKhauNhapLai}</span>
                        <div className="relative">
                            <input onChange={handleChange} className="p-2 rounded-xl border w-full" type="name" name="hoTen" placeholder="Name" />
                        </div>
                        <span>{errors.hoTen}</span>
                        <input onChange={handleChange} class="p-2 rounded-xl border" type="email" name="email" placeholder="Email"></input>
                        <span>{errors.email}</span>
                        <input onChange={handleChange} class="p-2 rounded-xl border" type="text" name="soDt" placeholder="Phone Number"></input>
                        <span>{errors.soDt}</span>
                        <button type='submit' className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Register</button>
                    </form>
                    <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                        <hr className="border-gray-400" />
                        <p className="text-center text-sm">OR</p>
                        <hr className="border-gray-400" />
                    </div>
                    <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
                        <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                        </svg>
                        Login with Google
                    </button>

                </div>
                {/* image */}
                <div className="md:block hidden w-1/2">
                    <img className="rounded-2xl" src="https://cdn.vnreview.vn/720896_481036579250_1466465043611648?wt=6d2b36caf178dff8c8ce0f9e1d1d0a21&rt=5e75137f606f738102c578ee88243fbc&width=1080" />
                </div>
            </div>
        </section>


    )
}

const RegisterWithFormik = withFormik({
    mapPropsToValues: () => ({
        taiKhoan: "",
        matKhau: "",
        matKhauNhapLai: "",
        email: "",
        soDt: "",
        maNhom: "GP01",
        hoTen: "",
    }),

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
        matKhauNhapLai: Yup.string()
            .oneOf([Yup.ref('matKhau'), null], 'Passwords must match'),

    }),

    handleSubmit: (values, { props, setSubmitting }) => {
        // console.log(props);
        props.dispatch(dangKyAction(values));
    },

    displayName: 'Register',
})(Register);

export default connect()(RegisterWithFormik);
