import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import useAuth from '../hooks/useAuth';
import { useForm, SubmitHandler } from 'react-hook-form';
import { signInAnonymously } from 'firebase/auth';

type Inputs = {
  email: string;
  password: string;
};

function login() {
  const [login, setLogin] = useState(false);
  const { signIn, signUp } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (login) {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
  };

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-30 sm:!inline"
        objectFit="cover"
        alt=""
      />
      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 bg-black/80 pb-[3rem] pt-[3rem] px-6 md:mt-0 md:max-w-[28rem] md:px-14"
      >
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="space-y-5">
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Email"
              className={`inputField ${
                errors.email && 'border-b-2 border-orange-500'
              }`}
              {...register('email', { required: true })}
            />
            {errors.email && (
              <p className="text-[13px] font-light  text-orange-500">
                Please enter a valid email.
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <input
              type="password"
              {...register('password', { required: true })}
              placeholder="Password"
              className={`inputField ${
                errors.password && 'border-b-2 border-orange-500'
              }`}
            />
            {errors.password && (
              <p className="text-[13px] font-light  text-orange-500">
                Your password must contain between 4 and 60 characters.
              </p>
            )}
          </div>
        </div>
        <button
          onClick={() => setLogin(true)}
          className="w-full rounded bg-[#e50914] py-3 mt-24 font-semibold"
        >
          Sign In
        </button>
        <div className="flex justify-between text-xs text-[gray]">
          <div className="flex">
            <input type="checkbox" />
            <p className="ml-2">Remember Me</p>
          </div>

          <p>Need help?</p>
        </div>
        <div className="text-[gray]">
          New to Netflix?{' '}
          <button
            type="submit"
            onClick={() => setLogin(false)}
            className="text-white hover:underline"
          >
            Sign Up now.
          </button>
          <p className="text-xs mt-2">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </p>
        </div>
      </form>
    </div>
  );
}

export default login;
