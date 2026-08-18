import { useState } from "react";
import { supabase } from "@/services/supabase"; // adjust path to your supabase client
import toast from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async () => {
    if (!email) {
      toast.error("Please enter your email address first!");
      return;
    }

    try {
      setLoading(true);
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) throw error;
      toast.success("Password reset email sent! Check your inbox.");
    } catch (error) {
      toast.error(error.message || "Failed to send reset email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* ... your email and password inputs ... */}

      {/* Forgot Password Button / Link */}
      <div className="flex justify-end text-sm mt-2">
        <button
          type="button"
          onClick={handleForgotPassword}
          disabled={loading}
          className="text-primary hover:underline font-medium"
        >
          {loading ? "Sending..." : "Forgot password?"}
        </button>
      </div>

      {/* ... your submit/login button ... */}
    </div>
  );
}