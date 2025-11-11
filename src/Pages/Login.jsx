import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Loader2, Chrome } from "lucide-react";
import { auth, googleProvider, db } from "../FireBase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      alert("Login successful ✅");
    } catch (err) {
      alert(err.message);
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      const ref = doc(db, "users", user.uid);
      const snap = await getDoc(ref);
      if (!snap.exists()) {
        await setDoc(ref, {
          name: user.displayName,
          email: user.email,
          uid: user.uid,
          createdAt: serverTimestamp(),
        });
      }
      alert("Google Sign-in successful 🚀");
    } catch (err) {
      alert(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-3xl p-8 md:p-10 max-w-md w-full"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Welcome Back</h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <div className="flex items-center border border-gray-300 rounded-xl px-3">
              <Mail size={18} className="text-gray-400" />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-2 py-2 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <div className="flex items-center border border-gray-300 rounded-xl px-3">
              <Lock size={18} className="text-gray-400" />
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-2 py-2 outline-none"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            disabled={loading}
            className="mt-4 w-full bg-yellow-400 text-gray-900 font-semibold py-2.5 rounded-xl shadow-md hover:bg-yellow-300 transition"
          >
            {loading ? (
              <Loader2 className="animate-spin mx-auto" />
            ) : (
              <>Login</>
            )}
          </motion.button>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="mt-3 w-full flex justify-center items-center gap-2 border border-gray-300 py-2.5 rounded-xl hover:bg-gray-50 transition font-medium text-gray-700"
          >
            <Chrome className="text-yellow-500" size={18} /> Continue with Google
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-yellow-600 font-semibold hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;