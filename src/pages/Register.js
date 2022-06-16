import React from 'react'
import LoginImg from '../assets/img/Loginimage.png';

const Register = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block bg-register bg-no-repeat'>
            <img classname='w-full h-full object-cover' src={LoginImg} alt=''/>
        </div>
        <div className='flex flex-col justify-center'>
            <form className='max-w-[450px] w-full mx-auto p-8 px-8 rounded-2xl'>
                <h2 className='text-35px text-black text-2xl font-bold py-4'>Daftar</h2>
                <div className="flex flex-col text-black py-2">
            <label>Namaa</label>
            <input
              className="rounded-xl p-2 text-black"
              placeholder="Nama Lengkap"
              type="text"
            />
          </div>
                <div className="flex flex-col text-black py-2">
            <label>Email</label>
            <input
              className="rounded-xl p-2 text-black"
              placeholder="Contoh: johndee@gmail.com"
              type="text"
            />
          </div>
          <div className="flex flex-col text-black py-2">
            <label>Password</label>
            <input
              className="rounded-xl p-2 text-black"
              placeholder="Masukkan Password"
              type="password"
            />
          </div>
          <button className="rounded-xl w-full my-5 py-2 bg-purple-700 rounded-md font-bold shadow-lg shadow-purple-500/50 hover:shadow-purple/40 text-white">
            Daftar
          </button>
          <div>
            <p className="text-black text-center p-4">
              Sudah punya akun?{" "}
              <button className="text-purple-700 font-bold">
                Masuk di sini
              </button>
            </p>
          </div>
            </form>
        </div>
    </div>
  );
};

export default Register;