"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  signInWithPhoneNumber,
  RecaptchaVerifier,
  getAuth,
} from "firebase/auth";
import app, { usersRef } from "@/firebase/firebase.js";
import swal from "sweetalert";
import { addDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import bcrypt from "bcryptjs";

const Signin = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    mobile_no: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState();
  const auth = getAuth(app);
  const router = useRouter();

  // function to generate the recaptcha
  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        },
        "expired-callback": () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
        },
      }
    );
  };

  // function to request the otp from the authentication
  const requestOtp = (e) => {
    e.preventDefault();
    setLoading(true);
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, "+91" + user?.mobile_no, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        swal({
          title: "OTP Sent Successfully!",
          icon: "success",
          buttons: false,
          timer: 3000,
        });
        setLoading(false);
        setOtpSent(true);
      })
      .catch((err) => {
        swal({
          title: err,
          icon: "error",
          buttons: false,
          timer: 2500,
        });
        setLoading(false);
        console.log(err);
      });
  };

  // function to verify the otp
  const verifyOTP = (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      window.confirmationResult.confirm(otp).then((result) => {
        uploadData();
        swal({
          title: "Verification Successful",
          icon: "success",
          buttons: false,
          timer: 3000,
        });
        router.push("/login");
      });
    } catch (err) {
      swal({
        title: err,
        icon: "error",
        buttons: false,
        timer: 3000,
      });
      setLoading(false);
    }
  };

  const uploadData = async () => {
    try {
      const salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(user.password, salt);
      await addDoc(usersRef, {
        first_name: user.first_name,
        last_name: user.last_name,
        password: hash,
        mobile_no: user.mobile_no,
      });
    } catch (err) {
      swal({
        title: err,
        icon: "error",
        buttons: false,
        timer: 3000,
      });
      console.log(err);
    }
  };
  return (
    <div className="flex justify-center min-h-[800px]">
      {otpSent && (
        <form className="flex flex-col self-start gap-4 w-10/12 sm:w-[35%] max-w-[450px] sm:min-w-[350px] py-4 px-8 shadow-md border-2 mt-14">
          <input
            name="text"
            placeholder="Enter the Otp"
            className="outline-none w-full p-2 border-b-2"
            onChange={(e) => setOtp(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white font-medium self-center rounded-md p-2 w-36"
            onClick={(e) => verifyOTP(e)}
          >
            Confirm OTP
          </button>
        </form>
      )}
      {!otpSent && (
        <form className="flex flex-col self-center gap-4 w-10/12 sm:w-[35%] max-w-[450px] sm:min-w-[350px] py-4 px-8 shadow-md border-2">
          <h2 className="text-2xl text-blue-600 text-center font-bold">
            Sign In
          </h2>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="outline-none w-full p-2 border-b-2"
              onChange={(e) => setUser({ ...user, first_name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="outline-none w-full p-2 border-b-2"
              onChange={(e) => setUser({ ...user, last_name: e.target.value })}
            />
          </div>
          <input
            type="text"
            placeholder="Mobile No"
            className="outline-none w-full p-2 border-b-2"
            onChange={(e) => setUser({ ...user, mobile_no: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="outline-none w-full p-2 border-b-2"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button
            className={`bg-blue-500 text-white font-medium self-center rounded-md p-2 ${
              loading ? "w-36" : "w-24"
            }`}
            onClick={(e) => requestOtp(e)}
          >
            {loading ? "Sending Otp..." : "Sign in"}
          </button>
          <div className="self-center flex gap-2">
            <p className="text-red-500 text-sm">Already have an account?</p>
            <Link href="/login" className="text-blue-500 text-sm">
              Log in
            </Link>
          </div>
          <div id="recaptcha-container"></div>
        </form>
      )}
    </div>
  );
};

export default Signin;
