

"use client";

import SignupForm from "@/app/components/SignupForm";
import { useRouter as Router } from "next/navigation";
import { signupUser } from "@/app/API's/api.js";
import { Toaster, toast } from "react-hot-toast";

function SignupPage() {
  const router = Router();

  const handleSignup = async (formData, setFormData) => {
    console.log("1. handleSignup called");

    console.log(
      "Signing up with",
      formData.userName,
      formData.email,
      formData.password,
      formData.confirmPassword
    );

    try {
      console.log("2. sending request");

      const res = await signupUser(formData);

      console.log("3. response received:", res);

      if (res) {
        setFormData({
          userName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });

        toast.success("Signup successful! Please login.");
        router.push("/pages/login");
      }
    } catch (error) {
      console.log("4. ERROR:", error);
      console.log("5. RESPONSE:", error.response);
      console.log("6. DATA:", error.response?.data);

      toast.error(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="min-h-screen px-4 py-1 flex items-center justify-center bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800">
        <SignupForm onSubmit={handleSignup} />
      </div>
    </>
  );
}

export default SignupPage;